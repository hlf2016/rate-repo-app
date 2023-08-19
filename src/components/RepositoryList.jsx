import { FlatList, Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem'
import useRepositories from '../hooks/useRepositories';
import { useNavigate } from 'react-router-native'
import { useState, useEffect } from 'react'
import { Picker } from '@react-native-picker/picker';
import { Searchbar } from 'react-native-paper';
import { useDebounce } from 'use-debounce'
import ItemSeparator from './ItemSeparator';

const orderMap = {
  createdAtDesc: {
    orderBy: 'CREATED_AT',
  },
  ratingDesc: {
    orderBy: 'RATING_AVERAGE',
    orderDirection: 'DESC'
  },
  ratingAsc: {
    orderBy: 'RATING_AVERAGE',
    orderDirection: 'ASC'
  }
}

const RepositoryListHeader = ({ refetch }) => {
  const [orderBy, setOrderBy] = useState('createdAtDesc')
  const [searchKeyword, setSearchKeyword] = useState('')
  const [debouncedSearchKeyword] = useDebounce(searchKeyword, 500)

  // console.log(searchKeyword, debouncedSearchKeyword)

  useEffect(() => {
    refetch({
      searchKeyword: debouncedSearchKeyword,
      ...orderMap[orderBy]
    })
  }, [orderBy, debouncedSearchKeyword])
  return (
    <>
      <Searchbar
        style={{ margin: 10, marginBottom: 0, backgroundColor: '#fff' }}
        mode='bar'
        placeholder='Search'
        loading={false}
        onChangeText={query => setSearchKeyword(query)}
        value={searchKeyword}
      />
      <Picker
        selectedValue={orderBy}
        onValueChange={(itemValue) =>
          setOrderBy(itemValue)
        }
        prompt='Select an item'
      >
        <Picker.Item label="Latest repositories" value="createdAtDesc" />
        <Picker.Item label="Highest rated repositories" value="ratingDesc" />
        <Picker.Item label="Lowest rated repositories" value="ratingAsc" />
      </Picker>

    </>
  )
}

export const RepositoryListContainer = ({ repositories, refetch, onEndReach }) => {
  const repositoryNodes = repositories ? repositories.edges.map(edge => edge.node) : []
  const navigate = useNavigate()
  const toViewRepository = (id) => {
    navigate(`/repositories/${id}`)
  }
  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={<RepositoryListHeader refetch={refetch} />}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
      renderItem={({ item }) => {
        return (
          <Pressable onPress={() => toViewRepository(item.id)}>
            <RepositoryItem key={item.id} item={item} />
          </Pressable>
        )
      }}
    />
  )
}

const RepositoryList = () => {
  const { repositories, refetch, fetchMore } = useRepositories({
    first: 6
  })
  const onEndReach = () => {
    // console.log('You have reached the end of the list');
    fetchMore()
  }
  return <RepositoryListContainer repositories={repositories} refetch={refetch} onEndReach={onEndReach} />
}

export default RepositoryList
