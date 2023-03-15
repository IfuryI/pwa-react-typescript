import { Box, LinearProgress, Typography } from '@mui/material'
import { defaultTheme } from 'src/styles/defaultTheme'

export type SliderState = 'Active' | 'Disabled' | 'Inactive'

export interface ProgressSliderProps {
  text: string
  progress: number
  state?: SliderState
}
const ProgressSliderItem: React.FunctionComponent<ProgressSliderProps> = (props: ProgressSliderProps) => {
  return (
    <Box sx={{ opacity: `${props.state !== 'Active' ? '50%' : '100%'}`, textAlign: 'center', paddingBottom: '1.5rem' }}>
      <Typography
        variant={`${props.state !== 'Active' ? 'subtitle1' : 'body1'}`}
        sx={{
          paddingX: '1rem',
          paddingBottom: '.125rem',
          fontWeight: props.state !== 'Active' ? '300' : '600',
          color: props.state === undefined || props.state === 'Disabled' ? defaultTheme.palette.text.disabled : defaultTheme.palette.primary.main
        }}>
        {props.text}
      </Typography>
      <LinearProgress
        variant='determinate'
        sx={{
          borderRadius: 2,
          backgroundColor: 'transparent',
          borderWidth: 1,
          // Need to change defaultTheme to getTheme
          borderColor: props.state === undefined || props.state === 'Disabled' ? defaultTheme.palette.text.disabled : defaultTheme.palette.primary.main,
          borderStyle: 'solid'
        }} value={props.progress}
      />
    </Box>
  )
}
export default ProgressSliderItem
