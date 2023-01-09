import React from 'react'
import Link from "@docusaurus/Link";
import './index.scss'

interface Props {
    text: string
    link: string
}

const MyButton = ({
    text,
    link
}:Props) => {
  return (
    <Link
        className="link-btn"
        to={link}
    >
        {text}
    </Link>
  )
}

export default MyButton