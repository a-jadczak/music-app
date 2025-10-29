import React from 'react'

const MATextToggle = ({children, className}: {className: string, children: React.ReactNode}) => {
  return (
    <div className={`text-neutral-400 font-semibold cursor-pointer ${className} 
    hover:underline
    hover:text-white`}>
      {children}
    </div>
  )
}

export default MATextToggle