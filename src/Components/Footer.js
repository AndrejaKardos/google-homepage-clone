import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div id='footer'>
                <div id='footer__top'>
                    Australia
                </div>
                <div id='footer__bottom'>
                    <span id='footer__bottom--left'>
                        <a href='https://ads.google.com/intl/en_au/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2m--ahpm-0000000034-0000000001&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1' className='footer__bottom--leftlinks'>Advertising</a>
                        <a href='https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1#?modal_active=none' className='footer__bottom--leftlinks'>Business</a>
                        <a href='https://www.google.com/search/howsearchworks/?fg=1' className='footer__bottom--leftlinks'>How Search works</a>
                    </span>
                    <span id='footer__bottom--right'>
                        <a href='https://policies.google.com/privacy?hl=en-AU&fg=1' className='footer__bottom--rightlinks'>Privacy</a>
                        <a href='https://policies.google.com/terms?hl=en-AU&fg=1' className='footer__bottom--rightlinks'>Terms</a>
                        <a href='https://www.google.com/preferences?hl=en' className='footer__bottom--rightlinks'>Settings</a>
                    </span>
                </div>
            </div>
        );
    }
}

export default Footer;