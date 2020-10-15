import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
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
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.lemonchiffon,
    display: 'flex',
    height: 280,
    padding: 50,
    minWidth: 1000,
    // backgroundColor: ''
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="fullwidth"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}

        // elementType='div'
      >
        <Tab label="プロフィール" {...a11yProps(0)} />
        <Tab label="略歴" {...a11yProps(1)} />
        <Tab label="スキル・資格" {...a11yProps(2)} />
        <Tab label="趣味" {...a11yProps(3)} />
        <Tab label="目標" {...a11yProps(4)} />
        <Tab label="GitHub" {...a11yProps(5)} />
        {/* <Tab label="Item Seven" {...a11yProps(6)} /> */}
      </Tabs>
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
      <TabPanel value={value} index={4} style={{margin:'0 auto',wordWrap:'breakWord' }}>
        <Aim />
      </TabPanel>
      <TabPanel value={value} index={5} style={{margin:'0 auto'}}>
        <GithubUrl />
      </TabPanel>
      <TabPanel value={value} index={6} style={{margin:'0 auto'}}>
      </TabPanel>
    </div>
  );
}

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import { Link } from 'react-router-dom';

// const useStyles = makeStyles({
//     root: {
//       flexGrow: 1,
//     },
//   });
  

// export default function Menubar() {
//     const classes = useStyles();
//     const [value, setValue] = React.useState(0);
  
//     const handleChange = (event, newValue) => {
//       setValue(newValue);
//     };
  
//     return (
//       <Paper className={classes.root}>
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           indicatorColor="primary"
//           textColor="primary"
//           centered
//         >
//           {/* <Link to='/profile' style={{boxShadow:'none', textDecoration:'none'}}> */}
//         　  <Tab label="プロフィール" />
//           {/* </Link> */}
//           <Link to='/career' style={{boxShadow:'none', textDecoration:'none'}}>
//             <Tab label="略歴" />
//           </Link>
//           <Link to='/skills' style={{boxShadow:'none', textDecoration:'none'}}>
//             <Tab label="スキル・資格" />
//           </Link>
//           <Link to='/hobby' style={{boxShadow:'none', textDecoration:'none'}}>
//             <Tab label="趣味" />
//           </Link>
//           <Link to='/aim' style={{boxShadow:'none', textDecoration:'none'}}>
//             <Tab label="目標" />
//           </Link>
//         </Tabs>
//       </Paper>
//     );
//   }