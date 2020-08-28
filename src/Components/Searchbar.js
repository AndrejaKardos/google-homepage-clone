import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faMicrophone } from '@fortawesome/free-solid-svg-icons'
import '../App.css'

class Searchbar extends Component {
    render() {
        return(
            <div id='searchbar-container'>
                <div id='searchbar-outline'>
                    <FontAwesomeIcon icon={faSearch} transform='grow-3 right-22' id='icon-search' />
                    <input type='text' id='searchbar'></input>
                    <FontAwesomeIcon icon={faMicrophone} transform='grow-8 left-30' id='icon-microphone' />
                </div>
            </div>
        );
    }
}

export default Searchbar;