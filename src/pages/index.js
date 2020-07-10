import React from "react"
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout'
import ArticleLink from '../components/ArticleLink';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  preArticlesContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 8px',
  },
  browseByTagsText: {
    fontSize: '13px',
    fontWeight: '400',
    color: '#586069',
    fontFamily: 'BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji',
  },
  titleText: {
    fontFamily: 'BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji',
    fontWeight: '400',
    fontSize: '16px',
    marginBottom: '8px',
    color: '#24292e',
  },
  articleContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}));

const Main = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  const classes = useStyles();
  return (
    <div>
      <Layout>
        <div className={classes.preArticlesContainer}>
          <span className={classes.titleText}>Latest Posts</span>
          <span className={classes.browseByTagsText}><Link to='/tags'>Browse by tags</Link></span>
        </div>
        <div className={classes.articleContainer}>
          {edges.map(edge => {
            const { title, path, excerpt } = edge.node.frontmatter;
            return (
              <ArticleLink
                title={title}
                link={path}
                excerpt={excerpt}
              />
            );
          })}
        </div>
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
            excerpt
          }
        }
      }
    }
  }
`;

export default Main;
