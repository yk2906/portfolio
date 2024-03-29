import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
// import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function IconLabelButtons(props) {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        // endIcon={<Icon>send</Icon>}
        onClick={props.onClick}
      >
        送信
      </Button>
    </div>
  );
}