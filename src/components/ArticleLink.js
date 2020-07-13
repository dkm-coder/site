import React from 'react';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    // width: '100%',
    border: '1px solid #e1e4e8',
    fontFamily: 'BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji',
    borderRadius: '6px',
    paddingBottom: '16px',
    margin: '0 8px 8px 8px',
  },
  text: {
    fontSize: '14px',
    fontWeight: '600',
    display: 'block',
    '& a': {
      textDecoration: 'none',

      '&:visited': {
        color: '#323b6a',
      },
      '&:active': {
        color: '#323b6a',
      },
    },
  },
  excerpt: {
    paddingLeft: '10px',
    fontSize: '12px',
    color: '#394048',
    marginTop: '8px',
    display: 'block',
  },
  date: {
    fontSize: '10px',
    color: '#586069',
    textAlign: 'right',
    margin: '0 0 10px 0',
  },
  SideBySide: {
    padding: '16px 10px 0 10px',
    borderRadius: '6px 6px 0 0',
    display: 'flex',
    justifyContent: 'space-between',
  },
  tags: {
    paddingTop: '2px',
    fontSize: '10px',
    color: '#586069',

    '& span': {
      border: '1px solid #d2d2d2',
      marginRight: '4px',
      padding: '3px 6px',
    },
  },
  readingLength: {
    paddingTop: '2px',
    color: '#586069',
    fontSize: '10px',
  }
}));

const ArticleLink = ({title, link, excerpt}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.SideBySide}>
        <span className={classes.text}><Link className={classes.articleLink} to={link}>{title}</Link></span>
        <p className={classes.date}>18/09/2020</p>
      </div>
      <span className={classes.excerpt}>{excerpt}</span>
      <div className={classes.SideBySide}>
        <div className={classes.tags}>
          <span>
            Multiple tags
          </span>
        </div>
        <span className={classes.readingLength}>
          1 min read
        </span>
      </div>
    </div>
  );
};

export default ArticleLink;