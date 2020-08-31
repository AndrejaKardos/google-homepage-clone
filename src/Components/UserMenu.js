import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import '../App.css'

class UserMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }

        this.onClick = this.onClick.bind(this)
    }

    onClick() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <div id='icon-user-container'>
                <button id='user-button' onClick={this.onClick}>
                    <FontAwesomeIcon icon={faUser} transform='shrink-3.5' id='icon-user' />
                </button>
                { this.state.isOpen &&
                    <div id='user-menu'>Hello world</div>
                }
            </div>
        );
    }
}

export default UserMenu;