/**
 * @file /src/client/App.tsx
 * @author Cadence Holmes
 * @copyright Cadence Holmes 2020
 * @fileoverview
 * Builds a project documentation page with example components.
 */

import * as React from 'react';
import {
  makeStyles,
  createStyles,
  withStyles,
  useTheme,
  Theme,
} from '@material-ui/core/styles';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import './styles/main.scss';
import './styles/code.scss';

import './styles/animations/shake.scss';
import './styles/animations/jello.scss';

import {
  headerText,
  headerDescription,
  exampleLists,
  drawerWidth,
} from './AppInfo';

const AppBar = withStyles({
  root: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
})(MuiAppBar);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      [theme.breakpoints.up('md')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      backgroundColor: 'white',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      marginBottom: 100,
    },
    title: {
      paddingTop: 30,
      textAlign: 'center',
    },
    description: {
      margin: theme.spacing(2),
    },
    code: {
      fontFamily: 'Courier New',
      fontSize: '1rem',
      lineHeight: '1rem',
      margin: theme.spacing(2),
      backgroundColor: 'WhiteSmoke',
      [theme.breakpoints.down('sm')]: {
        fontSize: '0.85rem',
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '0.65rem',
      },
    },
    accordion: {
      backgroundColor: 'WhiteSmoke',
      marginBottom: 5,
      marginLeft: 16,
      marginRight: 16,
    },
    container: {
      width: '90%',
      maxWidth: 800,
      minWidth: 320,
      [theme.breakpoints.down('sm')]: {
        maxWidth: 500,
      },
    },
    containerTop: {
      marginBottom: theme.spacing(5),
    },
    drawer: {
      [theme.breakpoints.up('md')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    drawerPaper: {
      width: drawerWidth,
    },
  })
);

export const App = (): React.ReactElement => {
  const classes = useStyles();
  const theme = useTheme();

  const drawerContentLists = exampleLists();
  const description = headerDescription();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = React.useCallback(() => {
    setMobileOpen(!mobileOpen);
  }, [setMobileOpen, mobileOpen]);

  const Title = React.useMemo(() => {
    return <h2 className={classes.title}>{headerText['title']}</h2>;
  }, [classes.title]);

  const CodeExample = React.useMemo(() => {
    return <pre className={classes.code}>{headerText['codeExample']}</pre>;
  }, [classes.code]);

  const AcccordionCodeExamples = React.useMemo(() => {
    return (
      <Accordion elevation={0} className={classes.accordion}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <pre className={classes.code} style={{ margin: 8 }}>
            {'/* More Examples */'}
          </pre>
        </AccordionSummary>
        <AccordionDetails style={{ margin: 0, padding: 0 }}>
          <pre className={classes.code} style={{ margin: 0 }}>
            {headerText['moreExamples'] && headerText['moreExamples']}
          </pre>
        </AccordionDetails>
      </Accordion>
    );
  }, [classes.accordion, classes.code]);

  const Description = React.useMemo(() => {
    return description.map((paragraph, index) => {
      return (
        <div key={index} className={classes.description}>
          {paragraph}
        </div>
      );
    });
  }, [description, classes.description]);

  const AppNavBar = React.useMemo(() => {
    return (
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }, [classes.appBar, classes.menuButton, handleDrawerToggle]);

  const NavDrawer = React.useMemo(() => {
    const drawerContent = () => {
      return (
        <div>
          {drawerContentLists.map((list, sectionIndex) => {
            return (
              <React.Fragment key={sectionIndex}>
                <List>
                  {list.map((item, itemIndex) => (
                    <React.Fragment key={itemIndex}>
                      <ListItem component='a' button href={item.href}>
                        <ListItemText primary={item.title} />
                      </ListItem>
                      {sectionIndex < drawerContentLists.length - 1 &&
                        itemIndex >= list.length - 1 && <Divider />}
                    </React.Fragment>
                  ))}
                </List>
              </React.Fragment>
            );
          })}
        </div>
      );
    };

    return (
      <nav className={classes.drawer} aria-label='mailbox folders'>
        <Hidden mdUp implementation='js'>
          <Drawer
            variant='temporary'
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawerContent()}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation='js'>
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant='permanent'
            open
          >
            {drawerContent()}
          </Drawer>
        </Hidden>
      </nav>
    );
  }, [
    classes.drawer,
    classes.drawerPaper,
    mobileOpen,
    handleDrawerToggle,
    theme.direction,
    drawerContentLists,
  ]);

  return (
    <div className={classes.root}>
      {AppNavBar}
      {NavDrawer}
      <div className={classes.content}>
        <div className={`${classes.container} ${classes.containerTop}`}>
          {Title}
          {description && Description}
          {headerText['codeExample'] && CodeExample}
          {headerText['moreExamples'] && AcccordionCodeExamples}
        </div>
        <div id='app-content' className={classes.container}>
          {drawerContentLists.length > 0 &&
            drawerContentLists.map((category) =>
              category.map((example, index) => (
                <div key={index}>{example.component}</div>
              ))
            )}
        </div>
      </div>
    </div>
  );
};
