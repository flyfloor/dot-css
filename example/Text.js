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
                        <h3>Truncate text</h3>
                        <div style={{'width': '200'}} className="truncate">
                            hello, this will not show the fully text.
                        </div>
                        <br/>
                        <pre>
                            <code>{`<div class="truncate">content</div>`}</code>
                        </pre>
                    </li>
                    <li>
                        <h3>Break word</h3>
                        <div style={{'width': '200'}} className="break-word">
                            <a href="https://www.google.com/design/spec/style/color.html" target="_blank">
                                https://www.google.com/design/spec/style/color.html
                            </a>
                        </div>
                        <br/>
                        <pre>
                            <code>
{`<div class="break-word">
    <a href="#">href</a>
</div>`}
                            </code>
                        </pre>
                    </li>
                    <li>
                        <h3>Text Align</h3>
                        <div className={CN('bg-tiny_gray grid-3')}>
                            <p className="text-left column">
                                Aligh left
                            </p>
                            <p className="text-center column">
                                Aligh center
                            </p>
                            <p className="text-right column">
                                Aligh right
                            </p>
                        </div>
                        <br/>
                        <pre>
                            <code>{`<div class="text-left">left</div>`}</code>
                        </pre>
                    </li>
                    <li>
                        <h3>Float</h3>
                        <div className={CN('bg-tiny_gray block')}>
                            <span className="float-none">Float none</span>
                            <span className="float-left">Float left</span>
                            <span className="float-right">Float right</span>
                        </div>
                        <br/>
                        <pre>
                            <code>{`<div class="float-left">left</div>`}</code>
                        </pre>
                    </li>
                    <li>
                        <h3>Text size</h3>
                        <div className={CN('bg-tiny_gray block')}>
                            <p className="text-major">Text major</p>
                            <p className="text-content">Text content</p>
                            <p className="text-extra">Text extra</p>
                        </div>
                        <br/>
                        <pre>
                            <code>{`<div class="text-major">text</div>`}</code>
                        </pre>
                    </li>
                </ul>
            </div>
        );
    }
}
