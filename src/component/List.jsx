import React from 'react'

const List = ({text,className,href}) => {
  return (
    <li className={`list-none ${className}`}><a href={href}>{text}</a></li>
  )
}

export default List