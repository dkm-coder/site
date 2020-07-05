import React from "react"
import { StaticQuery, graphql } from "gatsby"

const TitleAndDescription = ({data: {site: {siteMetadata: {title, description}}}}) => (
  <div>
    <h1>{title}</h1>
    <p>{description}</p>
  </div>
)

const Header = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => (
        <TitleAndDescription data={data} />
      )}
    />
  )
}

const Layout = () => {
  return <div><Header /></div>
}

export default Layout;
