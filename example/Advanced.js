import React, { Component } from 'react';
import {CN} from './util';
import {NS} from './setting';

const makeCard = (cn='card') => {
    return (
        <div className={cn}>
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
        </div>
    );
};

const makeMessage = (cn='') => {
    return (
        <div className={CN(`${cn} message`)}>
            <p><span>{cn ? `${cn}: `: null}</span> edit your feed by updating the users you follow and repositories you watch</p>
        </div>
    );
}

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
                        <pre>
                            <code>
{`<div class="${NS} comment">
    <div class="avatar">
        <img src="" alt="" />
    </div>
    <div class="content">
        <div class="nickname"></div>
        <div class="extra"></div>
        <div class="text"></div>
        <div class="action"></div>
    </div>
    <div class="comments">
        <div class="comment">
            ...
        </div>
        ...
    </div>
</div>`}                                
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
{`<div class="${NS} comment">
    <div class="avatar">
        <img src="" alt="" />
    </div>
    <div class="content">
        <div class="nickname"></div>
        <div class="extra right"></div>
        <div class="text"></div>
        <div class="action"></div>
    </div>
</div>`}                                   
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
{`<div class="${NS} comment">
    <div class="round avatar">
        <img src="" alt="" />
    </div>
    <div class="content">
        <div class="nickname"></div>
        <div class="extra right"></div>
        <div class="text"></div>
        <div class="action"></div>
    </div>
</div>`}                                   
                            </code>
                        </pre>
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
                                <pre>
                                    <code>
{`<div class="${NS} item">
    <div class="${NS} mini image">
        <img src="" alt="" />
    </div>
    <div class="content">
        <div class="header"></div>
        <div class="extra"></div>
    </div>
</div>`}                                        
                                    </code>
                                </pre>
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
                                <pre>
                                    <code>
{`<div class="${NS} item top">
    <div class="${NS} mini image">
        <img src="" alt="" />
    </div>
    <div class="content">
        <div class="header"></div>
        <div class="extra"></div>
    </div>
</div>`}                                             
                                    </code>
                                </pre>
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
                                <pre>
                                    <code>
{`<div class="${NS} item bottom">
    <div class="${NS} mini image">
        <img src="" alt="" />
    </div>
    <div class="content">
        <div class="header"></div>
        <div class="extra"></div>
    </div>
</div>`}                                             
                                    </code>
                                </pre>
                            </li>
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
                                <pre>
                                    <code>
{`<div class="${NS} card">
    <div class="${NS} image">
        <img src="" alt="" />
    </div>
    <div class="content"></div>
    <div class="extra"></div>
</div>`}                                        
                                    </code>
                                </pre>
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
                                <pre>
                                    <code>
{`<div class="${NS} cards">
    <div class="${NS} card">
        ...
    </div>
    <div class="${NS} card">
    </div>
    ...
</div>`}                                        
                                    </code>
                                </pre>
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
                                <pre>
                                    <code>
{`<div class="${NS} cards card-5">
    <div class="${NS} card"></div>
    <div class="${NS} card"></div>
    <div class="${NS} card"></div>
    <div class="${NS} card"></div>
    <div class="${NS} card"></div>
</div>`}                                        
                                    </code>
                                </pre>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h3>Message</h3>
                        <ul>
                            <li>
                                <h4>Default Message</h4>
                                <div className={CN('message')}>
                                    <h3 className="header">ProTips</h3>
                                    <p>Edit your feed by updating the users you follow and repositories you watch.</p>
                                </div>
                                <pre>
                                    <code>
{`<div class="${NS} message">
    <div class="header"></div>
    <p></p>
</div>`}                                        
                                    </code>
                                </pre>
                            </li>
                            <li>
                                <h4>Icon Message</h4>
                                <div className={CN('icon message')}>
                                    <i className={CN('icon')}>translate</i>
                                    <div className="content">
                                        <p>Edit your feed by updating the users you follow and repositories you watch.</p>
                                    </div>
                                </div>
                                <pre>
                                    <code>
{`<div class="${NS} icon message">
    <i class="${NS} icon">translate</i>
    <div class="content">
        <p></p>
    </div>
</div>`}                                         
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
{`<div class="${NS} info message">
    <p></p>
</div>`}                                               
                                    </code>
                                </pre>
                            </li>
                            <li>
                                <h4>Size</h4>
                                {makeMessage('tiny')}
                                {makeMessage('small')}
                                {makeMessage('')}
                                {makeMessage('large')}
                                {makeMessage('huge')}
                                <pre>
                                    <code>
{`<div class="${NS} tiny message">
    <p></p>
</div>`}                                           
                                    </code>
                                </pre>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h3>Progress</h3>
                        <h4>Status Progress</h4>
                        <div className={CN('progress')}>
                            <div className="bar" style={{width: '20%'}}>
                            </div>
                        </div>
                        <div className={CN('success progress')}>
                            <div className="bar" style={{width: '100%'}}>
                            </div>
                        </div>
                        <div className={CN('error progress')}>
                            <div className="bar" style={{width: '30%'}}>
                            </div>
                        </div>
                        <div className={CN('warning progress')}>
                            <div className="bar" style={{width: '30%'}}>
                            </div>
                        </div>
                        <pre>
                            <code>
{`success, error warning
<div class="${NS} progress">
    <div class="bar" style="width:20%"></div>
</div>`}                                
                            </code>
                        </pre>
                        <h4>Progress Size</h4>
                        <h5>small</h5>
                        <div className={CN('small progress')}>
                            <div className="bar" style={{'width': '30%'}}>
                            </div>
                        </div>
                        <h5>default</h5>
                        <div className={CN('progress')}>
                            <div className="bar" style={{'width': '30%'}}>
                            </div>
                        </div>
                        <h5>large</h5>
                        <div className={CN('large progress')}>
                            <div className="bar" style={{'width': '30%'}}>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}
