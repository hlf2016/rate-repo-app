import RepositoryItem from "./RepositoryItem"
import { useParams } from 'react-router-native'
import useRepository from "../hooks/useRepository"
import { FlatList } from "react-native"
import { View, StyleSheet } from "react-native"
import Text from "./Text"
import theme from "../theme"
import { format } from 'date-fns'

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  reviewContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15
  },
  rating: {
    width: 50,
    height: 50,
    fontSize: 20,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: theme.colors.primary,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10
  },
  reviewInfo: {
    flex: 1,
  }
})

const RepositoryInfo = ({ repository }) => {
  return <RepositoryItem item={repository} showGithubButton={true} />
}

const ReviewItem = ({ review }) => {
  console.log(review)
  const { node } = review
  return (
    <View style={styles.reviewContainer}>
      <View style={styles.rating}>
        <Text fontWeight='bold' color='primary' fontSize='subheading'>
          {node.rating}
        </Text>
      </View>
      <View style={styles.reviewInfo}>
        <Text fontWeight='bold' fontSize='subheading'>{node.user.username}</Text>
        <Text color='textSecondary'>{format(new Date(node.createdAt), 'dd.MM.uu')}</Text>
        <Text style={{ textAlign: 'justify' }}>{node.text}</Text>
      </View>
    </View>
  )
}

const ItemSeparator = () => <View style={styles.separator} />

const SingleRepository = () => {
  const params = useParams()
  if (!params.id) return null
  const { repository, error, loading } = useRepository(params.id)
  if (error || loading) return null
  // console.log(repository)

  return (
    <FlatList
      data={repository.reviews.edges}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ node }) => node.id}
      ItemSeparatorComponent={ItemSeparator}
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
