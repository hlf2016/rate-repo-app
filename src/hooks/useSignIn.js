import { useMutation } from '@apollo/client'
import { SIGN_IN } from '../graphql/mutations'

const useSignIn = () => {
  const [SignIn, result] = useMutation(SIGN_IN)

  const signIn = async ({ username, password }) => {
    const res = await SignIn({ variables: { credentials: { username, password } } })
    return res
  }

  return [signIn, result]
}

export default useSignIn
