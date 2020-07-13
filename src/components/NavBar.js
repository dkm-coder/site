import React from 'react';
import { Link } from 'gatsby';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
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
    display: 'flex',
    justifyContent: 'space-between',
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

    '& a:focus': {
      color: 'white',
    },

    '& a:active': {
      color: 'white',
    },
    '& a:visited': {
      color: 'white',
    },
  },

  homeButton: {
    display: 'inline-flex',
    paddingTop: '6px',
    paddingLeft: '16px',

    '@media (min-width: 900px)': {
      display: 'none',
    },
  },

  homeText: {
    display: 'none',

    '@media (min-width: 900px)': {
      display: 'block',
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
          <Link to={`/${text.toLowerCase()}`} key={text}>
            <ListItem button>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <div className={classes.container}>
        <div className={classes.content}>
          <div>
            <Link to="/"><Button className={classes.menuBtn}><HomeIcon color="secondary" /></Button></Link>
            <div className={classes.homeText}>
              Dave Martinez
            </div>
          </div>
          <div>
            <Button className={classes.menuBtn} onClick={toggleDrawer('right', true)}><MenuIcon color="secondary" /></Button>
            <div className={classes.menuOptions}>
              <Link to="/blog"><span>Blog</span></Link>
              <Link to="/portfolio"><span>Portfolio</span></Link>
              <Link to="/about"><span>About</span></Link>
            </div>
            <Drawer anchor="right" open={state['right']} onClose={toggleDrawer('right', false)}>
              {list('right')}
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
}