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
                        <h4>Default menu</h4>
                        {makeMenu()}
                        <h4>colored menu</h4>
                        {makeMenu('green')}
                    </li>
                    <li>
                        <h4>Angled menu</h4>
                        {makeMenu('angled')}
                    </li>
                    <li>
                        <h4>Lined menu</h4>
                        {makeMenu('lined')}
                        <h4>colored menu</h4>
                        {makeMenu('red lined')}
                    </li>
                    <li>
                        <h4>Menu bar</h4>
                        {makeMenu('bar')}
                        <h4>colored menu</h4>
                        {makeMenu('blue bar')}
                    </li>
                    <li>
                        <h4>Vertical menu</h4>
                        <div className={CN('vertical menu')}>
                            <a href="javascript:;" className="item active">home</a>
                            <a href="javascript:;" className="item">blog</a>
                            <a href="javascript:;" className="item">about</a>
                        </div>
                        <br/>
                    </li>
                    <li>
                        <h4>Lined vertical menu</h4>
                        <div className={CN('vertical lined menu')}>
                            <a href="javascript:;" className="item active">home</a>
                            <a href="javascript:;" className="item">blog</a>
                            <a href="javascript:;" className="item">about</a>
                        </div>
                        <br/>
                    </li>
                </ul>
            </div>
        );
    }
}
