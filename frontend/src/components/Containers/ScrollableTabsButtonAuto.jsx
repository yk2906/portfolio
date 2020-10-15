import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Skills from './Skills';
import Profile from './Profile';
import Hobby from './Hobby';
import Aim from './Aim';
import Career from './Career';
import GithubUrl from './GithubUrl';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: 'lemonchiffon',
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="プロフィール" {...a11yProps(0)} />
          <Tab label="略歴" {...a11yProps(1)} />
          <Tab label="スキル・資格" {...a11yProps(2)} />
          <Tab label="趣味" {...a11yProps(3)} />
          <Tab label="目標" {...a11yProps(4)} />
          <Tab label="GitHub" {...a11yProps(5)} />
          {/* <Tab label="Item Seven" {...a11yProps(6)} /> */}
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} style={{margin:'0 auto'}}>
        <Profile />
      </TabPanel>
      <TabPanel value={value} index={1} style={{margin:'0 auto'}}>
        <Career />
      </TabPanel>
      <TabPanel value={value} index={2} style={{margin:'0 auto'}}>
        <Skills />
      </TabPanel>
      <TabPanel value={value} index={3} style={{margin:'0 auto'}}>
        <Hobby />
      </TabPanel>
      <TabPanel value={value} index={4} style={{margin:'0 auto'}}>
        <Aim />
      </TabPanel>
      <TabPanel value={value} index={5} style={{margin:'0 auto'}}>
        <GithubUrl />
      </TabPanel>
      {/* <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel> */}
    </div>
  );
}