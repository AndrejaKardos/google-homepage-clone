import React, { Component } from 'react'
import { faUser, faSearch, faMapMarkerAlt, faPlayCircle, 
         faPlay, faNewspaper, faEnvelopeOpenText, faVideo,
         faAddressBook, faCloudDownloadAlt, faCalendarAlt,
         faLanguage, faPhotoVideo } from '@fortawesome/free-solid-svg-icons'
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
                <AppIcon name={faPlay} text='Play' />
                <AppIcon name={faNewspaper} text='News' />

                <AppIcon name={faEnvelopeOpenText} text='Gmail' />
                <AppIcon name={faVideo} text='Meets' />
                <AppIcon name={faAddressBook} text='Contacts' />

                <AppIcon name={faCloudDownloadAlt} text='Drive' />
                <AppIcon name={faCalendarAlt} text='Calendar' />
                <AppIcon name={faLanguage} text='Translate' />

                <AppIcon name={faPhotoVideo} text='Photos' />
            </div>
        );
    }
}

export default AppCollection