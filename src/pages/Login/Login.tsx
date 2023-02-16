import { Button, Checkbox, IconButton, TextField } from '@mui/material'
import './Login.css'
import AppleIcon from '@mui/icons-material/Apple'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookIcon from '@mui/icons-material/Facebook'
import TranslateIcon from '@mui/icons-material/Translate'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

interface SignUpForm {
  email: string
  password: string
  termsAccepted: boolean
}

const emailPatternValidator = {
  value: /.+\@.+\..+/,
  message: 'Incorrect email pattern'
}

const minLength = (length: number) => ({
  value: length,
  message: `Min length ${length} symbols`
})

export const Login = () => {
  const [submitBtnDusabled, setSubmitBtnDisabled] = useState(true)
  const navigate = useNavigate()
  const { register, handleSubmit, watch, formState: { errors } } = useForm<SignUpForm>({
    defaultValues: {
      email: '',
      password: '',
      termsAccepted: false
    },
    mode: 'all'
  })

  React.useEffect(() => {
    const subss = watch(({ email, password, termsAccepted }) => {
      const hasErrors = !(errors.email == null) || !(errors.password == null)
      setSubmitBtnDisabled(hasErrors || !(email && password && termsAccepted))
    })
    return () => { subss.unsubscribe() }
  }, [watch, errors])

  const onSubmit = (data: SignUpForm) => {
    console.log(data)
    navigate('/auth/registration')
  }

  return <div className="container">
    <div className="header-and-translate">
      <h3>Let's start</h3>
      <IconButton aria-label="translate"><TranslateIcon /></IconButton>
    </div>
    <div className="group">
      <TextField fullWidth label="e-mail"
        error={!(errors.email == null)}
        variant="outlined"
        size="small"
        {...register('email', { pattern: emailPatternValidator, required: 'Email is required' })}
        helperText={errors.email?.message ?? ''} />

      <TextField fullWidth label="password"
        error={!(errors.password == null)}
        variant="outlined"
        size="small"
        {...register('password', { required: 'Password is required', minLength: minLength(8) })}
        helperText={errors.password?.message ?? ''} />

      <div className="terms-check">
        <Checkbox {...register('termsAccepted')} />
        <label>I read and agree with <a id="terms-link" href="#">Terms</a> of service</label>
      </div>

      <Button disabled={submitBtnDusabled}
        onClick={handleSubmit(onSubmit)}
        fullWidth
        variant="outlined"
        color="accent">
        Sign Up
      </Button>
    </div>
    <div className="additional-signup-methods">
      <h3>Or</h3>
      <div className="additional-methods">
        <IconButton aria-label="google"><GoogleIcon /></IconButton>
        <IconButton aria-label="facebook"><FacebookIcon /></IconButton>
        <IconButton aria-label="apple"><AppleIcon /></IconButton>
      </div>
    </div>
  </div>
}
