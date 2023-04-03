import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LoginIcon from "@mui/icons-material/Login";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Grid } from "@mui/material";
import { AUTH_ACTION_TYPE } from "../../store/auth/auth.type";

const Header = () => {
  const navigate = useNavigate();
  const { auth } = useSelector((state) => state.auth);
  const { given_name } = auth;
  const dispatch = useDispatch();

  const logout = () => {
    dispatch({ type: AUTH_ACTION_TYPE.GOOGLE_SIGN_OUT });
    navigate("/auth");
  };
  /*   useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
    console.log("kjbkjjkjk");
  }, [auth]); */

  return (
    <div>
      <AppBar
        component="nav"
        position="sticky"
        style={{ background: "#2E3B55" }}
      >
        <Toolbar>
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            TravelTalks
          </Typography>
          <div>
            {given_name ? (
              <Grid>
                <Typography variant="h6">
                  {given_name}
                  <IconButton color="inherit" onClick={() => logout()}>
                    LOGOUT
                    <LogoutIcon />
                  </IconButton>
                </Typography>
              </Grid>
            ) : (
              <IconButton color="inherit" onClick={() => navigate("/auth")}>
                LOGIN
                <LoginIcon />
              </IconButton>
            )}
          </div>
        </Toolbar>
      </AppBar>
      <Outlet />
    </div>
  );
};

export default Header;
