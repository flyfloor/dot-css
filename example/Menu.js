import React, { Component } from 'react';
import {CN, TitleBlock} from './util';
import {NS} from './setting';

const makeMenu = (cn='') => {
    return (
        <div className={CN(`${cn} menu`)}>
            <a href="javascript:;" className="item active">home</a>
            <a href="javascript:;" className="item">blog</a>
            <a href="javascript:;" className="item">about</a>
            <div className="right menu">
                <div className="item">
                    <div className={CN('input')}>
                        <input type="text"/>
                        <div className="action">
                            <button>search</button>
                        </div>
                    </div>
                </div>
                <div className={CN('item')}>logout</div>
            </div>
        </div>
    )
}

export default class Menu extends Component {
    render() {
        return (
            <div>
                {TitleBlock('Menu')}
                <ul>
                    <li>
                        <h3>Default menu</h3>
                        {makeMenu()}
                    </li>
                    <li>
                        <h3>Lined menu</h3>
                        {makeMenu('lined')}
                    </li>
                </ul>
            </div>
        );
    }
}
