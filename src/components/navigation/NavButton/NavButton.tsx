import React, { FunctionComponent, SVGProps } from 'react'
import { Link } from 'react-router-dom';
import './NavButton.scss'

type Props = {
    type? : string;
    to: string;
    active?: boolean;
    icon: FunctionComponent<SVGProps<SVGSVGElement>>;
}

const NavButton = (props: Props) => {
    return (
        <Link to={props.to} className={`navButton ${props.active ? "active" : ""}`} >
           <props.icon className={`navIcon ${props.active ? "active" : ""}`} />
        </Link>
    )
}

export default NavButton