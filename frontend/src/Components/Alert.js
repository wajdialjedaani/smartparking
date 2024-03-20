import React, { useEffect } from 'react'

import { AlertContext } from '../contexts/alertContext'
function Alert() {

  const { alerts, showAlert } = React.useContext(AlertContext)

  return (
    <div className='z-2 absolute bottom-20 right-10'>
      {alerts.map((alert, index) => {
        return (
          <div key={index} className={`bg-${alert.type === 'success' ? 'green' : 'red'}-500 text-white p-2 shadow-md rounded w-56 flex justify-center my-2`}>
            {alert.message}
          </div>
        )
      })}
    </div>
  )
}

export default Alert