import { BASE_URL } from './const'
import { getAccessTokenFromLocalStorage, saveAccessTokenToLocalStorage } from '../utils/accessTokenHandler'
import { UserInfo } from '../types/user'
import { fetchClient } from './fetchClient'

type LoginResult = 'success' | 'fail'

export type LoginResultWithToken = {
  result: 'success'
  access_token: string
} | {
  result: 'fail'
  access_token: null
}

export interface LoginRequest {
  username: string
  password: string
}

export const loginWithToken = async (args: LoginRequest): Promise<LoginResultWithToken> => {
  const loginRes = await fetch(`${ BASE_URL }/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(args)
  })

  if (loginRes.ok) {
    const loginResponseData = await loginRes.json()
    return {
      result: 'success',
      access_token: loginResponseData.access_token
    }
  }

  return {
    result: 'fail',
    access_token: null
  }
}

export const login = async (args: LoginRequest): Promise<LoginResult> => {
  const loginRes = await fetch(`${ BASE_URL }/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(args)
  })

  if (loginRes.ok) {
    const loginResponseData = await loginRes.json()
    saveAccessTokenToLocalStorage(loginResponseData.access_token)
    return 'success'
  }
  return 'fail'
}

export const getCurrentUserInfoWithToken = async (token: string): Promise<UserInfo | null> => {
  const userInfoRes = await fetch(`${ BASE_URL }/profile`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ token }`
    }
  })

  if (userInfoRes.ok) {
    return userInfoRes.json() as Promise<UserInfo>
  }

  return null
}

export const getCurrentUserInfo = async (): Promise<UserInfo | null> => {
  const userInfoRes = await fetchClient(
    `${ BASE_URL }/profile`,
    { method: 'GET' }
  )

  if (userInfoRes.ok) {
    return userInfoRes.json() as Promise<UserInfo>
  }

  return null
}
