import useAuthStorage from "../hooks/useAuthStorage"
import { useApolloClient } from '@apollo/client'
import { useEffect } from "react"
import { useNavigate } from 'react-router-native'

const SignOut = () => {
  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient()
  const navigate = useNavigate()
  const signOut = async () => {
    // 这里必须先清除 accessToken 然后进行 resetStore 因为 resetStore 会重发所有 apollo 请求
    // 先清除 resetStore 的话 因为清除后  accessToken 此时还存在 会导致 me 请求数据成功 登录状态判断不精准
    await authStorage.removeAccessToken()
    await apolloClient.resetStore()
    navigate('/login')
  }

  useEffect(() => {
    signOut()
  }, [])

  return <></>
}

export default SignOut
