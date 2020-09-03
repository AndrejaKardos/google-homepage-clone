import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './AppCollection.css'

class AppCollection extends Component {
    render() {
        return (
            <div className='apps'>
                <div className='apps__icon apps__icon--user'>
                    <FontAwesomeIcon icon={faUser} transform='grow-30' />
                </div>
                <div className='apps__icon apps__icon--user'>
                    <FontAwesomeIcon icon={faUser} transform='grow-30' />
                </div>
                <div className='apps__icon apps__icon--user'>
                    <FontAwesomeIcon icon={faUser} transform='grow-30' />
                </div>
                <div className='apps__icon apps__icon--user'>
                    <FontAwesomeIcon icon={faUser} transform='grow-30' />
                </div>
                <div className='apps__icon apps__icon--user'>
                    <FontAwesomeIcon icon={faUser} transform='grow-30' />
                </div>
                <div className='apps__icon apps__icon--user'>
                    <FontAwesomeIcon icon={faUser} transform='grow-30' />
                </div>
            </div>
        );
    }
}

export default AppCollection