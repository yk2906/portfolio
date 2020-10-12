import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
// import ListItemText from '@material-ui/core/ListItemText';
// import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import AlignItemList from './AlignItemList';
import InputForm from './InputForm';
import SendButton from './SendButton';
import socketio from 'socket.io-client'
import { useState } from 'react';
// import { useCallback } from 'react';
import { useEffect } from 'react';

const socket = socketio.connect('http://localhost:4000')
socket.on('connection', () => {
  console.log('connection')
})


const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ChatForm(props) {

  const [state, setState] = useState({message: '', name: ''})
  const [chat, setChat] = useState([])

  useEffect(() => {
    socket.on('message', ({ name, message }) => {
      setChat([...chat, { name, message }])
    })
  })

  const onTextChange = e => {
    setState({...state, [e.target.name]: e.target.value})
    console.log('hello world')
  }

  const onMessageSubmit = e => {
    e.preventDefault()
    const {name, message} = state
    socket.emit('message', {name, message})
    setState({message: '', name})
  }

  // const renderChat = () => {
  //   return chat.map(({chatMessage}, index) => {
  //     <div key={index}>
  //       <h2>
  //         {chatMessage}
  //       </h2>
  //     </div>
  //   })
  // }

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        チャットフォームへ
      </Button>
      <Dialog fullScreen open={open} onClose={props.handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              チャットフォーム
            </Typography>
          </Toolbar>
        </AppBar>
        <List>
          {chat.map(({message, name}, index) => {
            return <AlignItemList value={state.name, state.message}  key={index.toString()} />
          })}
        </List>
        <SendButton onClick={onMessageSubmit} />
        <InputForm
          name={"message"}
          label="名前"
          value={state.name}
          onTextChange={e => onTextChange(e)}
           />
        <InputForm
          name={"name"}
          label="メッセージ内容" 
          value={state.message}
          onTextChange={e => onTextChange(e)}
          multiline={true}
           />
      </Dialog>
    </div>
  );
}