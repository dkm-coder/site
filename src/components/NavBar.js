import React from 'react';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    container: {
      width: '100%',
      height: '40px',
      backgroundColor: 'black',
      display: 'flex',
      alignItems: 'center',
    },
    content: {
      width: '900px',
      margin: '0 auto',
      textAlign: 'end',
      color: 'white',
      fontSize: '14px',
      fontFamily: 'BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji',
      fontWeight: '400',
    }
}));

export default function Scond() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        Blog | Portfolio | <Link to='/about'>About</Link>
      </div>
    </div>
  );
}