import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './AppCollection.css'

class AppCollection extends Component {
    render() {
        return (
            <div className='apps'>
                <div className='apps__icon'>
                    <a href='https://myaccount.google.com/?utm_source=OGB&tab=wk&utm_medium=app'>
                        <FontAwesomeIcon icon={faUser} transform='grow-30' />
                        
                    </a>
                </div>
                <div className='apps__icon'>
                    <a href='https://myaccount.google.com/?utm_source=OGB&tab=wk&utm_medium=app'>
                        <FontAwesomeIcon icon={faUser} transform='grow-30' />
                    </a>
                </div>
                <div className='apps__icon'>
                    <a href='https://myaccount.google.com/?utm_source=OGB&tab=wk&utm_medium=app'>
                        <FontAwesomeIcon icon={faUser} transform='grow-30' />
                    </a>
                </div>

                <div className='apps__icon'>
                    <a href='https://myaccount.google.com/?utm_source=OGB&tab=wk&utm_medium=app'>
                        <FontAwesomeIcon icon={faUser} transform='grow-30' />
                    </a>
                </div>
                <div className='apps__icon'>
                    <a href='https://myaccount.google.com/?utm_source=OGB&tab=wk&utm_medium=app'>
                        <FontAwesomeIcon icon={faUser} transform='grow-30' />
                    </a>
                </div>
                <div className='apps__icon'>
                    <a href='https://myaccount.google.com/?utm_source=OGB&tab=wk&utm_medium=app'>
                        <FontAwesomeIcon icon={faUser} transform='grow-30' />
                    </a>
                </div>
            </div>
        );
    }
}

export default AppCollection