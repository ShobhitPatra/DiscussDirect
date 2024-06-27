import { Request, Response } from "express";
import bcryptjs from "bcryptjs";
import prisma from "../db/prisma.js";
import generateTokenAndSetCookie from "../utils/generateTokenAndSetCookie.js";

export const signup = async (req: Request, res: Response) => {
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
        userId: newUser.id,
        username: newUser.username,
        fullName: newUser.fullName,
        gender: newUser.gender,
        profilePic: newUser.profilePic,
        token,
      });
    }
    throw new Error("Unexpected error during signup");
  } catch (error) {
    console.log("error in signup controller ");
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const login = async (req: Request, res: Response) => {};
export const logout = async (req: Request, res: Response) => {};
