import React from 'react'

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Oops, Not Found</h1>
      <p className="text-lg">The path <code>{window.location.pathname}</code> does not exist.</p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md" onClick={() => window.history.back()}>Go Back</button>
    </div>
  )
}

export default NotFound