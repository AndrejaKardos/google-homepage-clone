import React, { Component } from 'react'
import '../App.css'

class AddAcount extends Component {
    render() {
        return (
            <div className='email-account-div'>
                <a href='https://accounts.google.com/signin/v2/identifier?hl=en&continue=https%3A%2F%2Fwww.google.com%2F&flowName=GlifWebSignIn&flowEntry=AddSession' className='email-account'>
                    <div className='email-info'>
                        <div className='email-icon'>
                            <FontAwesomeIcon icon={faUserPlus} transform='grow-5' id='add-user-icon' />
                            Add another account
                        </div>
                        
                    </div>
                </a>
            </div>
        );
    }
}

export default AddAccount;