import { ApolloClient, InMemoryCache, HttpLink,from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphqlErrors, networkError }) => {
    if (graphqlErrors) {
      graphqlErrors.map(({ message }) => {
       return alert(`Graphql error ${message}`);
      });
    }
  });

  const link = from([
    errorLink,
    new HttpLink({ uri: 'http://localhost:5500/graphql' }),
  ]);


const client = new ApolloClient({
    link: link,
    cache: new InMemoryCache(),
  });


  export default client;