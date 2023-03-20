import { Box, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useActive } from 'src/components/ProgressSlider/ProgressSlider'

const Pets: React.FunctionComponent = () => {
  const navigate = useNavigate()
  const { setActive } = useActive()
  return (
    <>
      <Typography variant='h1'>Do you have pets?</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Box sx={{ flexGrow: '1' }}>
          text
        </Box>
        <Box sx={{ gap: '.5rem', display: 'flex' }}>
          <Button variant='text'
          sx={{ flex: '1' }}
          onClick={() => {}}>
            50 Percent
          </Button>
          <Button variant='contained'
            sx={{ color: 'white', flex: '1' }}
            onClick={() => {
              navigate('/profile/questionnaire-basic-info/smoking')
              setActive('smoking')
            }}>
            Next
          </Button>
        </Box>
      </Box>
    </>
  )
}
export default Pets
