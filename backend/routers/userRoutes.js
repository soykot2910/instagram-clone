import express from "express";

const router = express.Router();

import {
  addUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
} from "../controller/userController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/signup").post(protect, addUser);
router.route("/signin").post(protect, getUser);

router.get("/p", protect, (req, res) => {
  res.json({ he: "errolo" });
});

router.route("/:id").delete(deleteUser).get(getUser).put(updateUser);

export default router;
