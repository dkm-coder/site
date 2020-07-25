import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './NavBar';
import PersonalInfo from './PersonalInfo';
import Footer from './Footer';

const useStyles = makeStyles(() => ({
    vertical: {
      maxWidth: '900px',
      width: '100%',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      minHeight: 'calc(100vh - 54px)',
      paddingTop: '54px',

      '@media (min-width: 900px)': {
        paddingTop: 'inherit',
      },
    },

    container: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      flexGrow: 1,
    },
    personalContainer: {
      justifyContent: 'center',
      marginTop: '25px',
      display: 'none',

      '@media (min-width: 900px)': {
        minWidth: '300px',
        maxWidth: '300px',
        display: 'flex',
      },
    },
    contentContainer: {
      padding: '24px 16px',
      flexGrow: 1,
      '@media (min-width: 900px)': {
        padding: '24px 0',
        maxWidth: '600px',
      },
    }
  }));

export default function Layout({children, isHome}) {
  const classes = useStyles();

  return (
    <Fragment>
      <NavBar />
      <div className={classes.vertical}>
        <div className={classes.container}>
          <div className={classes.personalContainer}>
            <PersonalInfo />
          </div>
          <div className={classes.contentContainer}>
            {children}
          </div>
          {isHome && <p>This is the home page</p>}
        </div>
        <Footer />
      </div>
    </Fragment>
  );
}