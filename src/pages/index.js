import React from "react"
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout'

const Main = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <div>
      <Layout>
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
        <br />
        <small><Link to='/tags'>Browse by tags</Link></small>
        <br />
        <small>This page is being developed as we speak.</small><br /><small>No styles have been applied intentionally.</small>
        <br /><br />
        <small><a href="/rss.xml" target="_blank" rel="noopener noreferrer">RSS</a></small>
      </Layout>
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

export default Main;
