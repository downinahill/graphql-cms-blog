import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getPosts = async () => {
    const query = gql`
    query MyQuery {
        postsConnection {
          pageInfo {
            startCursor
            endCursor
            pageSize
          }
          edges {
            node {
              author {
                bio
                name
                id
                photo {
                  url
                }
                posts {
                  id
                }
              }
              createdAt
              slug
              title
              excerpt
              featuredImage {
                url
              }
              categories {
                name
                slug
              }
            }
          }
        }
      }

        }
    `
    
    const results = await request(graphqlAPI, query)
}