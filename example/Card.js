import React, { Component } from 'react';
import {CN} from './util';

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
                <h2>Card</h2>
                <blockquote className={CN('blockquote')}>
                    <p>Content about Card</p>
                </blockquote>
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
            </div>
        );
    }
}
