import { useQuery } from '@apollo/client'
import { GET_REPOSITORY } from '../graphql/queries'

const useRepository = (variables) => {
  const { data, loading, error, refetch, fetchMore } = useQuery(GET_REPOSITORY, {
    fetchPolicy: 'cache-and-network',
    variables
  })

  const handleFetchMore = () => {
    // console.log('geng')
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage
    if (!canFetchMore) {
      return
    }
    fetchMore({
      variables: {
        after: data.reviews.pageInfo.endCursor,
        ...variables
      }
    })
  }

  // console.log(data, error)
  return {
    repository: data?.repository,
    loading,
    error,
    refetch,
    fetchMore: handleFetchMore
  }
}

export default useRepository
