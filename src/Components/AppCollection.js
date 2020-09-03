import React, { Component } from 'react'
import AppIcon from './AppIcon'
import './AppCollection.css'

class AppCollection extends Component {
    render() {
        return (
            <div className='apps'>
                <AppIcon name='faUser' text='Account' />
            </div>
        );
    }
}

export default AppCollection