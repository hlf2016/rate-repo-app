import { GET_REPOSITORIES } from '../graphql/queries'
import { useQuery } from '@apollo/client'


const useRepositories = (variables) => {
  const { data, error, loading, refetch, fetchMore } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables
  })
  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage

    if (!canFetchMore) {
      return
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables
      }
    })
  }
  // console.log(data)
  return {
    repositories: data?.repositories,
    fetchMore: handleFetchMore,
    loading,
    error,
    refetch
  }
}

export default useRepositories
