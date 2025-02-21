async function updateCurrentUser(userObj) {
  const token = localStorage.getItem('token')
  const bodyObj = JSON.stringify({ user: userObj })
  const optionsObj = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: bodyObj,
  }
  const response = await fetch('https://blog-platform.kata.academy/api/user', optionsObj)
  const body = await response.json()
  return body
}

export default updateCurrentUser
