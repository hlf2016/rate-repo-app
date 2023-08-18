import { FlatList } from 'react-native'
import Text from './Text'
import ReviewItem from './ReviewItem'
import useMe from '../hooks/useMe'
import ItemSeparator from './ItemSeparator'

const MyReviews = () => {
  const { me, loading, error } = useMe(true)
  if (loading || error) return <Text>loading ...</Text>
  return (
    <FlatList
      data={me.reviews.edges}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ node }) => node.id}
      ItemSeparatorComponent={ItemSeparator}
    />
  )
}

export default MyReviews
