import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTh, faUser } from '@fortawesome/free-solid-svg-icons'
import '../App.css';

class Header extends Component {
    render() {
        return (
            <div id='header-container'>
                <div id='header-left'>
                    <div className='header-text'>
                        <a href='https://about.google/?fg=1&utm_source=google-AU&utm_medium=referral&utm_campaign=hp-header'>About</a>
                        </div>
                    <div className='header-text'>
                        <a href='https://store.google.com/AU/?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-AU'>Store</a>
                    </div>
                </div>
                <div id='header-right'>
                    <div className='header-text'>
                        <a href='https://mail.google.com/mail/u/0/#inbox'>Gmail</a>
                    </div> 
                    <div className='header-text'>
                        <a href='https://www.google.com.au/imghp?hl=en&tab=wi&authuser=0&ogbl'>Images</a>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faTh} transform='grow-8' id='icon-grid' />
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faUser} transform='grow-8' id='icon-user' />
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;