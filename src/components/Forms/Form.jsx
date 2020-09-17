import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Text from './Text';
import axios from 'axios';
import { useState, useCallback } from 'react';

export default function Form() {
    const [open, setOpen] = React.useState(false);

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [content,setContent] = useState("")
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const inputName = useCallback((event) => {
      setName(event.target.value)
    },[setName])

    const inputEmail = useCallback((event) => {
      setEmail(event.target.value)
    },[setEmail])

    const inputContent = useCallback((event) => {
      setContent(event.target.value)
    },[setContent])

    const submitForm = () => {

      const payload = {
        text:'お名前: ' + name + '\n'
          + 'メールアドレス: ' + email + '\n'
          + '本文: ' + content
      }

      fetch('https://hooks.slack.com/services/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', {
        method: 'POST',
        body: JSON.stringify(payload)
      }).then(() => {
        alert('お問い合わせ内容を送信しました。')
        setName("")
        setEmail("")
        setContent("")
        return handleClose()
      })
    }


    return (
      <div>
        <Button variant="contained" color="primary" onClick={handleClickOpen} style={{fontSize:25}}>
          入力フォーム
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">お問い合わせフォーム</DialogTitle>
          <DialogContent>
              <Text 
                label={'お名前'} 
                multiline={false} 
                rows={1}
                value={name} 
                type={'text'} 
                onChange={inputName}
              />
              <Text 
                label={'メールアドレス'} 
                multiline={false} 
                rows={1}
                value={email} 
                type={'email'} 
                onChange={inputEmail}
              />
              <Text 
                label={'お問い合わせ内容'} 
                multiline={true} 
                rows={10}
                value={content} 
                type={'text'} 
                onChange={inputContent}
              />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              キャンセル
            </Button>
            <Button onClick={submitForm} color="primary" autoFocus>
              送信する
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}