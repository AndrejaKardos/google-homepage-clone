import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTh } from '@fortawesome/free-solid-svg-icons'
import '../App.css'

class AppsMenu extends Component {
    render() {
        return (
            <div id='grid-button'>
                <FontAwesomeIcon icon={faTh} transform='grow-7' id='icon-grid' />
            </div>
        );
    }
}

export default AppsMenu;