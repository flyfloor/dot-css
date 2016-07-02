import React, { Component } from 'react';
import {CN} from './util';

const makeMessage = (cn='') => {
    return (
        <div className={CN(`${cn} message`)}>
            <p><span>{cn ? `${cn}: `: null}</span> edit your feed by updating the users you follow and repositories you watch</p>
        </div>
    );
}

export default class Message extends Component {
    render() {
        return (
            <div>
                <h2>Message</h2>
                <blockquote className={CN('blockquote')}>
                    <p>Content about Message</p>
                </blockquote>
                <ul>
                    <li>
                        <h4>Default Message</h4>
                        <div className={CN('message')}>
                            <h3 className="header">ProTips</h3>
                            <p>Edit your feed by updating the users you follow and repositories you watch.</p>
                        </div>
                    </li>
                    <li>
                        <h4>Icon Message</h4>
                        <div className={CN('icon message')}>
                            <i className={CN('icon')}>translate</i>
                            <div className="content">
                                <p>Edit your feed by updating the users you follow and repositories you watch.</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <h4>Status Message</h4>
                        {makeMessage('info')}
                        {makeMessage('warning')}
                        {makeMessage('success')}
                        {makeMessage('error')}
                    </li>
                    <li>
                        <h4>Size</h4>
                        {makeMessage('tiny')}
                        {makeMessage('small')}
                        {makeMessage('')}
                        {makeMessage('large')}
                        {makeMessage('huge')}
                    </li>
                </ul>
            </div>
        );
    }
}
