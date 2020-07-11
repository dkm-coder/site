import React, { Fragment } from 'react';
import { graphql, Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import Img from "gatsby-image"
import Layout from '../components/Layout'

const useStyles = makeStyles({
  root: {
    margin: '0 8px',
  },
  titleText: {
    fontFamily: 'BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji',
    fontWeight: '400',
    fontSize: '16px',
    marginBottom: '8px',
    color: '#24292e',
  },
  postContent: {
    fontSize: '14px',
  },
});

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
}) => {
  const classes = useStyles();
  return (
    <Layout>
        <div className={classes.root}>
          <span className={classes.titleText} >{title}</span>
          { featuredImage && <Img fluid={featuredImage} />}
          <div className={classes.postContent} dangerouslySetInnerHTML={{__html: html}} />
          <hr />
          { prev && (<Fragment><Link to={prev.frontmatter.path}>Previous</Link><br /></Fragment>) }
          { next && <Link to={next.frontmatter.path}>Next</Link> }
          <br /><br />
          <Link to="/">Home</Link>
        </div>
    </Layout>
  );
};

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