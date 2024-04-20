import React from 'react'

function Button({ children, color, ...props }) {
  return (
    <div>
      <button className='w-auto min-w-20 p-2 shadow text-xl font-bold rounded text-gray-900'
        style={{
          background: color === "primary" ? '#F9ED32' : 'gray',
          color: color === "primary" ? 'black' : 'white',
        }}
        {...props} >
        {children}
      </button>
    </div>
  )
}

export default Button