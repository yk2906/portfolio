import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const Text = (props) => {
    return(
        <TextField 
            fullWidth={true} 
            label={props.label}
            multiline={props.multiline}
            rows={props.rows}
            value={props.value}
            type={props.type}
            onChange={props.onChange} />
    )
}

export default Text;

