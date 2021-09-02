import express from "express";
const router = express.Router();

import {
  authUser,
  registerUser,
  updateUser,
  deleteUser,
} from "../controller/userController.js";
import { protect } from "../middleware/authMiddleware.js";

router.post("/new", registerUser);

router.post("/signin", authUser);

router.route("/:id").delete(deleteUser).put(updateUser);

export default router;
