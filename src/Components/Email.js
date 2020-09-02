import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './Email.css'

class Email extends Component {
    render() {
        return (
            <div className='email'>
                <div className='email__icon'>
                    <FontAwesomeIcon icon={faUser} transform='grow-20' className='email__icon--user' />
                </div>
                    
                <div className='email__text'>
                    <div className='email__text--username'>Username</div>
                    <div className='email__text--address'>emailname2@gmail.com</div>
                </div>
            </div>
        );
    }
}

export default Email;