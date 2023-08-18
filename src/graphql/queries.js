import { gql } from '@apollo/client'
import { CORE_REPOSITORY_FIELDS } from './fragments'

export const GET_REPOSITORIES = gql`
  ${CORE_REPOSITORY_FIELDS}
  query Repositories($orderDirection: OrderDirection, $orderBy: AllRepositoriesOrderBy){
    repositories(orderDirection: $orderDirection, orderBy: $orderBy) {
      edges {
        node {
          ...CoreRepositoryFields
        }
        cursor
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
      totalCount
    }
  }
`

export const GET_ME = gql`
  query Me {
    me {
      id
      username
    }
  }
`

export const GET_REPOSITORY = gql`
  ${CORE_REPOSITORY_FIELDS}
  query Repository($id: ID!) {
    repository(id: $id) {
      ...CoreRepositoryFields
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`
