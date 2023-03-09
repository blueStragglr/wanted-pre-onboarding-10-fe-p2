export const saveAccessTokenToLocalStorage = (accessToken) => {
  localStorage.setItem('accessToken', accessToken)
}

export const getAccessTokenFromLocalStorage = () => {
  return localStorage.getItem('accessToken') || ''
}
