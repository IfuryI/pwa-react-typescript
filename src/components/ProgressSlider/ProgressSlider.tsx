import { Box } from '@mui/material'
import { useOutletContext } from 'react-router-dom'

import ProgressSliderItem, { type ProgressSliderProps } from './ProgressSliderItem/ProgressSliderItem'

interface Props {
  items: ProgressSliderProps[]
  setActive: React.Dispatch<React.SetStateAction<string>>
}

interface ContextType {
  setActive: React.Dispatch<React.SetStateAction<string>>
  setPercent: React.Dispatch<React.SetStateAction<number>>
}

const ProgressSlider: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <Box sx={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, 1fr)',
      gridAutoFlow: 'column',
      alignItems: 'end',
      whiteSpace: 'nowrap',
      gap: '.5rem',
      overflowX: 'auto',
      scrollbarWidth: 'none',
      '&::-webkit-scrollbar': { display: 'none' },
      marginX: '-1rem',
      paddingX: '1rem'
    }}>
      {props.items.map((item: ProgressSliderProps) => {
        return (
          <ProgressSliderItem key={item.text} item={item} setActive={props.setActive} />
        )
      })}
    </Box>
  )
}
export default ProgressSlider

// any type
export const useActive: any = () => {
  return useOutletContext<ContextType>()
}
