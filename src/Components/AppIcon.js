import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './AppIcon.css'

class AppIcon extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const name = this.props.name;
        const text = this.props.text;
        return(
            <div className='appicon'>
                <a href='https://myaccount.google.com/?utm_source=OGB&tab=wk&utm_medium=app'>
                    <FontAwesomeIcon icon={name} transform='grow-30' className='appicon__image'/>
                    <div className='appicon__text'>
                        {text}
                    </div>
                </a>
            </div>
        );
    }
}

export default AppIcon