import { GeneralPage } from "@/schema";
import { gqlClient, gqlPreviewClient } from "./clientGql";
import { getHomePageQuery } from "./queries";

type PreviewVar = {
  preview: boolean;
};

export const getHomePageData = async (preview = false) => {
  const client = preview ? gqlPreviewClient : gqlClient;

  return client.request<GeneralPage, PreviewVar>(getHomePageQuery, { preview });
};

/*
CHANGE HEADERS EXAMPLE: 

//If you want to set headers after the GraphQLClient has been initialized, you can use the `setHeader()` or `setHeaders()` functions.
 
import { GraphQLClient } from '../src/entrypoints/main.js'

const client = new GraphQLClient(`https://api.graph.cool/simple/v1/cixos23120m0n0173veiiwrjr`)

// Set a single header
client.setHeader(`authorization`, `Bearer MY_TOKEN`)

// Override all existing headers
client.setHeaders({
  authorization: `Bearer MY_TOKEN`,
  'x-another-header': `header_value`,
})
*/
/*
VARS EXAMPLE: 

import { gql, request } from '../src/entrypoints/main.js'

const endpoint = `https://api.graph.cool/simple/v1/cixos23120m0n0173veiiwrjr`

const query = gql`
  query getMovie($title: String!) {
    Movie(title: $title) {
      releaseDate
      actors {
        name
      }
    }
  }
`

const variables = {
  title: `Inception`,
}

interface Data {
  Movie: { releaseDate: string; actors: Array<{ name: string }> }
}

const data = await request<Data>(endpoint, query, variables)
console.log(data)
*/
