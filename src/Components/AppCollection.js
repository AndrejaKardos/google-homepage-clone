import React, { Component } from 'react'
import { faUser, faSearch, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import AppIcon from './AppIcon'
import './AppCollection.css'

class AppCollection extends Component {
    render() {
        return (
            <div className='apps'>
                <AppIcon name={faUser} text='Account' />
                <AppIcon name={faSearch} text='Search' />
                <AppIcon name={faMapMarkerAlt} text='Maps' />
            </div>
        );
    }
}

export default AppCollection