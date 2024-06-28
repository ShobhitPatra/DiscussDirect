import express from "express";
import protectRoute from "../middlewares/protectRoute.js";
import {
  login,
  logout,
  signup,
  getMe,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/me", protectRoute, getMe);

export default router;
