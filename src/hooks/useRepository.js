import { useQuery } from '@apollo/client'
import { GET_REPOSITORY } from '../graphql/queries'

const useRepository = (id) => {
  const { data, loading, error, refetch } = useQuery(GET_REPOSITORY, {
    fetchPolicy: 'cache-and-network',
    variables: { id }
  })
  // console.log(data, error)
  return { repository: data?.repository, loading, error, refetch }
}

export default useRepository
