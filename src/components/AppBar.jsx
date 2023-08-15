import { View, StyleSheet, ScrollView } from 'react-native'
import { Link } from 'react-router-native'
import Constants from 'expo-constants'
import Text from './Text'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
    display: 'flex',
    flexDirection: 'row'
  },
  tab: {
    color: '#fff',
    paddingBottom: 10,
    paddingLeft: 10
  }
})

const Tab = ({ url, text }) => {
  return (
    <Link to={url}>
      <Text style={styles.tab}>{text}</Text>
    </Link>
  )
}

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Tab url='/' text='Repositories' />
        <Tab url='/login' text='Sign in' />
      </ScrollView>
    </View>
  )
}

export default AppBar
