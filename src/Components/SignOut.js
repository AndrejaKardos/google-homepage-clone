import React, { Component } from 'react'
import './SignOut.css'

class SignOut extends Component {
    render() {
        return (
            <div id='signout'>
                <a href='https://myaccount.google.com/?utm_source=OGB&tab=wk&utm_medium=act' id='signout__button'>Sign out of all accounts</a>
            </div>
        );
    }
}

export default SignOut