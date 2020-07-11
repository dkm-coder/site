import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  container: {
    width: '100%',
    height: '54px',
    backgroundColor: 'black',
    display: 'flex',
    alignItems: 'center',
    position: 'fixed',
    zIndex: '1',

    '@media (min-width: 900px)': {
      position: 'inherit',
    },
  },
  content: {
    width: '900px',
    margin: '0 auto',
    textAlign: 'end',
    color: 'white',
    fontSize: '14px',
    fontFamily: 'BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji',
    fontWeight: '400',
  },

  menuBtn: {
    display: 'inline-flex',

    '@media (min-width: 900px)': {
      display: 'none',
    },
  },
  menuOptions: {
    display: 'none',

    '@media (min-width: 900px)': {
      display: 'block',
    },

    '& span': {
      padding: '0 6px',
      // color: 'yellow',
    },
  },

  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function NavigationDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Blog', 'Portfolio', 'About'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <div className={classes.container}>
        <div className={classes.content}>
          <Button className={classes.menuBtn} onClick={toggleDrawer('right', true)}><MenuIcon color="secondary" /></Button>
          <div className={classes.menuOptions}>
            <span>Blog</span>
            <span>Portfolio</span>
            <span>About</span>
          </div>
          <Drawer anchor="right" open={state['right']} onClose={toggleDrawer('right', false)}>
            {list('right')}
          </Drawer>
        </div>
      </div>
    </div>
  );
}