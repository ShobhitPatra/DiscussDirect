import express from "express";
import {
  login,
  logout,
  signup,
  getMe,
} from "../controllers/auth.controller.js";
import protectRoute from "../middlewares/protectRoute.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello from auth");
});
router.get("/me", protectRoute, getMe);
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

export default router;
