import React, { Component } from 'react';
import {NS} from './setting';

export default class Icon extends Component {
    render() {
        return (
            <div>
                <h4>
                    Icon
                </h4>
                <p>Use Google's material icons, <a href="https://design.google.com/icons/" target="_blank">Google icons</a></p>
                <pre>
                    <code>
                        &lt;i class="dot-icon"&gt;account_circle&lt;/i&gt;
                    </code>
                </pre>
                <ul className={`${NS} grid grid-16 text-center text-extra`}>
                    <li className="column">
                        <i className={`${NS} icon`}>account_circle</i>
                        <p>account_circle</p>
                    </li>
                    <li className="column">
                        <i className={`${NS} icon`}>explore</i>
                        <p>explore</p>
                    </li>
                    <li className="column">
                        <i className={`${NS} icon`}>query_builder</i>
                        <p>query_builder</p>
                    </li>
                    <li className="column">
                        <i className={`${NS} icon`}>add</i>
                        <p>add</p>
                    </li>
                    <li className="column">
                        <i className={`${NS} icon`}>add_circle</i>
                        <p>add_circle</p>
                    </li>
                    <li className="column"></li>
                    <li className="column"></li>
                    <li className="column"></li>
                    <li className="column"></li>
                    <li className="column"></li>
                    <li className="column"></li>
                    <li className="column"></li>
                    <li className="column"></li>
                    <li className="column"></li>
                    <li className="column"></li>
                    <li className="column"></li>
                </ul>
            </div>
        );
    }
}
