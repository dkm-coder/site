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
  titleContainer: {
    padding: '16px 10px',
    // backgroundColor:'#8080804a',
    borderRadius: '6px 6px 0 0',
    display: 'flex',
    // alignContent: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: '14px',
    fontWeight: '600',
    display: 'block',
  },
  excerpt: {
    paddingLeft: '16px',
    fontSize: '12px',
    color: '#586069',
    marginTop: '8px',
  },
  date: {
    fontSize: '10px',
    color: '#586069',
    textAlign: 'right',
    margin: '0 0 10px 0',
  },
}));

const ArticleLink = ({title, link, excerpt}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.titleContainer}>
        <span className={classes.text}><Link to={link}>{title}</Link></span>
        <p className={classes.date}>18/09/2020</p>
      </div>
      <span className={classes.excerpt}>{excerpt}</span>
    </div>
  );
};

export default ArticleLink;