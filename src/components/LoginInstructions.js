import React from 'react'
import reactLogo from '../resources/images/react-logo.png';

export default function LoginInstructions () {
    return (
        <div className="p-3 text-center">
            <img alt="Account Logo" src={reactLogo} height="70" className="pb-4"/>

            
            <p>
                <small>This is a React/Redux project created to test my learnings during React Nanodegree program on Udacity.com</small>
            </p>

            <h5>Instructions</h5>
            <div className="text-left">
                <small>
                    <p>Use one of these usernames with password: 1234</p>
                    <ul>
                        <li>sarahedo</li>
                        <li>tylermcginnis</li>
                        <li>johndoe</li>
                    </ul>
                </small>
            </div>
        </div>
    )
}
