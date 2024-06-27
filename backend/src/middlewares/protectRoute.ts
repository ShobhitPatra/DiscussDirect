import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import prisma from "../db/prisma.js";

interface DecodedToken extends JwtPayload {
  userId: string;
}

declare global {
  namespace Express {
    export interface Request {
      user: {
        id: string;
      };
    }
  }
}

const protectRoute = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(400).json({ msg: "token not available" });
    }

    // if (!process.env.JWT_SECRET) {
    //   return res.status(400).json({ msg: "JWT secret is not set" });
    // }

    // let decoded: DecodedToken;
    // try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET) as DecodedToken;
    // } catch (error) {
    //   return res.status(400).json({ msg: "token verification failed" });
    // }

    const user: any = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: {
        id: true, // Include the id in the selection
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
  } catch (error) {
    console.log("Error in protectRoute ............");
    console.log(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

export default protectRoute;
