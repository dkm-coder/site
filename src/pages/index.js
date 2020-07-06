import React from "react"
import { graphql, Link } from 'gatsby';
import Header from '../components/Header'

const Layout = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  console.log(edges);
  return (
    <div>
      <Header />
      <ul>
        {edges.map(edge => {
          const { title, path } = edge.node.frontmatter;
          return (
          <li
            key={path}
          >
            <Link to={path}>
              {title}
            </Link>
          </li>
          );
        })}
      </ul>
      <small>This page is being developed as we speak.</small><br /><small>No styles have been applied intentionally.</small>
    </div>
  );
}

export const query = graphql`
  query BlogHomeQuery {
    allMarkdownRemark(
      sort: {
        order: DESC, fields: [frontmatter___date]
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;

export default Layout;
