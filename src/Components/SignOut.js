import React, { Component } from 'react'
import './UserMenu.css'

class SignOut extends Component {
    render() {
        return (
            <div id='usermenu__links--signout'>
                <a href='https://myaccount.google.com/?utm_source=OGB&tab=wk&utm_medium=act' id='sign-out'>Sign out of all accounts</a>
            </div>
        );
    }
}

export default SignOut