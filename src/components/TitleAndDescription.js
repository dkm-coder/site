import React from "react"
import { StaticQuery, graphql } from "gatsby"

const ComponentToRender = ({data: {site: {siteMetadata: {title, description}}}}) => (
  <div>
    <h3>{title}</h3>
    <h4>{description}</h4>
  </div>
);

const TitleAndDescription = () => {
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
        <ComponentToRender data={data} />
    )}
    />
  );
};

export default TitleAndDescription;