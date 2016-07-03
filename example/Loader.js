import React, { Component } from 'react';
import {CN, TitleBlock} from './util';

export default class Loader extends Component {
    render() {
        return (
            <div>
                {TitleBlock('Loader')}
                <ul>
                    <li>
                        <h4>Default loader</h4>
                        <br/>
                        <div className={CN('small loader')}></div>
                        <pre>
                            <code>{`<div class="${CN('small loader')}"></div>`}</code>
                        </pre>
                        <div className={CN('loader')}></div>
                        <pre>
                            <code>{`<div class="${CN('loader')}"></div>`}</code>
                        </pre>
                        <div className={CN('large loader')}></div>
                        <pre>
                            <code>{`<div class="${CN('large loader')}"></div>`}</code>
                        </pre>
                        <h4>Inverted loader</h4>
                        <div className={CN('bg-deep_gray padding')}>
                            <div className={CN('inverted loader')}></div>
                        </div>
                        <pre>
                            <code>{`<div class="${CN('inverted loader')}"></div>`}</code>
                        </pre>
                    </li>
                    <li>
                        <h4>Bounced loader</h4>
                        <div className={CN('small bounce loader')}>
                            <div className="bounce"></div>
                            <div className="bounce"></div>
                            <div className="bounce"></div>
                        </div>
                        <br/>
                        <div className={CN('bounce loader')}>
                            <div className="bounce"></div>
                            <div className="bounce"></div>
                            <div className="bounce"></div>
                        </div>
                        <br/>
                        <div className={CN('large bounce loader')}>
                            <div className="bounce"></div>
                            <div className="bounce"></div>
                            <div className="bounce"></div>
                        </div>
                        <pre>
                            <code>
{`
<div class="${CN('bounce loader')}">
    <div class="bounce"></div>
    <div class="bounce"></div>
    <div class="bounce"></div>
</div>
`}                                
                            </code>
                        </pre>
                    </li>
                    <li></li>
                </ul>
            </div>
        );
    }
}
