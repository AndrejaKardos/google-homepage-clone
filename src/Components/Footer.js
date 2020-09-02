import React, { Component } from 'react';
import '../Footer.css';

class Footer extends Component {
    render() {
        return (
            <div id='footer-container'>
                <div id='footer-upper'>
                    Australia
                </div>
                <div id='footer-lower'>
                    <span id='footer-lower-left'>
                        <a href='https://ads.google.com/intl/en_au/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2m--ahpm-0000000034-0000000001&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1' className='left-footer-link'>Advertising</a>
                        <a href='https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1#?modal_active=none' className='left-footer-link'>Business</a>
                        <a href='https://www.google.com/search/howsearchworks/?fg=1' className='left-footer-link'>How Search works</a>
                    </span>
                    <span id='footer-lower-right'>
                        <a href='https://policies.google.com/privacy?hl=en-AU&fg=1' className='right-footer-link'>Privacy</a>
                        <a href='https://policies.google.com/terms?hl=en-AU&fg=1' className='right-footer-link'>Terms</a>
                        <a href='https://www.google.com/preferences?hl=en' className='right-footer-link'>Settings</a>
                    </span>
                </div>
            </div>
        );
    }
}

export default Footer;