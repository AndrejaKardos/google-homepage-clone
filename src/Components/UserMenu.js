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

        this.onClick = this.onClick.bind(this)
    }

    onClick() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <div id='icon-user-container'>
                <button id='user-button' onClick={this.onClick}>
                    <FontAwesomeIcon icon={faUser} transform='shrink-3.5' id='icon-user' />
                </button>
                { this.state.isOpen &&
                    <div id='user-menu'>
                        <div id='user-info'>
                            <div id='user-menu-icon-container'>
                                <FontAwesomeIcon icon={faUser} transform='shrink-3.5' id='user-menu-icon' />
                            </div>
                            <div id='username'>
                                Username
                            </div>
                            <div id='email'>
                                E-mail
                            </div>
                            <a href='https://myaccount.google.com/?utm_source=OGB&tab=wk&utm_medium=act' id='manage-account-link' target='_blank'>Manage your Google Account</a>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default UserMenu;