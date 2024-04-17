import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

// import BackgroundImage from "../assets/heartmonitor.jpeg";

const Register = () => {
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
        height: "900px",
        overflow: "hidden",
        // backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          borderRadius: "10px",
          boxShadow: "3",
          width: "35%",
          margin: "auto",
          marginTop: "100px",
          padding: "20px",
          backgroundColor: "rgba(255, 255, 255, 0.8)", // Translucent white background
        }}
      >
        <div>
          <div className="flex justify-center font-bold text-blue-700 text-2xl ">
            <p>Sign Up</p>
          </div>
          <Formik
            initialValues={{
              firstname: "",
              lastname: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={Yup.object({
              firstname: Yup.string().required("First name is required"),
              lastname: Yup.string().required("Last name is required"),
              email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
              password: Yup.string()
                .min(6, "Password must be at least 6 characters")
                .required("Password is required"),
              confirmPassword: Yup.string()
                .oneOf([Yup.ref("password"), null], "Passwords must match")
                .required("Confirm password is required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            <Form>
              <Field name="firstname">
                {({ field, meta }) => (
                  <FormControl
                    style={{ marginBottom: "25px" }}
                    fullWidth
                    sx={{ m: 1, width: "46ch" }}
                  >
                    <InputLabel htmlFor="firstname">First Name</InputLabel>
                    <OutlinedInput
                      id="firstname"
                      label="First Name"
                      {...field}
                    />
                    <ErrorMessage
                      name="firstname"
                      component="div"
                      className="text-red-500"
                    />
                  </FormControl>
                )}
              </Field>
              <Field name="lastname">
                {({ field, meta }) => (
                  <FormControl
                    style={{ marginBottom: "25px" }}
                    fullWidth
                    sx={{ m: 1, width: "46ch" }}
                  >
                    <InputLabel htmlFor="lastname">Last Name</InputLabel>
                    <OutlinedInput id="lastname" label="Last Name" {...field} />
                    <ErrorMessage
                      name="lastname"
                      component="div"
                      className="text-red-500"
                    />
                  </FormControl>
                )}
              </Field>
              <Field name="email">
                {({ field, meta }) => (
                  <FormControl
                    style={{ marginBottom: "25px" }}
                    fullWidth
                    sx={{ m: 1, width: "46ch" }}
                  >
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <OutlinedInput id="email" label="Email" {...field} />
                    <ErrorMessage name="email">
                      {(msg) => <div className="text-red-500">{msg}</div>}
                    </ErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="password">
                {({ field, meta }) => (
                  <FormControl
                    style={{ marginBottom: "20px" }}
                    fullWidth
                    sx={{ m: 1, width: "46ch" }}
                    variant="outlined"
                  >
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <OutlinedInput
                      id="password"
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
                      {...field}
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500"
                    />
                  </FormControl>
                )}
              </Field>
              <Field name="confirmPassword">
                {({ field, meta }) => (
                  <FormControl
                    style={{ marginBottom: "20px" }}
                    fullWidth
                    sx={{ m: 1, width: "46ch" }}
                    variant="outlined"
                  >
                    <InputLabel htmlFor="confirmPassword">
                      Confirm password
                    </InputLabel>
                    <OutlinedInput
                      id="confirmPassword"
                      type={showPassword ? "text" : "password"}
                      {...field}
                    />
                    <ErrorMessage
                      name="confirmPassword"
                      component="div"
                      className="text-red-500"
                    />
                  </FormControl>
                )}
              </Field>
              <Link to="/me">
                <Button
                  style={{ marginBottom: "20px" }}
                  sx={{ bgcolor: "#1d4ed8", width: "52ch" }}
                  variant="contained"
                  type="submit"
                >
                  Register
                </Button>
              </Link>
            </Form>
          </Formik>
        </div>
      </Box>
    </Box>
  );
};

export default Register;
