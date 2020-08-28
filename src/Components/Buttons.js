import React, { Component } from 'react';
import '../App.css';

class Buttons extends Component {
    render() {
        return(
            <div id='button-container'>
                <button id='google-search'>Google Search</button>
                <button id='feeling-lucky'>I'm Feeling Lucky</button>
            </div>
        );
    }
}

export default Buttons;