import { type FunctionComponent, type SVGProps } from 'react'
import { Link } from 'react-router-dom'
import styles from './NavButton.module.scss'

interface Props {
  type?: string
  to: string
  active?: boolean
  icon: FunctionComponent<SVGProps<SVGSVGElement>>
}

const NavButton: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <Link to={props.to} className={`${styles.navButton} ${props.active === true ? styles.navButton_active : ''}`} >
      <props.icon className={`${styles.navButton__icon}`} />
    </Link>
  )
}

export default NavButton
