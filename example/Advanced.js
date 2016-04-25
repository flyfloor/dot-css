import React, { Component } from 'react';
import {CN} from './util';

export default class List extends Component {
    render() {
        return (
            <div>
                <h2>List</h2>
                <blockquote className={CN('blockquote')}>
                    <p>This is about list</p>
                </blockquote>
                <ul>
                    <li>
                        <h3>Comment</h3>
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
                                    Lacuna is a company name from a movie named <i>Eternal sunshine of the spotless mind</i>
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
                                            Emm, that is interesting. I supposed be.
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
                                    Emm, that is interesting. I supposed be.
                                </div>
                                <div className="action">
                                    <a href="javascript:;">reply</a>
                                    <a href="javascript:;">delete</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <h3>Right floated extra</h3>
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
                                    Lacuna is a company name from a movie named <i>Eternal sunshine of the spotless mind</i>
                                </div>
                                <div className="action">
                                    <a href="javascript:;">reply</a>
                                    <a href="javascript:;">delete</a>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}
