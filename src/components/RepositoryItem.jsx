import { View, Image, StyleSheet } from 'react-native'
import theme from '../theme'
import Text from './Text'

const styles = StyleSheet.create({
  cardContainer: {
    display: 'flex',
    alignItems: 'stretch'
  },
  avatarContainer: {
    flexGrow: 0,
    paddingRight: 15
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 5
  },
  header: {
    display: 'flex',
    flexDirection: 'row'
  },
  info: {
    flexGrow: 1,
  },
  languageTag: {
    flexShrink: 1,
    padding: 5,
    marginTop: 2,
    marginBottom: 2,
    backgroundColor: theme.colors.primary,
    color: '#fff',
    borderRadius: 5
  },
  statsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 5
  }

})

const formatNumber = number => {
  return number >= 1000 ? (number % 1000 === 0 ? (number / 1000) + 'k' : (number / 1000).toFixed(1) + 'k') : number
}
const StatsItem = ({ number, text }) => {
  return (
    <View>
      <Text fontWeight='bold' fontSize='subheading' style={{ textAlign: 'center' }}>{formatNumber(number)}</Text>
      <Text color='textSecondary'>{text}</Text>
    </View>
  )
}

const RepositoryItem = ({ item }) => {
  // console.log(item)
  return (
    <View style={styles.cardContainer}>
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <Image style={styles.avatar} source={{
            uri: item.ownerAvatarUrl
          }} />
        </View>
        <View style={styles.info}>
          <Text fontWeight='bold' fontSize='subheading'>{item.fullName}</Text>
          <Text color='textSecondary'>{item.description}</Text>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Text style={styles.languageTag}>
              {item.language}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.statsContainer}>
        <StatsItem text='Stars' number={item.stargazersCount} />
        <StatsItem text='Forks' number={item.forksCount} />
        <StatsItem text='Reviews' number={item.reviewCount} />
        <StatsItem text='Rating' number={item.ratingAverage} />
      </View>
    </View >
  )
}

export default RepositoryItem