import { Button, Divider, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useForm, type ValidationRule } from 'react-hook-form'
import styles from './Signup.module.scss'
import AppleIcon from '@mui/icons-material/Apple'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookIcon from '@mui/icons-material/Facebook'
import { Link, useNavigate } from 'react-router-dom'

interface SignUpForm {
  email: string
  password: string
  confirmPassword: string
}

const emailPatternValidator = {
  value: /.+@.+\..+/,
  message: 'Incorrect email pattern'
}

const minLength = (length: number): ValidationRule<number> => ({
  value: length,
  message: `Min length ${length} symbols`
})

export const SignUp = (): JSX.Element => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<SignUpForm>({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: ''
    },
    mode: 'all'
  })

  const [submitBtnDisabled, setSubmitBtnDisabled] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const password = watch('password')
    const confirmPassword = watch('confirmPassword')
    const email = watch('email')
    const hasErrors = !!errors.email || !!errors.password || !!errors.confirmPassword

    setSubmitBtnDisabled(hasErrors || !(email && password && confirmPassword && password === confirmPassword))
    return () => { }
  }, [watch('password'), watch('confirmPassword'), watch('email')])

  const onSubmit = (data: SignUpForm): void => {
    navigate('/auth/terms', {
      state: {
        email: data.email,
        password: data.password
      }
    })
  }

  return <>
    <div className={styles.headerSection}>
      <Typography variant='h1'>Sign Up</Typography>
      <Typography>Already have an account? <Link to='../login'>Log In</Link></Typography>
    </div>
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
        {...register('password', {
          required: 'Required',
          minLength: minLength(8)
        })}
        helperText={errors.password?.message ?? ''} />

      <TextField fullWidth label="Confirm password"
        type='password'
        error={!(errors.confirmPassword == null)}
        variant="outlined"
        size="small"
        {...register('confirmPassword', {
          required: 'Required',
          minLength: minLength(8)
        })}
        helperText={errors.confirmPassword?.message ?? ''} />

      <Button disabled={submitBtnDisabled}
        onClick={handleSubmit(onSubmit)}
        fullWidth
        variant="contained"
      >
        Sign Up
      </Button>
    </div>
    <div className={styles.divider}>
      <Divider>OR</Divider>
      <h3>Sign Up with</h3>
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
  </>
}
