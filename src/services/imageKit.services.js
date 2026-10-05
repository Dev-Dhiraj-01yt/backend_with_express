import dotenv from "dotenv";
import mongoose from "mongoose";
import multer from "multer"; 
import ImageKit from "@imagekit/nodejs"; 

dotenv.config();
const upload = multer({ storage: multer.memoryStorage() });

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});    