import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './NavBar';
import PersonalInfo from './PersonalInfo';

const useStyles = makeStyles(() => ({
    container: {
      maxWidth: '900px',
      width: '100%',
      margin: '0 auto',
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
    },
    personalContainer: {
      backgroundColor: 'green',
      flexGrow: 1,
    },
    contentContainer: {
      // backgroundColor: 'yellow',
      padding: '8px',
      flexGrow: 1,
      maxWidth: '600px',
    }
  }));

export default function Layout(props) {
  const classes = useStyles();
  return (
    <Fragment>
      <NavBar />
      <div className={classes.container}>
        <div className={classes.personalContainer}>
          <PersonalInfo />
        </div>
        <div className={classes.contentContainer}>
          {props.children}
        </div>
      </div>
    </Fragment>
  );
}