import express from "express";
import { checkAuth, login, logout, signup, updateProfile } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get('/users', getUsersForSidebar);
router.get('/:id', getMessages);
router.post('/send/:id', sendMessage);

router.put("/update-profile", updateProfile);

router.get("/check", protectRoute, checkAuth);

export default router;
