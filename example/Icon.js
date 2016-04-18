import React, { Component } from 'react';
import {ICONS} from './setting';
import {className} from './util';

const makeIcons = () => {
    return (
        <ul className={className('grid grid-5 text-center text-extra')}>
            {ICONS.map(icon => {
                return <li key={icon} className={className('column padding field')}>
                            <i className={className('icon')}>{icon}</i>
                            <p>{icon}</p>
                        </li>
            })}
        </ul>
    );
};

export default class Icon extends Component {
    render() {
        return (
            <div>
                <h2>Icon</h2>
                <blockquote>Use Google's material icons, <a href="https://design.google.com/icons/" target="_blank">Google icons</a></blockquote>
                <pre>
                    <code>
                        &lt;i class="dot-icon"&gt;account_circle&lt;/i&gt;
                    </code>
                </pre>
                {makeIcons()}
                <br/>
                <h4>Colored icon</h4>
                <div className={className('grid grid-10')}>
                    <div className={className('column padding')}>
                        <i className={className('color-red icon')}>favorite</i>
                    </div>
                    <div className={className('column padding')}>
                        <i className={className('color-green icon')}>all_inclusive</i>
                    </div>
                </div>
            </div>
        );
    }
}
