import { View, StyleSheet } from 'react-native'
import SubmitButton from './SubmitButton'
import { Formik } from 'formik'
import * as yup from 'yup'
import useSignIn from '../hooks/useSignIn'
import { useNavigate } from 'react-router-native'

import FormikTextInput from './FormikTextInput'
import theme from '../theme'


const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10
  },
  submitButton: {
    padding: 10,
    backgroundColor: theme.colors.primary,
    marginTop: 10,
    color: '#fff',
    textAlign: 'center',
    borderRadius: 5
  }
})

const initialValues = {
  username: '',
  password: ''
}

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required')
})

const LoginForm = ({ onSubmit }) => {
  return (
    <View style={styles.formContainer}>
      <FormikTextInput name='username' placeholder='Username' />
      <FormikTextInput name='password' secureTextEntry placeholder='Password' />
      <SubmitButton name='Sign In' onSubmit={onSubmit} />
    </View>
  )
}

export const LoginFormContainer = ({ onSubmit }) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <LoginForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

const SignIn = () => {
  const [signIn] = useSignIn()
  const navigate = useNavigate()

  const login = async values => {
    const { username, password } = values
    try {
      await signIn({ username, password })
      navigate('/')
    } catch (e) {
      console.log(e)
    }
  }
  return <LoginFormContainer onSubmit={login} />
}

export default SignIn
