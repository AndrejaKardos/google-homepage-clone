import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './AppCollection.css'

class AppCollection extends Component {
    render() {
        return (
            <div className='apps'>
                <div className='apps__row'>
                    <div className='apps__row--icon'>
                    <FontAwesomeIcon icon={faUser} transform='grow-5' id='appsmenu__button--icon' />
                    </div>
                    <div className='apps__row--icon'>
                    <FontAwesomeIcon icon={faUser} transform='grow-5' id='appsmenu__button--icon' />
                    </div>
                    <div className='apps__row--icon'>
                    <FontAwesomeIcon icon={faUser} transform='grow-5' id='appsmenu__button--icon' />
                    </div>
                </div>
            </div>
        );
    }
}

export default AppCollection