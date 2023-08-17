import Text from './Text'
import { Pressable, StyleSheet } from 'react-native'

import theme from '../theme'

const styles = StyleSheet.create({
  submitButton: {
    padding: 10,
    backgroundColor: theme.colors.primary,
    marginTop: 10,
    color: '#fff',
    textAlign: 'center',
    borderRadius: 5
  }
})

const SubmitButton = ({ name, onSubmit }) => {
  return (
    <Pressable onPress={onSubmit}>
      <Text fontWeight='bold' style={styles.submitButton}>{name}</Text>
    </Pressable>
  )
}

export default SubmitButton
