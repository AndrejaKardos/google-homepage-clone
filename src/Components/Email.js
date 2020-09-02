import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import '../Email.css'

class Email extends Component {
    render() {
        return (
            <div className='email-account-div'>
                    <div className='email-info'>
                        <div className='email-icon'>
                            <FontAwesomeIcon icon={faUser} transform='grow-20' className='icon-user-secondary' />
                        </div>
                            
                        <div className='email-text'>
                            <div className='email-text-top'>Username</div>
                            <div className='email-text-bottom'>emailname2@gmail.com</div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default Email;