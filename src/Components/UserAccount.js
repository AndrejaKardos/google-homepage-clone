import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './UserMenu.css'

class UserAccount extends Component {
render() {
        return (
            <div id='user-info'>
                <div id='user-menu-icon-container'>
                    <FontAwesomeIcon icon={faUser} transform='shrink-3.5' id='user-menu-icon' />
                </div>
                <div id='username'>
                    Username
                </div>
                <div id='email-name'>
                    emailname@gmail.com
                </div>
                <a href='https://myaccount.google.com/?utm_source=OGB&tab=wk&utm_medium=act' id='manage-account-link' target='_blank'>Manage your Google Account</a>
            </div>
        );
    }
}

export default UserAccount