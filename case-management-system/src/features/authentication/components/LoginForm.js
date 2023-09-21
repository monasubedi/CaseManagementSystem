import React from "react";
import Input from "../../../components/form/input/Input";
import { Grid } from "@mui/material";
import useLogin from "../../../hooks/useLogin";
import Button from "../../../components/form/button/Button";
import "../styles/LoginForm.scss";

const LoginForm = () => {
  const { email, password, handleEmailChange, handlePasswordChange } =
    useLogin();
  return (
    <div className="loginFormContainer">
      <Grid container className="loginForm">
        <Grid item md={12} width="50%">
          <Input
            variant="standard"
            label="Email"
            value={email}
            onChange={handleEmailChange}
            className="loginInput"
            fullWidth
          />
        </Grid>
        <Grid item md={12} mt={2} width="200px">
          <Input
            variant="standard"
            label="Password"
            value={password}
            onChange={handlePasswordChange}
            fullWidth
          />
        </Grid>
        <Grid  item md={12} mt={3} alignSelf="center">
          <Button fullWidth variant="contained" label="Login" />
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginForm;
