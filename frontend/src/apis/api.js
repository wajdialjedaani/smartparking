
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
export const getstationbyid = (id, token) => {
  return fetch(`${baseUrl}/common/stations/${id}`, {
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
  console.log("formdata>>>>>>>>>>>", formData)
  return fetch(`${baseUrl}/common/stations/create`, {
    method: 'post',
    headers: {
      'Authorization': `Bearer ${token}`
    },
    body: formData
  })
    .then(response => response.json())
    .then(data => { console.log("======>", data); return data })
    .catch(err => console.log(err))
}

//parking options

export const createparkingOption = (formData, token) => {
  return fetch(`${baseUrl}/common/stations/parkingoptions/create`, {
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
export const editparkingOption = (formData, id, token) => {
  console.log("im clledddddd", formData)
  return fetch(`${baseUrl}/common/stations/parkingoptions/${id}`, {
    method: 'put',
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
