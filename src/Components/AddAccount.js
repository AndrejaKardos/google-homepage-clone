import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './AddAccount.css'

class AddAccount extends Component {
    render() {
        return (
            <div id='add-account-info'>
                <div id='add-account-icon'>
                    <FontAwesomeIcon icon={faUserPlus} transform='grow-5' id='add-user-icon' />
                </div>
                <div id='add-account-text'>
                    Add another account
                </div>
            </div>
        );
    }
}

export default AddAccount;