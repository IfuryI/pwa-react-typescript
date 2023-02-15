import { type FunctionComponent, type SVGProps } from 'react'
import { Link } from 'react-router-dom'
import './NavButton.scss'

interface Props {
  type?: string
  to: string
  active?: boolean
  icon: FunctionComponent<SVGProps<SVGSVGElement>>
}

const NavButton: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <Link to={props.to} className={`navButton ${props.active === true ? 'navButton--active' : ''}`} >
      <props.icon className={`navButton__icon ${props.active === true ? 'navButton__icon--active' : ''}`} />
    </Link>
  )
}

export default NavButton
