import FormikTextInput from './FormikTextInput'
import { View, StyleSheet } from 'react-native'
import { Formik } from 'formik'
import SubmitButton from './SubmitButton'
import * as yup from 'yup'
import useCreateView from '../hooks/useCreateView'
import { useNavigate } from 'react-router-native'

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10
  },
})

const initialValues = {
  ownerName: '',
  rating: '',
  repositoryName: '',
  text: ''
}

const CreateViewForm = ({ handleSubmit }) => {
  return (
    <View style={styles.formContainer}>
      <FormikTextInput name='ownerName' placeholder='OwnerName' />
      <FormikTextInput name='rating' placeholder='Rating between 0 and 100' />
      <FormikTextInput name='repositoryName' placeholder='RepositoryName' />
      <FormikTextInput name='text' placeholder='Review' multiline={true} />
      <SubmitButton name='Create a Review' onSubmit={handleSubmit} />
    </View>
  )
}

const validationSchema = yup.object().shape({
  ownerName: yup.string().required('Repository owner name is required'),
  repositoryName: yup.string().required('Repository name is required'),
  rating: yup.number().integer().required().min(1, 'Rating must be greater than 0').max(100, 'Rating must be smaller than 100'),
})

const CreateReview = () => {
  const [createView] = useCreateView()
  const navigate = useNavigate()
  const onSubmit = async values => {
    try {
      const { data } = await createView({ ...values, rating: parseInt(values.rating) })
      if (data.createReview) {
        navigate(`/repositories/${data.createReview.repositoryId}`)
      }

    } catch (e) {
      console.log(e)
    }

  }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => <CreateViewForm handleSubmit={handleSubmit} />}
    </Formik>
  )
}

export default CreateReview
