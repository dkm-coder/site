import React, { Fragment } from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout'

const BlogPost = ({
    data: {
      markdownRemark: {
        frontmatter: {
          title,
        },
        html,
      }
    },
    pageContext: {
      prev,
      next,
    },
}) => (
  <Layout>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{__html: html}} />
      { prev && (<Fragment><Link to={prev.frontmatter.path}>Previous</Link><br /></Fragment>) }
      { next && <Link to={next.frontmatter.path}>Next</Link> }
      <br /><br />
      <Link to="/">Home</Link>
  </Layout>
);

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: {path: {eq: $pathSlug} }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default BlogPost;