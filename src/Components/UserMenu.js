import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import UserAccount from './UserAccount'
import Email from './Email'
import AddAccount from './AddAccount'
import SignOut from './SignOut'
import MenuFooter from './MenuFooter'
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
            <div id='usermenu'>
                <button id='usermenu__button' onClick={this.onClick}>
                    <FontAwesomeIcon icon={faUser} transform='shrink-3.5' id='usermenu__button--user' />
                </button>
                { this.state.isOpen &&
                    <div id='usermenu__links'>
                        <UserAccount />

                        <a href='https://www.google.com/webhp?authuser=1' className='usermenu__links--email'> 
                            <Email />
                        </a>
                        <a href='https://www.google.com/webhp?authuser=2' className='usermenu__links--email'> 
                            <Email />
                        </a>
                        <a href='https://accounts.google.com/signin/v2/identifier?hl=en&continue=https%3A%2F%2Fwww.google.com%2F&flowName=GlifWebSignIn&flowEntry=AddSession' id='usermenu__links--addaccount'>
                            <AddAccount />
                        </a>

                        <SignOut />
                        <MenuFooter />
                    </div>
                }
            </div>
        );
    }
}

export default UserMenu;