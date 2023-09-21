import { TextField } from "@mui/material";

const Input = ({label,variant,...rest}) => {
  return <TextField id="standard-basic" variant={variant} label={label} {...rest} />;
};

export default Input;
