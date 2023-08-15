import { GET_REPOSITORIES } from '../graphql/queries'
import { useQuery } from '@apollo/client'


const useRepositories = () => {
  const { data, error, loading, refetch } = useQuery(GET_REPOSITORIES)
  // console.log(data)
  return { repositories: data?.repositories, loading, error, refetch }
}

export default useRepositories
