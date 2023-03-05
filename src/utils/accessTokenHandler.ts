export const saveAccessTokenToLocalStorage = (accessToken: string) => {
  localStorage.setItem('accessToken', accessToken)
}

export const getAccessTokenFromLocalStorage = (): string => {
  return localStorage.getItem('accessToken') || ''
}
