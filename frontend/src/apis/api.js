
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

export const createstation = (formData, token) => {
  return fetch(`${baseUrl}/common/stations/create`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(formData)
  })
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.log(err))
}