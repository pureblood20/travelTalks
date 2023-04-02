import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import Moment from "react-moment";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deletePost, likeCount } from "../../../../store/posts/post.action";

const Post = ({ post }) => {
  const navigate = useNavigate();
  console.log(post.message.length);
  // let creator = "";
  // try {
  //   creator = post.creater.slice(0, 1);
  // } catch (err) {
  //   console.log(err);
  // }

  // const tag = post.tags[0].replace(",", "#");

  const dispatch = useDispatch();
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {post.creater}
            </Avatar>
          }
          title={post.creater}
          subheader={<Moment fromNow>{post.createdAt}</Moment>}
        />
        <CardMedia
          component="img"
          height="194"
          image={post.selectedFile}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            #{post.tags}
          </Typography>

          <Typography variant="h4" color="text.primary">
            {post.title}
          </Typography>
          <Typography variant="h6" color="text.primary">
            {post.message.length > 16
              ? post.message.slice(0, 15) + "...."
              : post.message}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            aria-label="add to favorites"
            onClick={(e) => {
              dispatch(likeCount(post._id));
            }}
          >
            <FavoriteIcon />
            {post.likeCount}
          </IconButton>
          <IconButton
            aria-label="delete"
            onClick={() => {
              dispatch(deletePost(post._id));
            }}
          >
            <DeleteIcon />
          </IconButton>
          <IconButton
            aria-label="edit"
            onClick={() => {
              navigate(`editpost/${post._id}`);
            }}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            aria-label="readmore"
            onClick={() => {
              navigate(`viewpost/${post._id}`);
            }}
          >
            <ReadMoreIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default Post;
