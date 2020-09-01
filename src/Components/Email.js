import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import '../App.css'

class Email extends Component {
    render() {
        return (
            <div className='email-account-div'>
                    <div className='email-info'>
                        <div className='email-icon'></div>
                            <FontAwesomeIcon icon={faUser} transform='grow-16' id='icon-user-purple' />
                        <div className='email-text'>
                            <div className='email-text-top'>Username</div>
                            <div className='email-text-bottom'>email3@gmail.com</div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default Email;