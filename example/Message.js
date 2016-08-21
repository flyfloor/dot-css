import React, { Component } from 'react';
import {CN, TitleBlock} from './util';
import {SHAPE_SIZE} from './setting';

const makeMessage = (cn='') => {
    return (
        <div className={CN(`${cn} message`)}>
            <p><span>{cn ? `${cn}: `: null}</span> edit your feed by updating the users you follow and repositories you watch</p>
        </div>
    );
}

const sizeMsgList = () => {
    return (
        <ul>
            {SHAPE_SIZE.map(size => {
                return <li key={`${size}_msg`}>
                            {makeMessage(size)}
                        </li>
            })}
        </ul>
    )
}

export default class Message extends Component {
    render() {
        return (
            <div>
                {TitleBlock('Message')}
                <ul>
                    <li>
                        <h4>Default Message</h4>
                        <div className={CN('message')}>
                            <h3 className="header">ProTips</h3>
                            <p>Edit your feed by updating the users you follow and repositories you watch.</p>
                        </div>
                        <pre>
                            <code>
{`
<div class="${CN('message')}">
    <div class="header"></div>
    ...
</div>
`}                                
                            </code>
                        </pre>
                    </li>
                    <li>
                        <h4>Icon Message</h4>
                        <div className={CN('icon message')}>
                            <i className="icon">translate</i>
                            <div className="content">
                                <p>Edit your feed by updating the users you follow and repositories you watch.</p>
                            </div>
                        </div>
                        <pre>
                            <code>
{`
<div class="${CN('icon message')}">
    <i class="icon">translate</i>
    <div class="content"></div>
</div>
`}                                
                            </code>
                        </pre>
                    </li>
                    <li>
                        <h4>Status Message</h4>
                        {makeMessage('info')}
                        {makeMessage('warning')}
                        {makeMessage('success')}
                        {makeMessage('error')}
                        <pre>
                            <code>
{`
<div class="${CN('info message')}">
    ...
</div>

<div class="${CN('warning message')}">
</div>

<div class="${CN('success message')}">
</div>

<div class="${CN('error message')}">
</div>
`}                                
                            </code>
                        </pre>
                    </li>
                    <li>
                        <h4>Size</h4>
                        {sizeMsgList()}
                        <pre>
                            <code>
{`
<div class="${CN('large message')}">
    ...
</div>
`}                                
                            </code>
                        </pre>
                    </li>
                </ul>
            </div>
        );
    }
}
