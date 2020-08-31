import React, { Component } from 'react';
import HeaderLogo from './HeaderLogo';
import SearchBar from './Searchbar';
import Buttons from './Buttons';
import Message from './Message';
import '../App.css';

class MainContent extends Component {
    render() {
        return (
            <div id='main'>
                    <HeaderLogo />
                <div id='searchform'>
                    <SearchBar />
                    <Buttons />
                </div>
                <Message />
            </div>
        );
    }
}

export default MainContent;