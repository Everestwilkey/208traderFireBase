import { Router } from "express";
const router = Router();

import {
  getAllPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/postController.js";

router.route("/").get(getAllPosts).post(createPost);
router.route("/:id").get(getPost).put(updatePost).delete(deletePost);

// Other router setup ...
export default router;
