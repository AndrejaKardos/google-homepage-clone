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
        const address = this.props.address;
        return(
            <div className='appicon'>
                <a href={address} className='appicon__link'>
                    <div className='appicon__image'>
                        <FontAwesomeIcon icon={name} transform='grow-30' className='appicon__image--active'/>
                    </div>
                    <div className='appicon__text'>
                        {text}
                    </div>
                </a>
            </div>
        );
    }
}

export default AppIcon