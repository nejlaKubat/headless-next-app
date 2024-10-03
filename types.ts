
export type CostumerPostQuery = {
    customerPostCollection: {
      items: {
        title: string
        slug: string
        body: {
          json: JSON
        }
        customer: {
          name: string
          logo: {
            url: string
            width: number
            height: number
            title: string
          }
        }
      }[]
    }
}

export type HeaderNavQuery = {
    navigationCollection: {
        items: {
          name: string
          linksCollection: {
            items: {
              link: string
              label: string
            }[]
          }
        }[]
    }
}

export type LogoWallQuery = {
    assetCollection: {
        items: {
          width: number
          url: string
          title: string
          height: number
        }[]
      }
}

export type HeroQuery = {
    heroCollection: {
        items: {
            title: string
            preTitle: string
            subtitle: string
            callToActionsCollection: {
                items: {
                    label: string
                    link: string
                }[]
            }
        }[]
    }
}

