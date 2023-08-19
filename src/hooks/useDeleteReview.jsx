import { useMutation } from '@apollo/client'
import { DELETE_REVIEW } from '../graphql/mutations'

const useDeleteReview = () => {
  const [DeleteReview, result] = useMutation(DELETE_REVIEW)
  const deleteReview = async id => {
    const res = await DeleteReview({ variables: { deleteReviewId: id } })
    return res
  }
  return [deleteReview, result]
}

export default useDeleteReview
