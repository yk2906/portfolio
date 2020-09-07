import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
  });
  

export default function Menubar() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          {/* <Link to='/profile' style={{boxShadow:'none', textDecoration:'none'}}> */}
        　  <Tab label="プロフィール" />
          {/* </Link> */}
          <Link to='/career' style={{boxShadow:'none', textDecoration:'none'}}>
            <Tab label="略歴" />
          </Link>
          <Link to='/skills' style={{boxShadow:'none', textDecoration:'none'}}>
            <Tab label="スキル・資格" />
          </Link>
          <Link to='/hobby' style={{boxShadow:'none', textDecoration:'none'}}>
            <Tab label="趣味" />
          </Link>
          <Link to='/aim' style={{boxShadow:'none', textDecoration:'none'}}>
            <Tab label="目標" />
          </Link>
        </Tabs>
      </Paper>
    );
  }