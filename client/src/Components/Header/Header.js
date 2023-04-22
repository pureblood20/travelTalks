import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Typography, Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Grid } from "@mui/material";
import { AUTH_ACTION_TYPE } from "../../store/auth/auth.type";

const Header = () => {
  const navigate = useNavigate();

  const { auth } = useSelector((state) => state.auth);
  // const { given_name } = auth;
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
        elevation={0}
        style={{ background: "#A9907E", color: "black" }}
      >
        <Toolbar>
          <Typography
            variant="h4"
            sx={{
              flexGrow: 1,
              "&:hover": {
                cursor: "pointer",
              },
            }}
            onClick={() => navigate("/")}
          >
            TravelTalks
          </Typography>
          <div>
            {auth.name ? (
              <Grid>
                <Typography variant="h6">
                  {auth.name} &nbsp;
                  <Button
                    sx={{
                      bgcolor: "#675D50",
                      color: "black",
                      ":hover": {
                        bgcolor: "#F3DEBA",
                        color: "black",
                      },
                    }}
                    variant="contained"
                    onClick={() => navigate(`/myprofile/${auth._id}`)}
                  >
                    MY PROFILE
                  </Button>
                  &nbsp;
                  <Button
                    sx={{
                      bgcolor: "#675D50",
                      color: "black",
                      ":hover": {
                        bgcolor: "#F3DEBA",
                        color: "black",
                      },
                    }}
                    variant="contained"
                    onClick={() => logout()}
                  >
                    LOGOUT
                    <LogoutIcon />
                  </Button>{" "}
                </Typography>
              </Grid>
            ) : (
              <Button
                sx={{
                  bgcolor: "#675D50",
                  ":hover": {
                    bgcolor: "#A9907E",
                    color: "white",
                  },
                }}
                variant="contained"
                onClick={() => navigate("/auth")}
              >
                LOGIN
                <LoginIcon />
              </Button>
            )}
          </div>{" "}
        </Toolbar>
      </AppBar>
      <Outlet />
    </div>
  );
};

export default Header;
