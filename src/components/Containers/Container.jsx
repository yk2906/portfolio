import React from 'react';
// import '../assets/styles/style.css';
import Form from '../Forms/Form';
import Menubar from './Menubar';
import Profile from './Profile';
import Career from './Career'
import Skills from './Skills'
import Hobby from './Hobby'
import { Route } from 'react-router-dom';
import Aim from './Aim';
import Divider from '@material-ui/core/Divider';
 
const Container = () => {
    return(
        <div className='container'>
            {/* <div class="area" > */}
                    <ul class="circles">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                    </ul>
            {/* </div> */}
            <div className='profile-zone'>
                 <Profile />
                 <Divider />
                <Menubar />
                {/* <Route path='/profile' component={Profile} /> */}
                <Route path='/career' component={Career} />
                <Route path='/skills' component={Skills} />
                <Route path='/hobby' component={Hobby} />
                <Route path='/aim' component={Aim} />
            </div>
            
            <Divider />
            <div className='form'>
                <h1>お問い合わせ</h1>
                <Form />
            </div>
        </div>
    )
}

export default Container;