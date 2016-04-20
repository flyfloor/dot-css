import React, { Component } from 'react';
import {ICONS} from './setting';
import {CN} from './util';

const makeIcons = () => {
    return (
        <ul className={CN('grid grid-5 text-center text-extra')}>
            {ICONS.map(icon => {
                return <li key={icon} className={CN('column padding field')}>
                            <i className={CN('icon')}>{icon}</i>
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
                <blockquote>
                    <p>This part is the Icons dot css use, <span className={CN('color-brown')}>from Google's material icons, <a href="https://design.google.com/icons/" target="_blank">Google icons</a></span></p>
                </blockquote>
                <pre>
                    <code>
                        &lt;i class="dot-icon"&gt;account_circle&lt;/i&gt;
                    </code>
                </pre>
                {makeIcons()}
                <br/>
                <h4>Colored icon</h4>
                <div className={CN('grid grid-10')}>
                    <div className={CN('column padding')}>
                        <i className={CN('color-red icon')}>favorite</i>
                    </div>
                    <div className={CN('column padding')}>
                        <i className={CN('color-green icon')}>all_inclusive</i>
                    </div>
                </div>
            </div>
        );
    }
}
