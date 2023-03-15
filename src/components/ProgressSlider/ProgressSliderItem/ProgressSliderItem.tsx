import { Box, LinearProgress, Typography, useTheme } from '@mui/material'

export type SliderState = 'Active' | 'Disabled' | 'Inactive'

export interface ProgressSliderProps {
  text: string
  progress: number
  state?: SliderState
}
const ProgressSliderItem: React.FunctionComponent<ProgressSliderProps> = (props: ProgressSliderProps) => {
  const theme = useTheme()
  return (
    <Box sx={{ opacity: `${props.state !== 'Active' ? '50%' : '100%'}`, textAlign: 'center', paddingBottom: '1.5rem' }}>
      <Typography
        variant={`${props.state !== 'Active' ? 'subtitle1' : 'body1'}`}
        sx={{
          paddingX: '1rem',
          paddingBottom: '.125rem',
          fontWeight: props.state !== 'Active' ? '300' : '600',
          color: props.state === undefined || props.state === 'Disabled' ? theme.palette.text.disabled : theme.palette.primary.main
        }}>
        {props.text}
      </Typography>
      <LinearProgress
        variant='determinate'
        sx={{
          borderRadius: 2,
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor: props.state === undefined || props.state === 'Disabled' ? theme.palette.text.disabled : theme.palette.primary.main,
          borderStyle: 'solid'
        }} value={props.progress}
      />
    </Box>
  )
}
export default ProgressSliderItem
