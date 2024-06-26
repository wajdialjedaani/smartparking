
// const baseUrl = 'http://localhost:8080/api';
const baseUrl = process.env.REACT_APP_API_BASE_URL;

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
    .catch(err => { console.log(err); return err })
}

export const getstations = (token) => {
  return fetch(`${baseUrl}/admin/stations`, {
    method: 'get',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
    .then(response => response.json())
    .then(data => data)
    .catch(err => { console.log(err); return err })
}
export const getstationbyid = (id, token) => {
  return fetch(`${baseUrl}/admin/stations/${id}`, {
    method: 'get',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
    .then(response => response.json())
    .then(data => data)
    .catch(err => { console.log(err); return err })
}


export const createstation = (formData, token) => {
  return fetch(`${baseUrl}/admin/stations/create`, {
    method: 'post',
    headers: {
      'Authorization': `Bearer ${token}`
    },
    body: formData
  })
    .then(response => response.json())
    .then(data => { console.log("======>", data); return data })
    .catch(err => { console.log(err); return err })
}

export const editstation = (formData, id, token) => {
  return fetch(`${baseUrl}/admin/stations/${id}`, {
    method: 'post',
    headers: {
      'Authorization': `Bearer ${token}`,

    },
    body: formData
  })
    .then(response => response.json())
    .then(data => data)
    .catch(err => { console.log(err); return err })
}


export const deletestation = (id, token) => {
  return fetch(`${baseUrl}/admin/stations/${id}`, {
    method: 'delete',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
    .then(response => response.json())
    .then(data => data)
    .catch(err => { console.log(err); return err })
}
//parking options

export const createparkingOption = (formData, token) => {
  return fetch(`${baseUrl}/admin/stations/parkingoptions/create`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(formData)
  })
    .then(response => response.json())
    .then(data => data)
    .catch(err => { console.log(err); return err })
}
export const editparkingOption = (formData, id, token) => {
  return fetch(`${baseUrl}/admin/stations/parkingoptions/${id}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(formData)
  })
    .then(response => response.json())
    .then(data => data)
    .catch(err => { console.log(err); return err })
}

export const getuserfeedback = (token) => {
  return fetch(`${baseUrl}/admin/feedback`, {
    method: 'get',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
    .then(response => response.json())
    .then(data => data)
    .catch(err => { console.log(err); return err })
}


// Common api routes

export const getstationsclient = (query = '') => {
  return fetch(`${baseUrl}/common/stations${query}`, {
    method: 'get',
  })
    .then(response => response.json())
    .then(data => data)
    .catch(err => { console.log(err); return err })
}

export const getstationbyidclient = (id) => {
  return fetch(`${baseUrl}/common/stations/${id}`, {
    method: 'get',
  })
    .then(response => response.json())
    .then(data => data)
    .catch(err => { console.log(err); return err })
}

export const usercreatefeedback = (formData) => {
  return fetch(`${baseUrl}/common/feedback/create`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
    .then(response => response.json())
    .then(data => data)
    .catch(err => { console.log(err); return err })
}