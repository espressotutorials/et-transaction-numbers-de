import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          twitterUsername
          keywords
          image
          siteUrl
          og {
            siteName
            twitterCreator
            twitterCard
          }
        }
      }
    }
  `)

    return data.site.siteMetadata
}
