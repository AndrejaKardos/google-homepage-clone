import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import UserAccount from './UserAccount'
import Email from './Email'
import AddAccount from './AddAccount'
import './UserMenu.css'

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
                        <UserAccount />

                        <a href='https://www.google.com/webhp?authuser=1' className='email-account'> 
                            <Email />
                        </a>
                        <a href='https://www.google.com/webhp?authuser=2' className='email-account'> 
                            <Email />
                        </a>
                        <a href='https://accounts.google.com/signin/v2/identifier?hl=en&continue=https%3A%2F%2Fwww.google.com%2F&flowName=GlifWebSignIn&flowEntry=AddSession' id='add-account-div'>
                            <AddAccount />
                        </a>

                        <div id='sign-out-div'>
                            <a href='https://myaccount.google.com/?utm_source=OGB&tab=wk&utm_medium=act' id='sign-out'>Sign out of all accounts</a>
                        </div>
                        <div id='user-menu-bottom'>
                            <a href='https://policies.google.com/privacy?hl=en' className='user-menu-bottom-links'>Privacy Policy</a>
                            <span className="dot-span" aria-hidden="true">•</span>
                            <a href='https://policies.google.com/terms?hl=en' className='user-menu-bottom-links'>Terms of Service</a>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default UserMenu;