import React from "react";
import Post from "./Post/Post";
import { useSelector } from "react-redux";
import { Grid, CircularProgress, Typography } from "@mui/material";

//workng on post

const Posts = () => {
  const { posts, isloading } = useSelector((state) => state.posts);
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <div>
      {isloading ? (
        <CircularProgress />
      ) : (
        <Grid minWidth={200} container spacing={4} sx={{ my: 4 }}>
          {posts.length === 0 ? (
            <h1>No posts</h1>
          ) : !user?.name ? (
            <Typography
              variant="h6"
              component="div"
              align="center"
              sx={{ flexGrow: 1 }}
            >
              Please sign in to view posts.
            </Typography>
          ) : (
            posts.map((post) => (
              <Grid item minWidth={300} xs={12} sm={6} md={4} key={post._id}>
                <Post post={post}></Post>
              </Grid>
            ))
          )}
        </Grid>
      )}
    </div>
  );
};

export default Posts;
