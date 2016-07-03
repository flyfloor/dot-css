import React, { Component } from 'react';
import {CN, TitleBlock} from './util';
import {NS, BLOG_URL} from './setting';

export default class Text extends Component {
    render() {
        return (
            <div>
                {TitleBlock('Text')}
                <ul>
                    <li>
                        <h3>Display Block element</h3>
                        <a href={BLOG_URL} className={CN('bg-orange block')} target="_blank">block</a>
                        <br/>
                        <pre>
                            <code>{`<a href="#" class="${NS} block"></a>`}</code>
                        </pre>
                    </li>
                    <li>
                        <h3>Truncate text</h3>
                        <div style={{'width': '200'}} className={CN('truncate')}>
                            hello, this will not show the fully text.
                        </div>
                        <br/>
                        <pre>
                            <code>{`<div class="${NS} truncate">content</div>`}</code>
                        </pre>
                    </li>
                    <li>
                        <h3>Break word</h3>
                        <div style={{'width': '200'}} className={CN('break-word')}>
                            <a href="https://www.google.com/design/spec/style/color.html" target="_blank">
                                https://www.google.com/design/spec/style/color.html
                            </a>
                        </div>
                        <br/>
                        <pre>
                            <code>
{`<div class="${NS} break-word">
    <a href="#">href</a>
</div>`}
                            </code>
                        </pre>
                    </li>
                    <li>
                        <h3>Text Align</h3>
                        <div className={CN('bg-tiny_gray grid grid-3')}>
                            <p className={CN('padding text-left column')}>
                                Aligh left
                            </p>
                            <p className={CN('padding text-center column')}>
                                Aligh center
                            </p>
                            <p className={CN('padding text-right column')}>
                                Aligh right
                            </p>
                        </div>
                        <br/>
                        <pre>
                            <code>{`<div class="${NS} text-left">left</div>`}</code>
                        </pre>
                    </li>
                    <li>
                        <h3>Float</h3>
                        <div className={CN('padding bg-tiny_gray')}>
                            <span className={CN('float-none')}>Float none</span>
                            <span className={CN('float-left')}>Float left</span>
                            <span className={CN('float-right')}>Float right</span>
                        </div>
                        <br/>
                        <pre>
                            <code>{`<div class="${NS} float-left">left</div>`}</code>
                        </pre>
                    </li>
                    <li>
                        <h3>Text size</h3>
                        <div className={CN('padding bg-tiny_gray')}>
                            <p className={CN('text-major')}>Text major</p>
                            <p className={CN('text-content')}>Text content</p>
                            <p className={CN('text-extra')}>Text extra</p>
                        </div>
                        <br/>
                        <pre>
                            <code>{`<div class="${NS} text-major">text</div>`}</code>
                        </pre>
                    </li>
                </ul>
            </div>
        );
    }
}
