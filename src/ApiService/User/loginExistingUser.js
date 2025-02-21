async function loginExistingUser(userObj) {
  const bodyObj = JSON.stringify(userObj)
  const optionsObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: bodyObj,
  }
  const response = await fetch('https://blog-platform.kata.academy/api/users/login', optionsObj)
  const body = await response.json()
  return body
}

export default loginExistingUser
