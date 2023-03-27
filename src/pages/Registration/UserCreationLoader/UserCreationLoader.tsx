import { Backdrop, CircularProgress, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

export interface UserCreationLoaderProps {
  message: string
}

export const UserCreationLoader = React.forwardRef<any, UserCreationLoaderProps>(
  function UserCreationLoader ({ message }, refs): JSX.Element {
    useEffect(() => {
      setProgressDescription(message)
    }, [message])
    const [progressDescription, setProgressDescription] = useState(message)
    return <Backdrop
      sx={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: '0.5rem',
        color: '#fff',
        zIndex: (theme) => theme.zIndex.drawer + 1
      }}
      open={true}
    >
      <CircularProgress color="inherit" />
      <Typography variant='h2'>{progressDescription}</Typography>
    </Backdrop>
  }
)
