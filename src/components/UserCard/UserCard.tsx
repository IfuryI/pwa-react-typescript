import styles from './UserCard.module.scss'
import PersonIcon from '@mui/icons-material/Person'
import { Typography } from '@mui/material'

export interface UserCardProps {
  image: string | null | undefined
  name: string
  age?: number
  noImageComponent?: JSX.Element
  action?: JSX.Element
}

export const UserCard = ({ image, noImageComponent, name, age, action }: UserCardProps): JSX.Element => {
  return <div className={`${styles.userCard}`}>
    <div className={styles.userCardContent}
      style={{ backgroundColor: Boolean(image) ? 'transparent' : '#2EAB67' }}>
      {
        typeof image === 'string'
          ? <img data-id="img" id={styles.img} alt='photo' src={image}/>
          : noImageComponent !== undefined
            ? noImageComponent
            : <PersonIcon sx={{ fontSize: 80 }}></PersonIcon>
      }
    </div>
    <div className={styles.userCardFooter}>
      <Typography variant='h1'>{name}, {age}</Typography>
      {action}
    </div>
  </div>
}
