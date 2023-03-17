import { Box, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useActive } from 'src/components/ProgressSlider/ProgressSlider'

const Who: React.FunctionComponent = () => {
  const navigate = useNavigate()
  const { setActive, setPercent } = useActive()
  return (
    <>
      <Typography variant='h1'>Who’s searching</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Box sx={{ flexGrow: '1' }}>
          text
        </Box>
        <Box sx={{ gap: '.5rem', display: 'flex' }}>
          <Button variant='text'
          sx={{ flex: '1' }}
          onClick={() => {
            setPercent(50, 'who')
          }}>
            50 Percent
          </Button>
          <Button variant='contained'
            sx={{ color: 'white', flex: '1' }}
            onClick={() => {
              navigate('/profile/questionnaire-basic-info/pets')
              setActive('pets')
            }}>
            Next
          </Button>
        </Box>
      </Box>
    </>
  )
}
export default Who
