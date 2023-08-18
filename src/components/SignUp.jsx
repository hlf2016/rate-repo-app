import FormikTextInput from "./FormikTextInput"
import SubmitButton from "./SubmitButton"
import { Formik } from 'formik'
import { View, StyleSheet } from 'react-native'
import * as yup from 'yup'
import useCreateUser from "../hooks/useCreateUser"
import useSignIn from '../hooks/useSignIn'
import { useNavigate } from 'react-router-native'

const initialValues = {
  username: '',
  password: '',
  rePassword: ''
}

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10
  }
})

const SignUpForm = ({ handleSubmit }) => {
  return (
    <View style={styles.formContainer}>
      <FormikTextInput name='username' placeholder='Username' />
      <FormikTextInput name='password' placeholder='PassWord' secureTextEntry />
      <FormikTextInput name='rePassword' placeholder='Password confirmation' secureTextEntry />
      <SubmitButton name='Sign Up' onSubmit={handleSubmit} />
    </View>
  )
}

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required').min(5, 'length between 5 and 30').max(30, 'length between 5 and 30'),
  password: yup.string().required('Password is required').min(5, 'length between 5 and 30').max(30, 'length between 5 and 30'),
  rePassword: yup.string().oneOf([yup.ref('password'), null], "Passwords don't match").required('Password confirmation is required')
})

const SignUp = () => {
  const [createUser] = useCreateUser()
  const [signIn] = useSignIn()
  const navigate = useNavigate()

  const onSubmit = async values => {
    const user = { username: values.username, password: values.password }
    const { data } = await createUser(user)
    // console.log(data)
    if (data.createUser) {
      const { data } = await signIn(user)
      if (data.authenticate) {
        navigate('/')
      }
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => <SignUpForm handleSubmit={handleSubmit} />}
    </Formik>
  )
}

export default SignUp
