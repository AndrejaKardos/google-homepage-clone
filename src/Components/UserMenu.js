import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import '../App.css'

class UserMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    render() {
        return (
            <button id='user-button'>
                <FontAwesomeIcon icon={faUser} transform='grow-8' id='icon-user' />
            </button>
        );
    }
}

export default UserMenu;