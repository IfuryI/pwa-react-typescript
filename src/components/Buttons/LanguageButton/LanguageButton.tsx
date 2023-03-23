import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import styles from './LanguageButton.module.scss'

interface Props {
  language: string
  native: string
  onClick: () => void
}
const LanguageButton = (props: Props): JSX.Element => {
  return (
    <Box className={styles.languageButton} onClick={props.onClick}>
      <Typography>{props.language}</Typography>
      <Typography variant='subtitle1'>{props.native}</Typography>
    </Box>
  )
}
export default LanguageButton
