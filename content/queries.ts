import { HeroQuery, LogoWallQuery } from "@/types"
import { contentGqlFetcher } from "./fetch"

export const getContentForLogoWall = async () => {
  const query = `#graphql
  query AssetCollection($where: AssetFilter) {
    assetCollection(where: $where) {
      items {
        width
        url
        title
        height
      }
    }
  }`
  const data = await contentGqlFetcher<LogoWallQuery>({
    query,
    variables: {
      where: {
        title_contains: "client",
      },
    },
  })

  if(!data) {
    throw Error('oops')
  }

  return data
}

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

