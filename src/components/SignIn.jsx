import { View, Pressable, StyleSheet } from 'react-native'
import Text from './Text'
import { Formik } from 'formik'
import * as yup from 'yup'

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
  const login = values => {
    console.log(values)
  }
  return (
    <Formik initialValues={initialValues} onSubmit={login} validationSchema={validationSchema}>
      {({ handleSubmit }) => <LoginForm onSubmit={handleSubmit} />}
    </Formik>

  )
}

export default SignIn
