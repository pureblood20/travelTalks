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
    const post = req.body;
    const createNew = await PostMessage.create({
      ...post,
      creater: req.userId,
      createdAt: new Date().toISOString(),
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

    if (!req.userId) return res.json({ message: "unauthenticated" });

    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).send("No post with the above id");
    }
    const post = await PostMessage.findById(_id);
    const index = post.likeCount.findIndex((id) => id === String(req.userId));

    if (index === -1) {
      //like the post
      post.likeCount.push(req.userId);
    } else {
      //dislike a post
      post.likeCount = post.likeCount.filter((id) => id !== String(req.userId));
    }
    const like = await PostMessage.findByIdAndUpdate(_id, post, { new: true });

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
