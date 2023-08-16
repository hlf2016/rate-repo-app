import { gql } from '@apollo/client'
import { CORE_REPOSITORY_FIELDS } from './fragments'

export const GET_REPOSITORIES = gql`
  ${CORE_REPOSITORY_FIELDS}
  query Repositories {
    repositories {
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
