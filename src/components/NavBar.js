import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    container: {
      width: '100%',
      height: '54px',
      backgroundColor: 'black',
    },
  }));

export default function Scond() {
  const classes = useStyles();
  return (
    <div className={classes.container} />
  );
}