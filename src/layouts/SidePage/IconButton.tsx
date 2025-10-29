import React from 'react'

const IconButton = ({onClick, active, children}: { 
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
  active: boolean,
  children: React.ReactNode
}) => {
  return (
    <button 
      onClick={onClick}
      className={`text-neutral-500 cursor-pointer ${active && "text-white scale-105"} `}
      >
      {children}
    </button>
  )
}

export default IconButton