import React, { Component } from 'react'
import '../App.css'

class Email extends Component {
    render() {
        return (
            <div id='email-container'>
                <div className='email-account-div'>
                    <a href='https://www.google.com/webhp?authuser=1' className='email-account'>
                        email1@gmail.com
                    </a>
                </div>
                <div className='email-account-div'>
                    <a href='https://www.google.com/webhp?authuser=2' className='email-account'>
                        email2@gmail.com
                    </a>
                </div>
                <div className='email-account-div'>
                    <a href='https://www.google.com/webhp?authuser=3' className='email-account'>
                        email3@gmail.com
                    </a>
                </div>
                <div className='email-account-div'>
                    <a href='https://accounts.google.com/signin/v2/identifier?hl=en&continue=https%3A%2F%2Fwww.google.com%2F&flowName=GlifWebSignIn&flowEntry=AddSession' className='email-account'>
                        Add another account
                    </a>
                </div>
            </div>
        );
    }
}

export default Email;