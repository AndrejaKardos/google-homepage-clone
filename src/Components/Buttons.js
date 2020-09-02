import React, { Component } from 'react';
import './Buttons.css';

class Buttons extends Component {
    render() {
        return(
            <div id='buttons'>
                <button id='buttons__search'>Google Search</button>
                <button id='buttons__lucky'>I'm Feeling Lucky</button>
            </div>
        );
    }
}

export default Buttons;