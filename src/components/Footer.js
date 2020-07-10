import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
      borderTop: '1px solid #e1e4e8',
      margin: '12px 0',
      padding: '16px 0 4px 0',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
    },
  }));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <small>(C) Dave Martinez 2020</small>
      <small><a href="/rss.xml" target="_blank" rel="noopener noreferrer">Blog RSS</a></small>
    </div>
  );
}

export default Footer;