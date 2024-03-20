import React, { createContext, useState } from 'react'
const AlertContext = createContext()
const AlertProvider = ({ children }) => {
  const [alerts, setAlert] = useState([])
  const showAlert = (message, type) => {
    setAlert([...alerts, { message, type }])
    setTimeout(() => {
      setAlert(alerts.filter((alert) => alert.message !== message))
    }, 3000)
  }
  return (
    <AlertContext.Provider value={{ alerts, showAlert }}>
      {children}
    </AlertContext.Provider>
  )
}
export { AlertProvider, AlertContext }