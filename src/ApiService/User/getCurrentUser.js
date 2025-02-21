async function getCurrentUser() {
  const token = localStorage.getItem('token')
  const optionsObj = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await fetch('https://blog-platform.kata.academy/api/user', optionsObj)
  const body = await response.json()
  return body
}

export default getCurrentUser
