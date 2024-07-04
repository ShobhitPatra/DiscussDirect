import bcryptjs from "bcryptjs";
import prisma from "../db/prisma.js";
import generateTokenAndSetCookie from "../utils/generateTokenAndSetCookie.js";
export const signup = async (req, res) => {
    try {
        const { username, fullName, gender, password, confirmPassword } = req.body;
        if (!username || !fullName || !gender || !password || !confirmPassword) {
            res.status(400).json({ msg: "Please fill all the feilds" });
        }
        if (password !== confirmPassword) {
            res.status(400).json({ msg: "passowrds does not match" });
        }
        const existingUser = await prisma.user.findUnique({ where: { username } });
        if (existingUser) {
            res.status(400).json({ msg: "username already exists" });
        }
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);
        const male_ProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const female_ProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
        const newUser = await prisma.user.create({
            data: {
                username,
                fullName,
                gender,
                password: hashedPassword,
                profilePic: gender == "male" ? male_ProfilePic : female_ProfilePic,
            },
        });
        if (newUser) {
            const token = generateTokenAndSetCookie(newUser.id, res);
            res.status(200).json({
                msg: "Signed up successfully",
                userId: newUser.id,
                username: newUser.username,
                fullName: newUser.fullName,
                gender: newUser.gender,
                profilePic: newUser.profilePic,
                token,
            });
        }
        throw new Error("Unexpected error during signup");
    }
    catch (error) {
        console.log("error in signup controller ...........");
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
};
export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            res.status(400).json({ msg: "Please fill in all the feilds" });
        }
        const user = await prisma.user.findUnique({ where: { username } });
        if (!user) {
            res.status(400).json({ msg: "username does not exist" });
        }
        const isPasswordCorrect = await bcryptjs.compare(password, user?.password || "");
        if (!isPasswordCorrect) {
            res.status(400).json({ msg: "password is incorrect" });
        }
        const token = generateTokenAndSetCookie(user?.id || "", res);
        res.status(200).json({
            msg: "Logged in successfully",
            userId: user?.id,
            username: user?.username,
            fullName: user?.fullName,
            gender: user?.gender,
            profilePic: user?.profilePic,
            token,
        });
    }
    catch (error) {
        console.log("error in login controller ...........");
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
};
export const logout = async (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ msg: "Logged out successfully" });
    }
    catch (error) {
        console.log("error in logout controller ...........");
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
};
export const getMe = async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await prisma.user.findUnique({ where: { id: userId } });
        if (!user) {
            res.status(400).json({ msg: "user not found " });
        }
        res.status(200).json({
            userId: user?.id,
            username: user?.username,
            fullName: user?.fullName,
            gender: user?.gender,
            profilePic: user?.profilePic,
        });
    }
    catch (error) {
        console.log("error in getMe controller ...........");
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
};
