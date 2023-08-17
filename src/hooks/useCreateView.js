import { useMutation } from '@apollo/client'
import { CREATE_REVIEW } from '../graphql/mutations'


const useCreateView = () => {
  const [CreateReview, result] = useMutation(CREATE_REVIEW)
  const createReview = async ({ ownerName, repositoryName, rating, text }) => {
    return await CreateReview({
      variables: { review: { ownerName, repositoryName, rating, text } }
    })

  }
  return [createReview, result]
}

export default useCreateView
