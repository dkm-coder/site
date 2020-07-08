import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './NavBar';
import TitleAndDescription from './TitleAndDescription';

const useStyles = makeStyles(() => ({
    container: {
      width: '900px',
      margin: '0 auto',
      display: 'flex',
    },
    border: {
      border: '1px solid black',
      boxSizing: 'border-box',
      flexGrow: '1',
      minWidth: '300px',
    },
  }));

export default function Layout(props) {
  const classes = useStyles();
  return (
    <Fragment>
      <NavBar />
      <div className={classes.container}>
        <div className={classes.border}>
          <TitleAndDescription />
        </div>
        <div className={classes.border}>
          {props.children}
        </div>
      </div>
    </Fragment>
  );
}