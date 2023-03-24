import express from "express";
import mongoose from "mongoose";
import { Blog } from "./models/blog.js";
import cors from "cors";
import { config } from "dotenv";

// .env conguration
config();
const app = express();

// Middlewares
app.use(express.json());
app.use(cors({ origin: "*" }));

// Connect to DB
const dbURI = process.env.DB_URI;
mongoose
  .connect(dbURI)
  .then(() =>
    app.listen(8001, () => console.log("Server up and running on port 8001!"))
  )
  .catch((err) => {
    console.log(err);
  });

app.get("/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    console.log(error.message);
    res.status(400).json(error.message);
  }
});

app.post("/blogs", async (req, res) => {
  try {
    const response = await Blog.create(req.body);
    res.status(201).json({ success: true });
  } catch (error) {
    res.status(401).json(error);
  }
});

app.delete("/blogs/:id", async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    res.status(202).json({ deleted: true });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: error.message });
  }
});

app.get("/blogs/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    blog && res.status(200).json(blog);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: error.message });
  }
});
