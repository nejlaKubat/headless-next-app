import "server-only"
import { CostumerPostQuery, HeaderNavQuery, HeroQuery, LogoWallQuery } from "@/types"
import { contentGqlFetcher } from "./fetch"

export const getSlugsForCostumerPosts = async () => {
  const query = `#graphql
    {
      customerPostCollection {
        items {
          slug
        }
      }
    }
  `
  const data = await contentGqlFetcher<{
    customerPostCollection: {
      items: {
        slug: String
      }[]
    }
  }>({query})

  if(!data) {
    throw Error('oops')
  }

  return data
}

export const getContentForCustomerPost = async (slug: string) => {
  const query = `#graphql
    query CustomerPostCollection($where: CustomerPostFilter) {
      customerPostCollection(where: $where) {
        items {
          title
          slug
          body {
            json
          }
          customer {
            name
            logo {
              url
              width
              height
              title
            }
          }
        }
      }
    }
  `
  const data = await contentGqlFetcher<CostumerPostQuery>({
    query,
    variables: {
      where: {
        slug
      },
    },
  })

  if(!data) {
    throw Error('oops')
  }

  return data
}

export const getContentForHeaderNav = async () => {
  const query = `#graphql
    query NavigationCollection($where: NavigationFilter) {
      navigationCollection(where: $where) {
        items {
          name
          linksCollection {
            items {
              link
              label
            }
          }
        }
      }
    }
  `
  const data = await contentGqlFetcher<HeaderNavQuery>({
    query,
    variables: {
      where: {
        name: "Header",
      },
    },
  })

  if(!data) {
    throw Error('oops')
  }

  return data
}

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

export const getContentForHero = async (isDraft = false) => {
    const query = `#graphql
    query HeroCollection {
      heroCollection (preview: ${isDraft ? "true" : "false"}) {
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
  const data = await contentGqlFetcher<HeroQuery>({query, preview: isDraft})

  if(!data) {
    throw Error('oops')
  }

  return data
}

