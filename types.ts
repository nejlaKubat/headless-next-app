
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