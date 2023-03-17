import { Link } from "react-router-dom"

type Props = {
    to: string
    
}

const MenuButton: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <Link to={props.to}>MenuButton</Link>
  )
}
export default MenuButton