
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

