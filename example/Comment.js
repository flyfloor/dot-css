import React, { Component } from 'react';
import {CN, TitleBlock} from './util';

export default class Comment extends Component {
    render() {
        return (
            <div>
                {TitleBlock('Comment')}
                <ul>
                    <li>
                        <div className={CN('comment')}>
                            <div className="avatar">
                                <img src="http://braavos.me/dot-css/dist/img/avatar.png"/>
                            </div>
                            <div className="content">
                                <div className="nickname">lacuna fario</div>
                                <div className="extra">
                                    <span>2016-05-32 8:20 pm</span>
                                </div>
                                <div className="text">
                                    Lacuna is a company name from a movie named <i>"Eternal sunshine of the spotless mind"</i>
                                </div>
                                <div className="action">
                                    <a href="javascript:;">reply</a>
                                    <a href="javascript:;">delete</a>
                                </div>
                            </div>
                            <div className="comments">
                                <div className={CN('comment')}>
                                    <div className="avatar">
                                        <img src="http://braavos.me/dot-css/dist/img/avatar0.png"/>
                                    </div>
                                    <div className="content">
                                        <div className="nickname">lily</div>
                                        <div className="extra">
                                            <span>2016-05-32 8:10 pm</span>
                                        </div>
                                        <div className="text">
                                            Emm, that is interesting. I supposed.
                                        </div>
                                        <div className="action">
                                            <a href="javascript:;">reply</a>
                                            <a href="javascript:;">delete</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={CN('comment')}>
                                    <div className="avatar">
                                        <img src="http://braavos.me/dot-css/dist/img/avatar.png"/>
                                    </div>
                                    <div className="content">
                                        <div className="nickname">lacuna fario</div>
                                        <div className="extra">
                                            <span>2016-05-32 8:10 pm</span>
                                        </div>
                                        <div className="text">
                                            Okay, you will never know.
                                        </div>
                                        <div className="action">
                                            <a href="javascript:;">reply</a>
                                            <a href="javascript:;">delete</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={CN('comment')}>
                            <div className="avatar">
                                <img src="http://braavos.me/dot-css/dist/img/avatar0.png"/>
                            </div>
                            <div className="content">
                                <div className="nickname">lily</div>
                                <div className="extra">
                                    <span>2016-05-32 8:10 pm</span>
                                </div>
                                <div className="text">
                                    Emm, that is interesting. I supposed.
                                </div>
                                <div className="action">
                                    <a href="javascript:;">reply</a>
                                    <a href="javascript:;">delete</a>
                                </div>
                            </div>
                        </div>
                        <pre>
                            <code>
{`
<div className="${CN('comment')}">
    <div className="avatar">
        <img src="http://braavos.me/dot-css/dist/img/avatar.png"/>
    </div>
    <div className="content">
        <div className="nickname">lacuna fario</div>
        <div className="extra">
            <span>2016-05-32 8:20 pm</span>
        </div>
        <div className="text">
            Lacuna is a company name from a movie named <i>"Eternal sunshine of the spotless mind"</i>
        </div>
        <div className="action">
            <a href="javascript:;">reply</a>
            <a href="javascript:;">delete</a>
        </div>
    </div>
    <div className="comments">
        <div className="${CN('comment')}">
            <div className="avatar">
                <img src="http://braavos.me/dot-css/dist/img/avatar0.png"/>
            </div>
            <div className="content">
                <div className="nickname">lily</div>
                <div className="extra">
                    <span>2016-05-32 8:10 pm</span>
                </div>
                <div className="text">
                    Emm, that is interesting. I supposed.
                </div>
                <div className="action">
                    <a href="javascript:;">reply</a>
                    <a href="javascript:;">delete</a>
                </div>
            </div>
        </div>
    </div>
</div>
`}                                
                            </code>
                        </pre>
                    </li>
                    <li>
                        <h4>Right floated extra</h4>
                        <div className={CN('comment')}>
                            <div className="avatar">
                                <img src="http://braavos.me/dot-css/dist/img/avatar.png"/>
                            </div>
                            <div className="content">
                                <div className="nickname">lacuna fario</div>
                                <div className="extra right">
                                    <span>2016-05-32 8:20 pm</span>
                                </div>
                                <div className="text">
                                    Lacuna is a company name from a movie named <i>"Eternal sunshine of the spotless mind"</i>
                                </div>
                                <div className="action">
                                    <a href="javascript:;">reply</a>
                                    <a href="javascript:;">delete</a>
                                </div>
                            </div>
                        </div>
                        <pre>
                            <code>
{`
<div className="${CN('comment')}">
    ...
    <div className="content">
        ...
        <div className="extra right">
            <span>2016-05-32 8:20 pm</span>
        </div>
        ...
    </div>
</div>
`}                                
                            </code>
                        </pre>
                    </li>
                    <li>
                        <h4>Round avatar</h4>
                        <div className={CN('comment')}>
                            <div className="round avatar">
                                <img src="http://braavos.me/dot-css/dist/img/avatar.png"/>
                            </div>
                            <div className="content">
                                <div className="nickname">lacuna fario</div>
                                <div className="extra">
                                    <span>replied to</span>
                                    <a href="javascript:;">lily</a>
                                </div>
                                <div className="extra right">
                                    <span>2016-05-32 8:20 pm</span>
                                </div>
                                <div className="text">
                                    Lacuna is a company name from a movie named <i>"Eternal sunshine of the spotless mind"</i>
                                </div>
                                <div className="action">
                                    <a href="javascript:;">reply</a>
                                    <a href="javascript:;">delete</a>
                                </div>
                            </div>
                        </div>
                        <pre>
                            <code>
{` 
<div className="${CN('comment')}">
    <div className="round avatar">
        <img src="http://braavos.me/dot-css/dist/img/avatar.png"/>
    </div>
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

