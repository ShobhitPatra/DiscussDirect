import { Response } from "express";
import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId: string, res: Response) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET!, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 1000 * 60 * 60 * 24 * 15,
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "development",
  });
  return token;
};

export default generateTokenAndSetCookie;
