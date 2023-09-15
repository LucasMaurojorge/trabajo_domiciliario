import Express from "express";
import { createUser, getUser } from "../controllers/user-controller.js";

const router = Express.Router();

router.get("/user", getUser);
router.post("/user/auth", createUser);

export default router;
