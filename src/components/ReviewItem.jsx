import { View, StyleSheet } from "react-native"
import Text from "./Text"
import { format } from 'date-fns'

import theme from "../theme"

const styles = StyleSheet.create({
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

const ReviewItem = ({ review, isMyReviews = false }) => {
  // console.log(review)
  const { node } = review
  return (
    <View style={styles.reviewContainer}>
      <View style={styles.rating}>
        <Text fontWeight='bold' color='primary' fontSize='subheading'>
          {node.rating}
        </Text>
      </View>
      <View style={styles.reviewInfo}>
        <Text fontWeight='bold' fontSize='subheading'>{isMyReviews ? node.repositoryID : node.user.username}</Text>
        <Text color='textSecondary'>{format(new Date(node.createdAt), 'dd.MM.uu')}</Text>
        <Text style={{ textAlign: 'justify' }}>{node.text}</Text>
      </View>
    </View>
  )
}

export default ReviewItem
