
const baseUrl = 'http://localhost:8080/api';

export const signin = (formData) => {
  return fetch(`${baseUrl}/auth/login/`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.log(err))
}

export const getstations = (token) => {
  return fetch(`${baseUrl}/common/stations`, {
    method: 'get',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.log(err))
}

export const createstation = (formData, token) => {
  return fetch(`${baseUrl}/common/stations/create`, {
    method: 'post',
    headers: {
      'Authorization': `Bearer ${token}`
    },
    body: formData
  })
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.log(err))
}