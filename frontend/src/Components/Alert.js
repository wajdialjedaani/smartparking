import React, { useEffect } from 'react'

import { AlertContext } from '../contexts/alertContext'
function Alert() {

  const { alerts, showAlert } = React.useContext(AlertContext)
  useEffect(() => {
  }, [])
  return (
    <div>
      {alerts.map((alert, index) => {
        return (
          <div key={index} className={`bg-${alert.type}-500 text-white p-2`}>
            {alert.message}
          </div>
        )
      })}
    </div>
  )
}

export default Alert