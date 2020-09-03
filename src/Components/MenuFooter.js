import React, { Component } from 'react'
import './MenuFooter.css'

class MenuFooter extends Component {
    render() {
        return (
            <div id='menufooter'>
                <a href='https://policies.google.com/privacy?hl=en' className='menufooter__link'>Privacy Policy</a>
                <span className="menufooter__dot" aria-hidden="true">•</span>
                <a href='https://policies.google.com/terms?hl=en' className='menufooter__link'>Terms of Service</a>
            </div>
        );
    }
}

export default MenuFooter