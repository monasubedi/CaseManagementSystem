import React from "react";
import { Button as MuiBtn } from "@mui/material";


const Button = ({ variant, label, ...rest }) => {
  return (
    <MuiBtn variant={variant} {...rest}>
      {label}
    </MuiBtn>
  );
};

export default Button;
