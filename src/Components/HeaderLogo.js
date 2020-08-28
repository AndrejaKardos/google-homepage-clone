import React, { Component } from 'react';
import Logo from '../Images/googlelogo_color_272x92dp.png';
import '../App.css';

class HeaderLogo extends Component {
    render() {
        return(
            <div id='logo-container'>
                <img src={Logo} alt='Google' id='logo' />
            </div>
        );
    }
}

export default HeaderLogo;