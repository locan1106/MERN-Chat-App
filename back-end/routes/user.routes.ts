import { Router } from "express";
import { getUsersForSidebar } from "../controllers/user.controller";
import protectRoute from "../middleware/protectRoute";

const router = Router();

router.get("/", protectRoute, getUsersForSidebar);

export default router;
