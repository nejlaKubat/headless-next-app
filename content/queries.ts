import { HeroQuery } from "@/types"
import { contentGqlFetcher } from "./fetch"

export const getContentForHero = async () => {
    const query = `#graphql
    query HeroCollection {
    heroCollection {
      items {
        title
        preTitle
        subtitle
        callToActionsCollection {
          items {
            label
            link
          }
        }
      }
    }
  }`
  const data = await contentGqlFetcher<HeroQuery>({query})

  if(!data) {
    throw Error('oops')
  }

  return data
}

