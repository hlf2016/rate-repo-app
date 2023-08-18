import { View, StyleSheet, ScrollView } from 'react-native'
import { Link } from 'react-router-native'
import Constants from 'expo-constants'
import Text from './Text'
import useMe from '../hooks/useMe'

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
  const { me } = useMe()
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Tab url='/' text='Repositories' />
        {me ? <Tab url='/reviews/create' text='Create a Review' /> : null}
        {me ?
          (
            <>
              <Tab url='/myreviews' text='My Reviews' />
              <Tab url='/signout' text='Sign Out' />
            </>
          ) : <Tab url='/login' text='Sign In' />}
        {me ? null : <Tab url='/signup' text='Sign Up' />}
      </ScrollView>
    </View>
  )
}

export default AppBar
