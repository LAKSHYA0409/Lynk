import express from "express";
import {
  getUserInfo,
  Login,
  Signup,
  updateProfile,
  addProfileImage,
  removeProfileImage,
  Logout
} from "../controllers/AuthController.js";
import { verifyToken } from "../middlewares/AuthMiddleware.js";
import multer from "multer";

const authRoutes = express.Router();

const upload = multer({ dest: "uploads/profiles/" });

authRoutes.post("/signup", Signup);
authRoutes.post("/login", Login);
authRoutes.get("/user-info", verifyToken, getUserInfo);
authRoutes.post("/update-profile", verifyToken, updateProfile);
authRoutes.post(
  "/add-profile-image",
  verifyToken,
  upload.single("profile-image"),
  addProfileImage
);
authRoutes.delete('/remove-profile-image',verifyToken,removeProfileImage)
authRoutes.post('/logout',Logout)

export default authRoutes;
