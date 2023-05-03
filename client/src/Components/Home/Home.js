import React from "react";
import Posts from "./Posts/Posts";
import Grow from "@mui/material/Grow";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";

import { useNavigate } from "react-router-dom";

const StyledFab = styled(Fab)({
  position: "absolute",
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: "0 auto",
});

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Grow in style={{ background: "#F3DEBA" }}>
        <Box>
          <Grid
            container
            justify="space-between"
            alignItems="Stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts></Posts>
            </Grid>
          </Grid>
        </Box>
      </Grow>
      <AppBar
        position="sticky"
        elevation={0}
        style={{ background: "#A9907E" }}
        sx={{ top: "auto", bottom: 0 }}
      >
        <Toolbar>
          {/* <IconButton color="inherit" aria-label="open drawer">
          <MenuIcon />
        </IconButton> */}
          <StyledFab
            sx={{ bgcolor: "#675D50" }}
            aria-label="add"
            onClick={() => navigate("/addpost")}
          >
            <AddIcon />
          </StyledFab>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="black">
            <SearchIcon />
          </IconButton>
          <IconButton color="black">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Home;
