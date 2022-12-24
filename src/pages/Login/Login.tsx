import { Button, Checkbox, IconButton, TextField } from "@mui/material"
import './Login.css';
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TranslateIcon from '@mui/icons-material/Translate';
import { useState } from "react";

export const Login = () => {

  const [termsAccepted, setTermsAccepter] = useState(false);

  return <div className="container">
    <div className="header-and-translate">
        <h3>Let's start</h3>
        <IconButton  aria-label="translate"><TranslateIcon/></IconButton>
      </div>
    <div className="group">
      <TextField fullWidth label="e-mail"
        variant="outlined"
        size="small" />

      <TextField fullWidth label="password"
        variant="outlined"
        size="small" />

      <div className="terms-check">
        <Checkbox checked={termsAccepted} onChange={() => setTermsAccepter(!termsAccepted)}/>
        <label>I read and agree with <a id="terms-link" href="#">Terms</a> of service</label>
      </div>

      <Button className="" fullWidth variant="outlined">Sign Up</Button>
    </div>
    <div className="additional-signup-methods">
    <h3>Or</h3>
      <div className="additional-methods">
        <IconButton aria-label="google"><GoogleIcon/></IconButton>
        <IconButton aria-label="facebook"><FacebookIcon/></IconButton>
        <IconButton aria-label="apple"><AppleIcon/></IconButton>
      </div>
    </div>
  </div>
}