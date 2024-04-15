import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import BackgroundImage from "../assets/heartmonitor.jpeg";

export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "600px",
        overflow: "hidden",
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "10px",
          width: { xs: "90%", sm: "80%", md: "70%", lg: "60%", xl: "50%" }, // Responsive width
          padding: "20px",
          backgroundColor: "rgba(255, 255, 255, 0.8)", // Translucent white background
        }}
      >
        <div className="flex justify-center font-bold text-blue-700 text-2xl">
          <p>Login</p>
        </div>
        <FormControl style={{ marginBottom: "20px" }} fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="standard-adornment-amount">Username</InputLabel>
          <Input id="standard-adornment-amount" label="Username" />
        </FormControl>
        <FormControl
          style={{ marginBottom: "20px" }}
          fullWidth
          sx={{ m: 1 }}
          variant="standard"
        >
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Link to="/me">     <Button
          style={{ marginBottom: "20px" }}
          sx={{ bgcolor: "#1d4ed8", width: "100%" }}
          variant="contained"
        >
          Login
        </Button></Link>   
        <div className="flex justify-center text-blue-700 mb-5">
          <p>Forgotten Password?</p>
        </div>
        <div className="flex justify-center">
          New User?
          <Link to="/register">
            <p className="text-blue-700 ml-2">Register Here</p>
          </Link>
        </div>
      </Box>
    </Box>
  );
}
