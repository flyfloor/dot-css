import React, { Component } from 'react';

export default class Input extends Component {
    render() {
        return (
            <div>
                <h2>Input</h2>
                <ul>
                    <li>
                        <h3>Default input</h3>
                        <input type="text" placeholder='input...'/>
                    </li>
                    <li></li>
                </ul>
            </div>
        );
    }
}
