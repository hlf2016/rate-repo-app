import { CREATE_USER } from "../graphql/mutations"
import { useMutation } from '@apollo/client'

const useCreateUser = () => {
  const [CreateUser, result] = useMutation(CREATE_USER)
  const createUser = async ({ username, password }) => {
    const res = await CreateUser({ variables: { user: { username, password } } })
    return res
  }
  return [createUser, result]
}

export default useCreateUser
