import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4npkmh40j6101ywe5q7ehgl/master',
    cache: new InMemoryCache()
})