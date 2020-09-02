import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import './Message.css'

class Message extends Component {
    render() {
        return (
            <div id='message-container'>
                <FontAwesomeIcon icon={faExclamationTriangle} transform='grow-20 left-17' id='icon-warning' />
                <a href='https://australia.googleblog.com/2020/08/13-things-you-need-to-know-about-news.html' id='message-link'>Get answers</a> on a proposed law that puts Google Search and YouTube at risk #AFairCode                
            </div>
        );
    }
}

export default Message;