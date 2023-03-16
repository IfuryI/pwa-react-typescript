import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useActive } from 'src/components/ProgressSlider/ProgressSlider'

const Who: React.FunctionComponent = () => {
  const navigate = useNavigate()
  const { setActive, setPercent } = useActive()
  return (
    <><div>Who</div>
      <Button variant='contained' onClick={() => {
        navigate('/profile/questionnaire-basic-info/pets')
        setActive('pets')
      }}>Next</Button>
      <Button variant='contained' onClick={() => {
        setPercent(50)
      }}>Next</Button>
    </>
  )
}
export default Who
