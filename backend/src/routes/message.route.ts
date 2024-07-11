import express from "express";
import protectRoute from "../middlewares/protectRoute.js";
import {
  sendMessage,
  getMessages,
  getSideBarUsers,
} from "../controllers/message.controller.js";
const router = express.Router();

router.post("/send/:id", protectRoute, sendMessage);
router.get("/bulk", protectRoute, getSideBarUsers);
router.get("/:id", protectRoute, getMessages);

export default router;
