import { gql } from '@apollo/client'
import { CORE_REPOSITORY_FIELDS, NODE_FIELDS } from './fragments'

export const GET_REPOSITORIES = gql`
  ${CORE_REPOSITORY_FIELDS}
  query Repositories($orderDirection: OrderDirection, $orderBy: AllRepositoriesOrderBy, $searchKeyword: String, $first: Int, $after: String){
    repositories(orderDirection: $orderDirection, orderBy: $orderBy, searchKeyword: $searchKeyword, first: $first, after:$after) {
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
  ${NODE_FIELDS}
  query Me($includeReviews: Boolean=false){
    me {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            ...NodeFields
          }
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
  }
`

export const GET_REPOSITORY = gql`
  ${CORE_REPOSITORY_FIELDS}
  ${NODE_FIELDS}
  query Repository($id: ID!, $first: Int, $after: String) {
    repository(id: $id) {
      ...CoreRepositoryFields
      reviews(first: $first, after: $after) {
        edges {
          node {
            ...NodeFields
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
  }
`
