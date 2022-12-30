import { TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import './FirstStep.css';
type Gender = 'M' | 'F';

interface PersonalInfo {
  firstName: string;
  lastName: string;
  gender: Gender;
  birthday: Date;
}

export const FirstStep = (): JSX.Element => {

  const { register, control, handleSubmit, watch, formState: { errors, } } = useForm<PersonalInfo>({
    defaultValues: {
      firstName: '',
      lastName: '',
      gender: 'M',
      birthday: undefined
    },
    mode: 'all'
  });

  useEffect(() => {
    const subss = watch(({ gender }) => {
      console.log(gender);

      // const hasErrors = !!errors.email || !!errors.password;
      // setSubmitBtnDisabled(hasErrors || !(email && password && termsAccepted))      
    });
    return () => subss.unsubscribe();
  }, [watch, errors]);

  return <>
    <div className="form-item">
      <TextField fullWidth label="First name"
        error={!!errors.firstName}
        variant="outlined"
        size="small"
        {...register('firstName', { required: 'First name is required' })}
        helperText={errors.firstName?.message ?? ''} />
    </div>

    <div className="form-item">
      <TextField className="r-mt-2" fullWidth label="Last name"
        error={!!errors.lastName}
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
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileDatePicker
          label="Birthdate"
          inputFormat="MM/DD/YYYY"
          value={new Date()}
          onChange={() => { }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
</>
}