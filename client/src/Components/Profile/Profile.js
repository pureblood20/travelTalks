import React from "react";
import { useSelector } from "react-redux";
import { Typography, Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";

const Profile = () => {
  const { auth } = useSelector((state) => state.auth);

  return (
    <Box sx={{ mr: 20, ml: 20 }}>
      <br></br> <br></br>
      <center>
        <Avatar
          sx={{ bgcolor: "#675D50", width: 100, height: 100 }}
          aria-label="profile"
        ></Avatar>
        <Typography variant="h2" color="text.primary">
          {auth.name}
        </Typography>
        <Typography variant="h3" color="text.primary">
          {auth.email}
        </Typography>
      </center>
    </Box>
  );
};

export default Profile;
