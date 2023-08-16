import { useMutation } from '@apollo/client'
import { SIGN_IN } from '../graphql/mutations'
import useAuthStorage from './useAuthStorage'
import { useApolloClient } from '@apollo/client'

const useSignIn = () => {
  const [SignIn, result] = useMutation(SIGN_IN)
  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient()

  const signIn = async ({ username, password }) => {
    const res = await SignIn({ variables: { credentials: { username, password } } })
    if (res.data) {
      await authStorage.setAccessToken(res.data.authenticate.accessToken)
      // 每次登录成功后清楚所有apollo缓存 重新请求
      apolloClient.resetStore()
    }
    return res
  }

  return [signIn, result]
}

export default useSignIn
