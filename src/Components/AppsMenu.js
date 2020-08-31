import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTh } from '@fortawesome/free-solid-svg-icons'
import '../App.css'

class AppsMenu extends Component {
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
            <div>
                <button id='grid-button' onClick={this.onClick}>
                    <FontAwesomeIcon icon={faTh} transform='grow-7' id='icon-grid' />
                </button>
                { this.state.isOpen && 
                    <div>Hello world</div>
                }
            </div>
        );
    }
}

export default AppsMenu;