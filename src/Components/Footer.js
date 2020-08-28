import React, { Component } from 'react';
import '../App.css';

class Footer extends Component {
    render() {
        return (
            <div id='footer-container'>
                <div id='footer-upper'>
                    Australia
                </div>
                <div id='footer-lower'>
                    <span id='footer-lower-left'>
                        Advertising 
                        Business
                        How Search works
                    </span>
                    <span id='footer-lower-right'>
                        Privacy
                        Terms
                        Settings
                    </span>
                </div>
            </div>
        );
    }
}

export default Footer;