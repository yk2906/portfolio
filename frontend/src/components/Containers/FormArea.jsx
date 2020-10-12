import React from 'react';
// import Form from '../Forms/Form';
import ChatForm from '../Forms/ChatForm';

const FormArea = () => {
    return(
    <div className='form-area'>
        <div className='form-title'>
            <h1>お問い合わせ</h1>
        </div>
        <div className='form-button'>
            <ChatForm />
        </div>
    </div>
    )
}

export default FormArea;