import { Button, TextField } from "@mui/material"
import './Login.css';

export const Login = () => {
  return <div className="container">
    <div className="group">
      <TextField label="Email"
        variant="outlined"
        size="small"/>

      <TextField label="Password"
        variant="outlined"
        size="small"/>

      <Button className="" variant="outlined">Log In</Button>
    </div>
  </div>
}