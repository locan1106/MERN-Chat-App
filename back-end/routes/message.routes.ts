import { Router } from "express";
import { getMessage, sendMessage } from "../controllers/message.controller";
import protectRoute from "../middleware/protectRoute";

const router = Router();

router.post("/send/:id", protectRoute, sendMessage);
router.get("/:id", protectRoute, getMessage);

export default router;
