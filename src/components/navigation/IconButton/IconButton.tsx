import React, { FunctionComponent, SVGProps } from 'react'
import './IconButton.scss'

type Props = {
    className?: string;
    icon: FunctionComponent<SVGProps<SVGSVGElement>>;
}

const IconButton = (props: Props) => {
  return (
    <props.icon className={`iconButton ${props.className}`}/>
  )
}

export default IconButton