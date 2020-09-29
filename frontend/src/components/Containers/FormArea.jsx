import React from 'react';
import Form from '../Forms/Form';

const FormArea = () => {
    return(
    <div className='form-area'>
        <div className='form-title'>
            <h1>お問い合わせ</h1>
        </div>
        <div className='form-button'>
            <Form />
        </div>
    </div>
    )
}

export default FormArea;