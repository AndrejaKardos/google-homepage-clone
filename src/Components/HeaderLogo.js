import React, { Component } from 'react';
import Logo from '../Images/googlelogo_color_272x92dp.png';
import './HeaderLogo.css';

class HeaderLogo extends Component {
    render() {
        return(
            <div id='logo'>
                <img src={Logo} alt='Google' id='logo__image' />
            </div>
        );
    }
}

export default HeaderLogo;