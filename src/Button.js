import React from 'react'

export default function Button({label, onClick}) {
  return (
    <div onClick={onClick} className='bg-red-400 p-3 rounded-lg hover:opacity-80 cursor-pointer'>{label}</div>
  )
}
