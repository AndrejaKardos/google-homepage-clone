import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import '../App.css'

class AddAccount extends Component {
    render() {
        return (
            <div className='email-info'>
                <div className='email-icon'>
                    <FontAwesomeIcon icon={faUserPlus} transform='grow-5' id='add-user-icon' />
                </div>
                <div className='email-text'>
                    Add another account
                </div>
            </div>
        );
    }
}

export default AddAccount;