import React, { Component } from 'react'
import './MenuFooter.css'

class MenuFooter extends Component {
    render() {
        return (
            <div id='user-menu-bottom'>
                <a href='https://policies.google.com/privacy?hl=en' className='user-menu-bottom-links'>Privacy Policy</a>
                <span className="dot-span" aria-hidden="true">•</span>
                <a href='https://policies.google.com/terms?hl=en' className='user-menu-bottom-links'>Terms of Service</a>
            </div>
        );
    }
}

export default MenuFooter