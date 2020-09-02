import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './UserAccount.css'

class UserAccount extends Component {
render() {
        return (
            <div id='useraccount'>
                <div id='useraccount__icon'>
                    <FontAwesomeIcon icon={faUser} transform='shrink-3.5' id='useraccount__icon--user' />
                </div>
                <div id='useraccount__text--username'>
                    Username
                </div>
                <div id='useraccount__text--email'>
                    emailname@gmail.com
                </div>
                <a href='https://myaccount.google.com/?utm_source=OGB&tab=wk&utm_medium=act' id='useraccount__link' target='_blank'>Manage your Google Account</a>
            </div>
        );
    }
}

export default UserAccount