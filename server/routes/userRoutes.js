import express from "express";
import { createUser } from "../controllers/userController.js";
import { getUser } from "../controllers/userController.js";
const router = express.Router();

router.post("/users", createUser);
router.get("/users",getUser);
export default router;