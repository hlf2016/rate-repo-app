import { GET_ME } from '../graphql/queries'
import { useQuery } from '@apollo/client'

const useMe = (includeReviews = false) => {
  const { data, error, loading, refetch } = useQuery(GET_ME, {
    fetchPolicy: 'cache-and-network',
    variables: { includeReviews }
  })
  return { me: data?.me, error, loading, refetch }
}

export default useMe
