import { Avatar, Box, IconButton, Typography } from '@mui/material'
import { type User } from 'models'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import { ReactComponent as ProgressIcon } from '../../assets/icons/progress.svg'
import { calculateAge } from 'src/utils/date-time'
import styles from './PersonCard.module.scss'

interface Props {
  person: string | User
  waiting?: boolean
  main?: boolean
  handleDelete: (index: number) => void
  index: number
}
const PersonCard = (props: Props): JSX.Element => {
  return (
    <Box className={styles.personCard}>
      <Avatar className={styles.personCard__avatar} />
      <Typography className={styles.personCard__text}>
        {typeof props.person === 'string' ? props.person : `${props.person.firstName} ${calculateAge(props.person.birthday)}`}
      </Typography>
      {typeof props.person === 'string' && <ProgressIcon />}
      {(props.main === false || props.main === undefined) && <IconButton onClick={() => { props.handleDelete(props.index) }}><HighlightOffIcon /></IconButton>}
    </Box>
  )
}
export default PersonCard
