import React from 'react';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    border: '1px solid #e1e4e8',
    fontFamily: 'BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji',
    borderRadius: '6px',
    padding: '16px',
    margin: '8px',
  },
  text: {
    fontSize: '14px',
    fontWeight: '600',
    display: 'block',
  },
  excerpt: {
    fontSize: '12px',
    color: '#586069',
    marginTop: '8px',
  }
}));

const ArticleLink = ({title, link, excerpt}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <span className={classes.text}><Link to={link}>{title}</Link></span>
      <span className={classes.excerpt}>{excerpt}</span>
    </div>
  );
};

export default ArticleLink;