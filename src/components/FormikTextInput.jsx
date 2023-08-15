import { StyleSheet } from 'react-native'
import { useField } from 'formik'

import TextInput from './TextInput'
import Text from './Text'
import theme from '../theme'

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    color: theme.colors.errorColor
  },
  textInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginTop: 10
  }
})

const FormikTextInput = ({ name, ...props }) => {
  // console.log(name)
  const [field, meta, helpers] = useField(name)
  const showError = meta.touched && meta.error
  return (
    <>
      <TextInput
        style={styles.textInput}
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  )
}

export default FormikTextInput
