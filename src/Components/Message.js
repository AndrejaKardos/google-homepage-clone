import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import '../App.css'

class Message extends Component {
    render() {
        return(
            <div id='message-container'>
                <FontAwesomeIcon icon={faExclamationTriangle} transform='grow-24 left-24' id='icon-warning' />
                <a href='https://australia.googleblog.com/2020/08/13-things-you-need-to-know-about-news.html' id='message-link'>13 things to know</a> about a proposed law that puts Google Search at risk #AFairCode
            </div>
        );
    }
}

export default Message;