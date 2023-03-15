import { Box } from '@mui/material'

import ProgressSliderItem, { type ProgressSliderProps } from './ProgressSliderItem/ProgressSliderItem'

interface Props {
  items: ProgressSliderProps[]
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
      '&::-webkit-scrollbar': { width: 0 },
      marginX: '-1rem',
      paddingX: '1rem'
    }}>
      {props.items.map((item: ProgressSliderProps) => {
        return (
          <ProgressSliderItem key={item.text} {...item} />
        )
      })}
    </Box>
  )
}
export default ProgressSlider
