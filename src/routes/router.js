import Express from "express";
import {
  createUser,
  getUser,
  loginUser,
} from "../controllers/user-controller.js";

const router = Express.Router();

router.get("/user", getUser);
router.post("/user/register", createUser);
router.post("/user/login", loginUser);

export default router;
