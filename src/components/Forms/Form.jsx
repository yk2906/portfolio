import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Text from './Text';

export default function Form() {
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div className='form'>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
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
                // value={name} 
                type={'text'} 
                // onChange={}
              />
              <Text 
                label={'メールアドレス'} 
                multiline={false} 
                rows={1}
                // value={name} 
                type={'email'} 
                // onChange={}
              />
              <Text 
                label={'お問い合わせ内容'} 
                multiline={true} 
                rows={10}
                // value={name} 
                type={'text'} 
                // onChange={}
              />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              キャンセル
            </Button>
            <Button onClick={handleClose} color="primary" autoFocus>
              送信する
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}