import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import '../App.css'

class Email extends Component {
    render() {
        return (
            <div id='email-account-div'>
                    <div id='email-info'>
                        <div className='email-icon'>
                        <FontAwesomeIcon icon={faUser} transform='grow-16' id='icon-user-purple' />
                        </div>
                            
                        <div id='email-text'>
                            <div id='email-text-top'>Username</div>
                            <div id='email-text-bottom'>emailname2@gmail.com</div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default Email;