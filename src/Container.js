import React from 'react'

export default function Container({children}) {
  return (
    <div className='w-[80%] mx-auto my-3'>
        {children}
    </div>
  )
}
