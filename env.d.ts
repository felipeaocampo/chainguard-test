//thanks to https://dev.to/krzysztofzuraw/how-to-type-nextjs-env-variables-in-typescript-50cg

namespace NodeJS {
  interface ProcessEnv {
    CONTENTFUL_SPACE_ID: string;
    CONTENTFUL_ACCESS_TOKEN: string;
    CONTENT_PREVIEW_ACCESS_TOKEN: string;
  }
}
