import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import LogoutIcon from "@mui/icons-material/Logout";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import { logout } from "../../store/authSlice";

function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout("logout"));
    navigate("/");
  };

  return (
    <AppBar position="static">
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100",
        }}
      >
        <Toolbar disableGutters sx={{ marginLeft: "35%" }}>
          <FitnessCenterIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 2 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            WORKOUT PLAN GENERATOR
          </Typography>
          <FitnessCenterIcon sx={{ display: { xs: "none", md: "flex" } }} />
          <FitnessCenterIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 2 }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            WORKOUT PLAN GENERATOR
          </Typography>
          <FitnessCenterIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
        </Toolbar>
        <Button
          sx={{ marginLeft: "auto", display: { xs: "none", md: "flex" } }}
          variant="contained"
          type="button"
          color="secondary"
          onClick={handleLogout}
        >
          Logout
        </Button>
        <Button>
          <LogoutIcon
            color="info"
            fontSize="large"
            sx={{
              display: { xs: "flex", md: "none" },
              bgcolor: "white",
              borderRadius: "5px",
            }}
          />
        </Button>
      </Container>
    </AppBar>
  );
}
export default NavBar;
