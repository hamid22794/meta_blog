import express from "express";
import upload from "../utils/upload.js";
import {
  createPost,
  getPosts,
  getPost,
  updatePost,
} from "../controller/post-controller.js";

import {uploadImage} from "../controller/image-controller.js"

import {
  createCategory,
  getCategories,
  getCategory,
} from "../controller/category-controller.js";

import {
  loginUser,
    signUp
  } from "../controller/user-controller.js";

const router = express.Router();

// create user
router.post("/sign_up", signUp);
router.post("/login", loginUser);

// image upload
router.post("/file/upload", upload.single('file'),uploadImage);
router.get("/file/:filename", getImage);

// create post
router.post("/create_post", createPost);
router.put("/update_post/:id", updatePost);

// Get posts
router.get("/get_posts", getPosts);
router.get("/get_posts/:id", getPost);

// create categories
router.post("/create_category", createCategory);
router.get("/get_categories", getCategories);
router.get("/get_category/:id", getCategory);

export default router;
