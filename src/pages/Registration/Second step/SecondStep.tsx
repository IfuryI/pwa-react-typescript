import { MuiTelInput, matchIsValidTel } from 'mui-tel-input';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { User } from '../../../models/user';

export interface SecondStepProps {
    user: User;
    phoneChanged: (phone: string) => void;
    stepValid: (valid: boolean) => void;
  }

export const SecondStep = (props: SecondStepProps): JSX.Element => {
    const { control, handleSubmit, register, watch, formState: {isValid} } = useForm<{phone: string}>({
        defaultValues: {
            phone: props.user.phone
        },
        mode: 'all'
    });
    
    useEffect(() => {
        const subscription = watch(({phone}) => {
            props.stepValid(!!phone && matchIsValidTel(phone ?? ''));
            props.phoneChanged(phone ?? '')
        });
        return () => subscription.unsubscribe();
    }, [watch, isValid, props])
    
    return (<>
        <h4>Phone number</h4>
        <Controller name='phone' control={control}
            rules={{ validate: matchIsValidTel }}
            render={({ field, fieldState }) => (
                <MuiTelInput {...field} fullWidth
                    helperText={fieldState.error ? 'Incorrect phone number' : ''}
                    error={!!fieldState.error}/>
            )} />
    </>)
}