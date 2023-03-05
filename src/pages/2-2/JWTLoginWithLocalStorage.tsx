import React, { useState } from 'react'
import { getCurrentUserInfo, login } from '../../api/login'
import { UserInfo } from '../../types/user'

const JWTLoginWithLocalStorage = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null)

  const loginSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget)

    const loginResult = await login({
      username: formData.get('username') as string,
      password: formData.get('password') as string
    })

    if (loginResult === 'fail') return

    const userInfo = await getCurrentUserInfo()

    if (userInfo === null) return

    setUserInfo(userInfo)
  }

  return (<div>
    <h1>
      Login with JWT - localstorage
    </h1>
    <form onSubmit={loginSubmitHandler}>
      <label>
        Username:
        <input type="text" name="username"/>
      </label>
      <label>
        Password:
        <input type="password" name="password" />
      </label>
      <button type="submit" value="Submit">submit</button>
    </form>
    <div>
      <h2>
        User info
      </h2>
      {JSON.stringify(userInfo)}
    </div>
  </div>)
}

export default JWTLoginWithLocalStorage
