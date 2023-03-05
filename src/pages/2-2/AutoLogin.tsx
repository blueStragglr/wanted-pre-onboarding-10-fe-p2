import React, { useCallback, useEffect, useRef, useState } from 'react'
import { getCurrentUserInfo, login } from '../../api/login'
import { UserInfo } from '../../types/user'

const AutoLogin = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null)
  const isDataFetched = useRef(false)

  const getUserInfo = useCallback (async () => {
    const userInfo = await getCurrentUserInfo()

    if (userInfo === null) return

    setUserInfo(userInfo)

    isDataFetched.current = true
  }, [])

  useEffect(() => {
    if (isDataFetched.current) return
    getUserInfo()
  }, [])

  return (<div>
    <h1>
      Another page
    </h1>
    <div>
      <h2>
        User info
      </h2>
      {JSON.stringify(userInfo)}
    </div>
  </div>)
}

export default AutoLogin
