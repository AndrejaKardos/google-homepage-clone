import React, { Component } from 'react'
import { faUser, faSearch, faMapMarkerAlt, faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import AppIcon from './AppIcon'
import './AppCollection.css'

class AppCollection extends Component {
    render() {
        return (
            <div className='apps'>
                <AppIcon name={faUser} text='Account' />
                <AppIcon name={faSearch} text='Search' />
                <AppIcon name={faMapMarkerAlt} text='Maps' />
                <AppIcon name={faPlayCircle} text='YouTube' />
                {/* <AppIcon name={faGooglePlay} text='Play' /> */}
            </div>
        );
    }
}

export default AppCollection