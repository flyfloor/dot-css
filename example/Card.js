import React, { Component } from 'react';
import {CN, TitleBlock} from './util';

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

export default class Card extends Component {
    render() {
        return (
            <div>
                {TitleBlock('Card')}
                <ul>
                    <li>
                        <h4>One Card</h4>
                        <div className={CN('card')}>
                            <div className={CN('image')}>
                                <img src="http://braavos.me/dot-css/dist/img/avatar.png"/>
                            </div>
                            <div className="content">
                                <p>This is content</p>
                            </div>
                            <div className="extra">
                                <p>This is extra data</p>
                            </div>
                        </div>
                        <pre>
                            <code>
{`
<div className="${CN('card')}">
    <div className="${CN('image')}">
        <img src="http://braavos.me/dot-css/dist/img/avatar.png"/>
    </div>
    <div className="content">
        <p>This is content</p>
    </div>
    <div className="extra">
        <p>This is extra data</p>
    </div>
</div>
`}                                
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
{`
<div class="${CN('cards')}">
    <div class="card">
        ...
    </div>
</div>
`}                                    
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
{`
<div class="${CN('cards cards-5')}">
    <div class="card">
        ...
    </div>
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
