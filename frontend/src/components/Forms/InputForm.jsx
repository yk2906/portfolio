import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

// import { useState } from 'react';
// import { useCallback } from 'react';
// import SendButton from './SendButton';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function InputForm(props) {
  const classes = useStyles();

  // const [content, setContent] = useState("")

  // const inputContent = useCallback((e) => {
  //   setContent(e.target.value)
  // },[setContent])

  // const send = () => {
  //   Socket.emit('chatMessage', () => {
  //     setName(name)
  //   })
  // }

  return (
    <React.Fragment>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField 
          name={props.name}
          label={props.label}
          id="outlined-basic"  
          variant="outlined" 
          // value={props.value}
          onChange={props.onTextChange} 
          multiline={props.multiline} />
      </form>
    </React.Fragment>
  );
}