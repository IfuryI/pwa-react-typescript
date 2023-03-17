import styles from './UserCard.module.scss'
import PersonIcon from '@mui/icons-material/Person'
import { useEffect } from 'react'
import { Typography } from '@mui/material'

export interface UserCardProps {
  image: string | File | null | undefined
  name: string
  age?: number
  noImageComponent?: JSX.Element
  action?: JSX.Element
}

export const UserCard = ({ image, noImageComponent, name, age, action }: UserCardProps): JSX.Element => {
  useEffect(() => {
    const img = document.querySelector('[data-id="img"]')
    if (image != null && image !== undefined) {
      const reader = new FileReader()
      reader.onloadend = () => {
        img?.setAttribute('src', reader.result as string)
      }

      if (typeof image !== 'string') {
        reader.readAsDataURL(image)
      } else {
        img?.setAttribute('src', image)
      }
    }
    return () => { }
  }, [image])

  return <div className={`${styles.userCard}`}>
    <div className={styles.userCardContent}
      style={{ backgroundColor: Boolean(image) ? 'transparent' : '#2EAB67' }}>
      {
        Boolean(image)
          ? <img data-id="img" id={styles.img} alt='photo' />
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
