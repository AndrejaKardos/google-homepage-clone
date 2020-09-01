import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import '../App.css'

class Email extends Component {
    render() {
        return (
            <div id='email-container'>
                <div className='email-account-div'>
                    <a href='https://www.google.com/webhp?authuser=1' className='email-account'>
                        <div className='email-icon'>
                            <FontAwesomeIcon icon={faUser} transform='shrink-3.5' id='icon-user-purple' />
                            email1@gmail.com
                        </div>
                    </a>
                </div>
                <div className='email-account-div'>
                    <a href='https://www.google.com/webhp?authuser=2' className='email-account'>
                        <div className='email-icon'>
                            <FontAwesomeIcon icon={faUser} transform='shrink-3.5' id='icon-user-green' /> 
                            email2@gmail.com
                        </div>
                    </a>
                </div>
                <div className='email-account-div'>
                    <a href='https://www.google.com/webhp?authuser=3' className='email-account'>
                        <div className='email-icon'>
                            <FontAwesomeIcon icon={faUser} transform='shrink-3.5' id='icon-user-pink' />
                            email3@gmail.com
                        </div>
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