import React from "react"
import Layout from '../components/Layout'
import PersonalInfo from '../components/PersonalInfo'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'block',
    '@media (min-width: 900px)': {
      display: 'none',
    },
  }
});

const Main = () => {
  const classes = useStyles();

  return (
    <div>
      <Layout>
        <div className={classes.root} >
          <PersonalInfo/>
        </div>
      </Layout>
    </div>
  );
}

export default Main;
