import { Alert, Button, Divider, Grow, TextField, Typography } from '@mui/material'
import styles from './Login.module.scss'
import AppleIcon from '@mui/icons-material/Apple'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookIcon from '@mui/icons-material/Facebook'
import React, { useState } from 'react'
import { useForm, type ValidationRule } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { userApiService, q } from 'api-services'

interface SignUpForm {
  email: string
  password: string
}

interface SignInAlert {
  visible: boolean
  severity: 'error' | 'info' | 'success' | 'warning'
  text: string
}

const emailPatternValidator = {
  value: /.+@.+\..+/,
  message: 'Incorrect email pattern'
}

const minLength = (length: number): ValidationRule<number> => ({
  value: length,
  message: `Min length ${length} symbols`
})

export const Login = (): JSX.Element => {
  const [submitBtnDusabled, setSubmitBtnDisabled] = useState(true)
  const navigate = useNavigate()
  const [showAlert, setShowAlert] = useState<SignInAlert>({
    visible: false,
    severity: 'success',
    text: ''
  })

  console.log(q);
  

  const { register, handleSubmit, watch, formState: { errors } } = useForm<SignUpForm>({
    defaultValues: {
      email: '',
      password: ''
    },
    mode: 'all'
  })

  React.useEffect(() => {
    const subss = watch(({ email, password }) => {
      const hasErrors = !(errors.email == null) || !(errors.password == null)
      setSubmitBtnDisabled(hasErrors || !(email && password))
    })
    return () => { subss.unsubscribe() }
  }, [watch, errors])

  const onSubmit = (data: SignUpForm): void => {
    void userApiService.login(data.email, data.password).then(token => {
      if (token === null) {
        setShowAlert({
          visible: true,
          severity: 'error',
          text: 'Something went wrong😮'
        })
        setTimeout(() => {
          setShowAlert({
            ...showAlert,
            visible: false
          })
        }, 1500)
      } else {
        //save token to singleton service
        setShowAlert({
          visible: true,
          severity: 'success',
          text: 'Welcome back!'
        })
        setTimeout(() => {
          setShowAlert({
            ...showAlert,
            visible: false
          })
          navigate('/profile')
        }, 1500)
      }
    })
  }

  return <>
    <Typography variant='h1'>Log In</Typography>
    <Typography>New to Roommate? <Link to='../signup'>Sign Up</Link></Typography>
    <div className={styles.group}>
      <TextField fullWidth label="E-mail"
        error={!(errors.email == null)}
        variant="outlined"
        size="small"
        {...register('email', { pattern: emailPatternValidator, required: 'Email is required' })}
        helperText={errors.email?.message ?? ''} />

      <TextField fullWidth label="Password"
        type='password'
        error={!(errors.password == null)}
        variant="outlined"
        size="small"
        {...register('password', { required: 'Password is required', minLength: minLength(8) })}
        helperText={errors.password?.message ?? ''} />

      <Button disabled={submitBtnDusabled}
        onClick={handleSubmit(onSubmit)}
        fullWidth
        variant="contained">
        Log In
      </Button>
    </div>
    <div className={styles.divider}>
      <Divider>OR</Divider>
      <h3>Log In with</h3>
    </div>
    <div className={styles.buttons}>
      <Button variant="outlined" size='small' startIcon={<GoogleIcon />}>
        Google
      </Button>
      <Button variant="outlined" size='small' startIcon={<FacebookIcon />}>
        Facebook
      </Button>
      <Button variant="outlined" size='small' startIcon={<AppleIcon />}>
        Apple
      </Button>
    </div>
    <Grow in={showAlert.visible}>
      <Alert sx={{
        position: 'absolute',
        bottom: 0,
        width: '100%'
      }} severity={showAlert.severity}>
        <Typography variant='body1'>{showAlert.text}</Typography>
      </Alert>
    </Grow>
    {showAlert.visible && <div className={styles.transparentBackdrop}></div>}
  </>
}
