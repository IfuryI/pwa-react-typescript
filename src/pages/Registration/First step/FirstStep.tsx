import { TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider/LocalizationProvider'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import './FirstStep.css'
import { type PersonalInfo, type User } from '../../../models/user'
import type * as moment from 'moment'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../../utils/StoreProvider'

export interface FirstStepProps {
  user: User
  stepValid: (valid: boolean) => void
  userInfoChange: (info: Partial<User>) => void
}

export const FirstStep = observer(({ user, stepValid, userInfoChange }: FirstStepProps): JSX.Element => {
  const store = useStore()
  const { register, control, handleSubmit, watch, formState: { errors } } = useForm<PersonalInfo>({
    defaultValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      gender: user.gender,
      birthday: user.birthday
    },
    mode: 'all'
  })

  useEffect(() => {
    const subss = watch(({ firstName, lastName, gender, birthday }) => {
      const valid = !!firstName && !!lastName // || !errors.birthday;
      stepValid(valid)
      userInfoChange({ firstName, lastName, birthday, gender })
      // setSubmitBtnDisabled(hasErrors || !(email && password && termsAccepted))
    })
    return () => { subss.unsubscribe() }
  }, [watch, errors, stepValid])

  return <>
    <div className="form-item">
      <TextField fullWidth label="First name"
        error={!(errors.firstName == null)}
        variant="outlined"
        size="small"
        {...register('firstName', {
          required: 'First name is required'
        })}
        helperText={errors.firstName?.message ?? ''} />
    </div>

    <div className="form-item">
      <TextField className="r-mt-2" fullWidth label="Last name"
        error={!(errors.lastName == null)}
        variant="outlined"
        size="small"
        {...register('lastName', { required: 'Last name is required' })}
        helperText={errors.lastName?.message ?? ''} />
    </div>

    <div className="form-item">
      <FormControl fullWidth size="small">
        <InputLabel id="gender-select-label">Gender</InputLabel>
        <Controller
          render={({ field: { onChange, onBlur, value, ref } }) =>
            <Select labelId="gender-select-label"
              id="gender-select"
              defaultValue='M'
              label="Gender"
              onChange={onChange} // send value to hook form
              onBlur={onBlur} // notify when input is touched
              value={value} // return updated value
              ref={ref}>
              <MenuItem value={'M'}>M</MenuItem>
              <MenuItem value={'F'}>F</MenuItem>
            </Select>
          }
          name='gender'
          control={control}
        />
      </FormControl>
    </div>
    <div className="date-container r-mt-2">
      <Controller
        name='birthday'
        control={control}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <MobileDatePicker
              label="Birthdate"
              inputFormat="MM/DD/YYYY"
              {...register('birthday')}
              value={ value }
              onChange={(date) => {
                onChange((date as unknown as moment.Moment).toDate())
              }}
              ref={ref}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        )}
      />
    </div>
</>
})
