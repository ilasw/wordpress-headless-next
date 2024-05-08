import {ApolloClient, HttpLink, InMemoryCache} from "@apollo/client";
import {registerApolloClient} from "@apollo/experimental-nextjs-app-support/rsc";

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const {getClient} = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: `${API_BASE_URL}/index.php?graphql`,
    }),
  });
});