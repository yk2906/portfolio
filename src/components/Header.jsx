import React from 'react';
import '../assets/styles/style.css';


const Header = () => {
    return(
        <div className='header'>
            <h1 className='header-logo'>Yuto.Kohama</h1>
            <h1 className='header-title'>Welcome!!</h1>
            <ul>
                <li>プロフィール</li>
                <li>目標</li>
                <li>お問い合わせ</li>
            </ul>
        </div>
    )
}

export default Header;