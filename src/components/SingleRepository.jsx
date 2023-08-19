import RepositoryItem from "./RepositoryItem"
import { useParams } from 'react-router-native'
import useRepository from "../hooks/useRepository"
import { FlatList } from "react-native"
import { View } from "react-native"
import ReviewItem from "./ReviewItem"
import ItemSeparator from "./ItemSeparator"

const RepositoryInfo = ({ repository }) => {
  return <RepositoryItem item={repository} showGithubButton={true} />
}

const SingleRepository = () => {
  const params = useParams()
  if (!params.id) return null
  const { repository, error, loading, fetchMore } = useRepository({ id: params.id })
  if (error || loading) return null
  // console.log(repository)

  const onReachEnd = () => {
    console.log('更多')
    fetchMore({
      first: 2
    })
  }

  return (
    <FlatList
      data={repository.reviews.edges}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ node }) => node.id}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onReachEnd}
      onEndReachedThreshold={0.5}
      ListHeaderComponent={() => {
        return (
          <View>
            <RepositoryInfo repository={repository} />
            <ItemSeparator />
          </View>
        )
      }}
    />
  )
}

export default SingleRepository
