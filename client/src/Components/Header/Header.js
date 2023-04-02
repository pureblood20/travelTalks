import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LoginIcon from "@mui/icons-material/Login";
import IconButton from "@mui/material/IconButton";
import { useNavigate, Outlet } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <AppBar
        component="nav"
        position="sticky"
        style={{ background: "#2E3B55" }}
      >
        <Toolbar>
          <Typography variant="h2" sx={{ flexGrow: 1 }}>
            TravelTalks
          </Typography>
          <IconButton color="inherit" onClick={() => navigate("/auth")}>
            LOGIN
            <LoginIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Outlet />
    </div>
  );
};

export default Header;
