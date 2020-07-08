import React from 'react';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    container: {
      width: '100%',
      height: '54px',
      backgroundColor: 'black',
      display: 'flex',
      alignItems: 'center',
    },
    content: {
      width: '900px',
      margin: '0 auto',
      color: 'white',
      textAlign: 'end',
    },
  }));

export default function Scond() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        Blog | Portfolio | <Link to='/about'>About</Link> | Contact
      </div>
    </div>
  );
}