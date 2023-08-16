import { GET_ME } from '../graphql/queries'
import { useQuery } from '@apollo/client'

const useMe = () => {
  const { data, error, loading, refetch } = useQuery(GET_ME)
  return { me: data?.me, error, loading, refetch }
}

export default useMe
