import jwt from "jsonwebtoken";
import prisma from "../db/prisma.js";
const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(400).json({ msg: "token not available" });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await prisma.user.findUnique({
            where: { id: decoded.userId },
            select: {
                id: true,
                username: true,
                fullName: true,
                gender: true,
                profilePic: true,
            },
        });
        if (!user) {
            return res.status(400).json({ msg: "user not found" });
        }
        req.user = user;
        next();
    }
    catch (error) {
        console.log("Error in protectRoute ............");
        console.log(error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
};
export default protectRoute;
