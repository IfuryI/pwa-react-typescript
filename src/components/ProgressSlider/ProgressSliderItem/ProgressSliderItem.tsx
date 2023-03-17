import { Box, LinearProgress, Typography, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'
import styles from '../../../styles/utility.module.scss'

type SliderState = 'Active' | 'Disabled' | 'Inactive'

export interface ProgressSliderProps {
  text: string
  progress: number
  of?: number
  state?: SliderState
  to: string
}

interface ProgressSliderItemProps {
  item: ProgressSliderProps
  setActive: (active: string) => void
}

const ProgressSliderItem: React.FunctionComponent<ProgressSliderItemProps> = (props: ProgressSliderItemProps) => {
  const theme = useTheme()
  return (
    <Link
      to={props.item.state === undefined || props.item.state === 'Disabled' ? '#' : props.item.to}
      onClick={() => { props.item.state !== 'Disabled' && props.setActive(props.item.to) }}
      className={styles.routerLink__reset}
    >
      <Box sx={{
        opacity: `${props.item.state !== 'Active' ? '50%' : '100%'}`,
        textAlign: 'center',
        paddingBottom: '1.5rem'
      }}>
        <Typography
          variant={`${props.item.state !== 'Active' ? 'subtitle1' : 'body1'}`}
          sx={{
            paddingX: '1rem',
            paddingBottom: '.125rem',
            fontWeight: props.item.state !== 'Active' ? '300' : '600',
            color: props.item.state === undefined || props.item.state === 'Disabled' ? theme.palette.text.disabled : theme.palette.primary.main
          }}>
          {props.item.text}
        </Typography>
        <LinearProgress
          variant='determinate'
          sx={{
            borderRadius: 2,
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: props.item.state === undefined || props.item.state === 'Disabled' ? theme.palette.text.disabled : theme.palette.primary.main,
            borderStyle: 'solid'
          }} value={props.item.progress}
        />
      </Box>
    </Link>
  )
}
export default ProgressSliderItem
