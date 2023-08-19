import { View, StyleSheet, Pressable, Alert } from "react-native"
import Text from "./Text"
import { format } from 'date-fns'
import * as Linking from 'expo-linking'
import useDeleteReview from '../hooks/useDeleteReview'

import theme from "../theme"

const styles = StyleSheet.create({
  reviewContainer: {
    display: 'flex',
    backgroundColor: '#fff',
    padding: 15
  },
  reviewInfoContainer: {
    display: 'flex',
    flexDirection: 'row'
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
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    marginTop: 10,
    padding: 15,
    paddingLeft: 25,
    paddingRight: 25,
    color: '#fff',
    backgroundColor: theme.colors.primary,
    borderRadius: 5
  }
})

const ReviewItem = ({ review, refetchSelfReviews, isMyReviews = false }) => {
  const [deleteReview] = useDeleteReview()
  // console.log(review)
  const { node } = review
  const handleDeleteView = (id) => {
    Alert.alert('Delete Review', 'Are you sure you want to delete this review?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Delete', onPress: async () => {
          const res = await deleteReview(id)
          if (res.data) {
            await refetchSelfReviews()
          }
        }
      }
    ])
  }
  return (
    <View style={styles.reviewContainer}>
      <View style={styles.reviewInfoContainer}>
        <View style={styles.rating}>
          <Text fontWeight='bold' color='primary' fontSize='subheading'>
            {node.rating}
          </Text>
        </View>
        <View style={styles.reviewInfo}>
          <Text fontWeight='bold' fontSize='subheading'>{isMyReviews ? node.repositoryId : node.user.username}</Text>
          <Text color='textSecondary'>{format(new Date(node.createdAt), 'dd.MM.uu')}</Text>
          <Text style={{ textAlign: 'justify' }}>{node.text}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable onPress={() => Linking.openURL(node.repository.url)}>
          <Text style={styles.button} fontSize='subheading' fontWeight='bold'>View Repositiry</Text>
        </Pressable>
        <Pressable onPress={() => handleDeleteView(node.id)}>
          <Text style={{ ...styles.button, backgroundColor: theme.colors.errorColor }} fontSize='subheading' fontWeight='bold'>Delete Review</Text>
        </Pressable>
      </View>
    </View>

  )
}

export default ReviewItem
