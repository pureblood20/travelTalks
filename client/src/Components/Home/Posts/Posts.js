import React from "react";
import Post from "./Post/Post";
import { useSelector } from "react-redux";
import { Grid, CircularProgress, Typography } from "@mui/material";

//workng on post

const Posts = () => {
  const { posts, isloading } = useSelector((state) => state.posts);
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <section>
      {!user?.name && (
        <Typography
          variant="h6"
          component="div"
          align="left"
          sx={{ flexGrow: 1, margin: "2rem" }}
        >
          Please sign in to like posts.
        </Typography>
      )}
      {isloading ? (
        <CircularProgress />
      ) : (
        <div style={{ margin: "2rem" }}>
          <Grid minWidth={200} container spacing={4}>
            {posts.length === 0 ? (
              <h1>No posts</h1>
            ) : (
              posts.map((post) => (
                <Grid item minWidth={300} xs={12} sm={6} md={4} key={post._id}>
                  <Post post={post}></Post>
                </Grid>
              ))
            )}
          </Grid>
        </div>
      )}
    </section>
  );
};

export default Posts;
