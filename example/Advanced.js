import React, { Component } from 'react';
import {CN} from './util';

const makeCard = (cn='card') => {
    return <div className={cn}>
                <div className={CN('image')}>
                    <img src="http://braavos.me/dot-css/dist/img/img.png"/>
                </div>
                <div className="header">
                    Header
                </div>
                <div className="content">
                    <p>This is content</p>
                </div>
                <div className="extra">
                    <p>This is extra data</p>
                </div>
            </div>;
};

export default class Advanced extends Component {
    render() {
        return (
            <div>
                <h2>Advanced</h2>
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
                    </li>
                    <li>
                        <h3>Item</h3>
                        <ul className={CN('list')}>
                            <li>
                                <h4>Default Item(vertical center)</h4>
                                <div className={CN('item')}>
                                    <div className={CN('mini image')}>
                                        <img src="http://braavos.me/dot-css/dist/img/avatar.png"/>
                                    </div>
                                    <div className="content">
                                        <div className="header">Jerry</div>
                                        <div className="extra">just push 3 commit to dot-css</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <h4>vertical top item</h4>
                                <div className={CN('item top')}>
                                    <div className={CN('small image')}>
                                        <img src="http://braavos.me/dot-css/dist/img/img.png"/>
                                    </div>
                                    <div className="content">
                                        <div className="header">Jerry</div>
                                        <div className="extra">just push 3 commit to dot-css</div>
                                    </div>
                                </div>
                            </li>
                            <li className="item">
                                <h4>vertical bottom item</h4>
                                <div className={CN('item bottom')}>
                                    <div className={CN('tiny image')}>
                                        <img src="http://braavos.me/dot-css/dist/img/avatar.png"/>
                                    </div>
                                    <div className="content">
                                        <div className="header">Jerry</div>
                                        <div className="extra">just push 3 commit to dot-css</div>
                                    </div>
                                </div>
                            </li>
                            <li className="item"></li>
                            <li className="item"></li>
                        </ul>
                    </li>
                    <li>
                        <h3>Card</h3>
                        <ul>
                            <li>
                                <h4>One Card</h4>
                                <div className={CN('card')}>
                                    <div className={CN('image')}>
                                        <img src="http://braavos.me/dot-css/dist/img/avatar.png"/>
                                    </div>
                                    <div className="content">
                                        <p>This is content</p>
                                        <p>This is content</p>
                                    </div>
                                    <div className="extra">
                                        <p>This is extra data</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <h4>Cards</h4>
                                <div className={CN('cards')}>
                                    {makeCard()}
                                    {makeCard()}
                                    {makeCard()}
                                    {makeCard()}
                                    {makeCard()}
                                </div>
                            </li>
                            <li>
                                <h4>Cards with given count</h4>
                                <div className={CN('cards cards-5')}>
                                    {makeCard()}
                                    {makeCard()}
                                    {makeCard()}
                                    {makeCard()}
                                    {makeCard()}
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}
