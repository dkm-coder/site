import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './NavBar';
import TitleAndDescription from './TitleAndDescription';

const useStyles = makeStyles(() => ({
    container: {
      width: '900px',
      margin: '0 auto',
    },
  }));

export default function Layout(props) {
  const classes = useStyles();
  return (
    <Fragment>
      <NavBar />
      <div className={classes.container}>
        <TitleAndDescription />
        {props.children}
      </div>
    </Fragment>
  );
}