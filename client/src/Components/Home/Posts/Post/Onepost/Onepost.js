import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Typography, CardMedia, Box } from "@mui/material";

const Onepost = () => {
  const { currentId } = useParams();
  const { posts } = useSelector((state) => state.posts);
  const post = posts.filter((p) => p._id === currentId);
  return (
    <Box sx={{ mr: 20, ml: 20 }}>
      <Typography variant="h2" color="text.primary">
        {post[0].creater}
      </Typography>
      <center>
        {/* <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: post[0].selectedFile,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        > */}
        <CardMedia
          component="img"
          sx={{ width: "auto", height: "auto" }}
          image={post[0].selectedFile}
          alt="image"
        />
      </center>
      <Typography variant="h3" color="text.primary">
        {post[0].title}
      </Typography>
      <Typography variant="h5" color="text.primary">
        {post[0].message}
      </Typography>
    </Box>
  );
};

export default Onepost;
