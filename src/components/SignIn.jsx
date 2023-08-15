import { View, Pressable, StyleSheet } from 'react-native'
import Text from './Text'
import { Formik } from 'formik'
import * as yup from 'yup'
import useSignIn from '../hooks/useSignIn'

import FormikTextInput from './FormikTextInput'
import theme from '../theme'

const styles = StyleSheet.create({
  formContainer: {
    marginLeft: 10,
    marginRight: 10
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
      <Pressable onPress={onSubmit} >
        <Text fontWeight='bold' style={styles.submitButton}>Sign In</Text>
      </Pressable>
    </View>
  )
}

const SignIn = () => {
  const [signIn, { loading, error }] = useSignIn()
  if (loading) return "Loading..."
  if (error) return
  const login = async values => {
    const { username, password } = values
    try {
      const res = await signIn({ username, password })
      console.log(res)
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <Formik initialValues={initialValues} onSubmit={login} validationSchema={validationSchema}>
      {({ handleSubmit }) => <LoginForm onSubmit={handleSubmit} />}
    </Formik>

  )
}

export default SignIn
