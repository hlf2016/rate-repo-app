import { gql } from '@apollo/client'

export const CORE_REPOSITORY_FIELDS = gql`
  fragment CoreRepositoryFields on Repository {
    id
    ownerName
    name
    createdAt
    fullName
    ratingAverage
    reviewCount
    stargazersCount
    watchersCount
    forksCount
    openIssuesCount
    url
    ownerAvatarUrl
    description
    language
    userHasReviewed
  }
`

export const NODE_FIELDS = gql`
  fragment NodeFields on Review {
    id
    text
    rating
    createdAt
    repositoryId
    user {
      id
      username
    }
    repository {
      ownerName
      url
    }
  }
`
