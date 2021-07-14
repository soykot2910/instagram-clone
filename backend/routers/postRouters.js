import express from "express";
import upload from "../middleware/fileUpload.js";
const router = express.Router();
import { createPost, allPost, myPost } from "../controller/postController.js";
import { protect } from "../middleware/authMiddleware.js";

router.post("/createPost", protect, upload.array("image", 10), createPost);
router.route("/").get(allPost);
router.get("/mypost", myPost);

export default router;
