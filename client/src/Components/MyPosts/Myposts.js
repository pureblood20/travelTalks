import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import Button from "@mui/material/Button";
import { deletePost } from "../../store/posts/post.action";

export const Myposts = () => {
  const { currentId } = useParams();
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const myPosts = posts.filter((post) => post.creater === currentId);
  console.log(myPosts);
  return (
    <div>
      {myPosts.length === 0 ? (
        <>
          <h1>No posts created by you.</h1>
          <h3>Please click the below button to add new post.</h3>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#675D50",
              color: "black",
              ":hover": {
                bgcolor: "#F3DEBA",
                color: "black",
              },
            }}
            onClick={() => navigate("/addpost")}
          >
            Add New Post
          </Button>
        </>
      ) : (
        <>
          <TableContainer component={Paper} sx={{ marginY: 4 }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell align="right">Message</TableCell>
                  <TableCell align="right">Delete</TableCell>
                  <TableCell align="right">Edit</TableCell>
                  <TableCell align="right">View</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {myPosts.map((post) => (
                  <TableRow
                    key={post._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {post.title}
                    </TableCell>
                    <TableCell align="right">{post.message}</TableCell>
                    <TableCell align="right">
                      <IconButton
                        aria-label="delete"
                        onClick={() => {
                          dispatch(deletePost(post._id));
                        }}
                      >
                        <DeleteIcon style={{ color: "#675D50" }} />
                      </IconButton>
                    </TableCell>
                    <TableCell align="right">
                      <IconButton
                        aria-label="edit"
                        onClick={() => {
                          navigate(`/editpost/${post._id}`);
                        }}
                      >
                        <EditIcon style={{ color: "#675D50" }} />
                      </IconButton>
                    </TableCell>
                    <TableCell align="right">
                      <IconButton
                        aria-label="readmore"
                        onClick={() => {
                          navigate(`/viewpost/${post._id}`);
                        }}
                      >
                        <ReadMoreIcon style={{ color: "#675D50" }} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </div>
  );
};
