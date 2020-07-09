import React, { Fragment } from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout'
import Img from "gatsby-image"

const BlogPost = ({
    data: {
      markdownRemark: {
        frontmatter: {
          title,
          featuredImage: {
            childImageSharp: {
              fluid: featuredImage,
            }
          }
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
      { featuredImage && <Img fluid={featuredImage} />}
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
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default BlogPost;