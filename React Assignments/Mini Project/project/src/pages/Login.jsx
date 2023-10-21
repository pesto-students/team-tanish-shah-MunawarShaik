// Login.js
import { Box, Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import "../components/WorkOutForm/form.css";
import { useEffect } from "react";
export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // Check if the user is already logged in (e.g., username is stored in localStorage)
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (storedUsername && storedPassword) {
      setUsername(storedUsername);
      setPassword(storedPassword);
    }
  }, []);

  const handleLogin = () => {
    console.log(username, password);
    console.log(dispatch(login("login")));
    dispatch(login("login"));
    // Redirect to the home page on successful login
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    navigate("/home");
    // if (username === "user" && password === "password") {

    // }
  };
  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
        width: "80vw",
        height: "100vh",
        margin: "20px",
        borderRadius: "6px",
        paddingBottom: "10px",
      }}
    >
      <Box className="loginBox">
        <h2 className="heading heading2">WELCOME TO WORKOUT PLAN GENERATOR</h2>
        <Box
          sx={{
            width: "60%",
            alignSelf: "center",
            height: "40%",
          }}
        >
          <img
            alt="loginImage"
            className="image"
            src="https://res.cloudinary.com/deodlm2m0/image/upload/v1696522650/young-fitness-man-studio_7502-5008_yupjcn.avif"
          />
        </Box>
        <Box
          sx={{
            width: "80%",
            alignSelf: "center",
            gap: "20px",
            display: "flex",
            flexDirection: "column",
            border: "1px solid aqua",
          }}
          component="form"
          onSubmit={handleLogin}
        >
          <div>
            <label className="label">
              Name :
              <TextField
                size="small"
                label="Name"
                name="name"
                type="text"
                variant="outlined"
                autoComplete={username}
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
          </div>
          <label className="label">
            Password :
            <TextField
              size="small"
              label="Password"
              name="password"
              type="password"
              variant="outlined"
              autoComplete={password}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <Button
            component="button"
            type="submit"
            variant="contained"
            sx={{ alignSelf: "center" }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Grid>
  );
}
