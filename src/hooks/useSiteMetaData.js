import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          title
          description
          keywords
          imageUrl
          siteUrl
        }
      }
    }
  `)

  return data.site.siteMetadata
}