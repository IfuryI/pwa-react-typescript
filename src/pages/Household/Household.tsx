import { Typography } from '@mui/material'
import ProgressSlider from 'src/components/ProgressSlider/ProgressSlider'
import { type ProgressSliderProps } from 'src/components/ProgressSlider/ProgressSliderItem/ProgressSliderItem'

const Household: React.FunctionComponent = () => {
  const items: ProgressSliderProps[] = [
    { text: 'family', progress: 100, state: 'Inactive' },
    { text: 'pets', progress: 30, state: 'Active' },
    { text: 'smoking', progress: 100, state: 'Inactive' },
    { text: 'languages', progress: 0 },
    { text: 'about', progress: 0 },
    { text: 'contacts', progress: 0 },
    { text: 'apartment building', progress: 0 }
  ]
  return (
    <>
      <Typography variant='h1'>Household</Typography>
      <ProgressSlider items={items} />
    </>
  )
}

export default Household
