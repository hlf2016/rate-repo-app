import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import Constants from 'expo-constants'

const httpLink = createHttpLink({
  uri: `${Constants.expoConfig.extra.APOLLO_URI}/graphql`,
})

const createApolloClient = () => {
  // console.log(Constants.expoConfig.extra.APOLLO_URI)
  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  })
}

export default createApolloClient
