import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import '../App.css'

class Email extends Component {
    render() {
        return (
            <div className='email-account-div'>
                    <div className='email-info'>
                        <div className='email-icon'></div>
                            <FontAwesomeIcon icon={faUser} transform='grow-16' id='icon-user-purple' />
                        <div className='email-text'>
                            <div className='email-text-top'>Username</div>
                            <div className='email-text-bottom'>email3@gmail.com</div>
                        </div>
                    </div>
            </div>

            // {/* <div className='email-account-div'>
            //     <a href='https://accounts.google.com/signin/v2/identifier?hl=en&continue=https%3A%2F%2Fwww.google.com%2F&flowName=GlifWebSignIn&flowEntry=AddSession' className='email-account'>
            //         <div className='email-info'>
            //             <div className='email-icon'>
            //                 <FontAwesomeIcon icon={faUserPlus} transform='grow-5' id='add-user-icon' />
            //                 Add another account
            //             </div>
                        
            //         </div>
            //     </a>
            // </div> */}
        );
    }
}

export default Email;