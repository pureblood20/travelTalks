import mongoose from "mongoose";
import PostMessage from "../Models/postMessage.js";

export const getPost = async (req, res) => {
  try {
    const getmsg = await PostMessage.find();
    res.json(getmsg);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  try {
    const { title, message, creater, tags, selectedFile } = req.body;
    const createNew = await PostMessage.create({
      title,
      message,
      creater,
      tags,
      selectedFile,
    });
    // await createNew.save()
    res.status(201).json(createNew);
  } catch (error) {}
};

export const editPost = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const post = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).send("No post with the above id");
    } else {
      const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {
        new: true,
      });
      res.json(updatedPost);
    }
  } catch (error) {}
};

export const deletePost = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const deletePo = await PostMessage.findByIdAndRemove(_id);
    res.json(deletePo);
  } catch (error) {
    console.log(error);
  }
};

export const likePost = async (req, res) => {
  try {
    const { id: _id } = req.params;

    const post = await PostMessage.findById(_id);
    const like = await PostMessage.findByIdAndUpdate(
      _id,
      { likeCount: post.likeCount + 1 },
      { new: true }
    );
    res.json(like);
  } catch (error) {
    console.log(error);
  }
};

export const getOnePost = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const onePost = await PostMessage.findOne(_id);
    res.json(onePost);
  } catch (error) {}
};
