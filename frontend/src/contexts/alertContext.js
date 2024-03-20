import React, { createContext, useState } from 'react'
const AlertContext = createContext()
const AlertProvider = ({ children }) => {
  const [alerts, setAlert] = useState([])
  const showAlert = (id, message, type) => {
    setAlert(prevAlerts => [...prevAlerts, { id, message, type }]);
    setTimeout(() => {
      setAlert(prevAlerts => prevAlerts.filter(alert => alert.id !== id));
    }, 6000);
  };
  return (
    <AlertContext.Provider value={{ alerts, showAlert }}>
      {children}
    </AlertContext.Provider>
  )
}
export { AlertProvider, AlertContext }