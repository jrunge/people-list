import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { RestLink } from "apollo-link-rest"

export default function createApolloClient(initialState, ctx) {
  // The `ctx` (NextPageContext) will only be present on the server.
  // use it to extract auth headers (ctx.req) or similar.
  return new ApolloClient({
    ssrMode: Boolean(ctx),
    link: new RestLink({
      uri: "https://randomuser.me/api/",
      responseTransformer: async response => response.json().then(({results}) => results),
    }),
    cache: new InMemoryCache().restore(initialState),
  })
}
