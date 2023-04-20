import { React, useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import FileBase from "react-file-base64";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { createNewPost, updatePost } from "../../store/posts/post.action";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Form = () => {
  const { currentId } = useParams();
  const navigate = useNavigate();
  const { posts } = useSelector((state) => state.posts);
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const dispatch = useDispatch();
  const post = posts.find((p) => (currentId ? p._id === currentId : null));
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    if (post) {
      setPostData(post);
    }
  }, [post]);

  const handleClick = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updatePost(currentId, { ...postData, name: user?.name }));
    } else {
      dispatch(createNewPost({ ...postData, name: user?.name }));
    }
    navigate("/");
  };

  const clear = (e) => {
    e.preventDefault();
    setPostData({
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  if (!user?.name) {
    return (
      <Typography
        variant="h1"
        component="div"
        align="center"
        sx={{ flexGrow: 1 }}
      >
        Please sign in to add new post
      </Typography>
    );
  }

  return (
    <Box
      component="form"
      sx={{
        m: 0.5,
        p: 2,
        boxShadow: 3,
      }}
      noValidate
      autoComplete="off"
    >
      <Typography
        variant="h6"
        component="div"
        align="center"
        sx={{ flexGrow: 1 }}
      >
        {" "}
        Share your travel talks..{" "}
      </Typography>
      <div>
        <TextField
          required
          id="outlined-size-small"
          label="Title"
          size="small"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
          fullWidth
        />{" "}
        <br />
        <br />
        <TextField
          required
          id="outlined-size-small"
          label="Message"
          size="small"
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
          fullWidth
        />
        <br />
        <br />
        <TextField
          required
          id="outlined-size-small"
          label="Tags"
          size="small"
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
          fullWidth
        />
        <br />
        <br />
        <div>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <br></br>
        <Button
          variant="outlined"
          color="primary"
          fullWidth
          onClick={handleClick}
        >
          Submit
        </Button>{" "}
        <br /> <br />
        <Button variant="outlined" color="error" fullWidth onClick={clear}>
          Clear
        </Button>
      </div>
    </Box>
  );
};

export default Form;
