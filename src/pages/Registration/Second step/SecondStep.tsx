import { Typography } from '@mui/material'
import { MuiTelInput, matchIsValidTel } from 'mui-tel-input'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { NewUser, type UserForm } from '../../../models/user'
import styles from './SecondStep.module.scss'

export interface SecondStepProps {
  user: NewUser
  phoneChanged: (phone: string) => void
  stepValid: (valid: boolean) => void
}

export const SecondStep = (props: SecondStepProps): JSX.Element => {
  const { control, handleSubmit, register, watch, formState: { isValid } } = useForm<{ phone: string }>({
    defaultValues: {
      phone: props.user.phone ?? ''
    },
    mode: 'all'
  })

  useEffect(() => {
    const subscription = watch(({ phone }) => {
      props.stepValid(!!phone && matchIsValidTel(phone ?? ''))
      props.phoneChanged(phone ?? '')
    })
    return () => { subscription.unsubscribe() }
  }, [watch, isValid, props])

  return <div className={styles.container}>
    <Typography variant='h1' >Phone number</Typography>
    <Controller name='phone' control={control}
      rules={{ validate: matchIsValidTel }}
      render={({ field, fieldState }) => (
        <MuiTelInput {...field} fullWidth
          helperText={(fieldState.error != null) ? 'Incorrect phone number' : ''}
          error={!(fieldState.error == null)} />
      )} />
  </div>
}
