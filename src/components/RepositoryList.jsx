import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem'
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  item: {
    padding: 15,
    backgroundColor: '#fff'
  }
});



const ItemSeparator = () => <View style={styles.separator} />

const RepositoryList = () => {
  const { repositories } = useRepositories()
  const repositoryNodes = repositories ? repositories.edges.map(edge => edge.node) : []
  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => {
        return (
          <View style={styles.item} >
            <RepositoryItem key={item.id} item={item} />
          </View>
        )
      }}
    />
  )
}

export default RepositoryList