import React, { Component } from 'react';
import {CN} from './util';
const SIZE = ['tiny', 'small', '', 'large', 'huge'];

const labeledBtn = (cn='', invert) => {
    if (invert) {
        return <div className={CN(`${cn} input action`)}>
                    <input type="text" placeholder='search...'/>
                    <div className={CN("button")}>button</div>
                </div>;
    }
    return <div className={CN(`${cn} input action`)}>
                <div className={CN('button')}>button</div>
                <input type="text" placeholder='search...'/>
            </div>;
}

const makeBtn = (cn='') => {
    return <div>
                <div className={CN(`${cn} input`)}>
                    <input type="text" placeholder='search...'/>
                </div>
                <br/>
            </div>;
};

const actionBtns =  (invert=false) => {
    let node = [];
    for (var i = 0; i < SIZE.length; i++) {
        node.push(<div key={`${SIZE[i]}-action-button`}>
                    {labeledBtn(SIZE[i], invert)}
                    <br/>
                </div>);
    }

    return <div>
                {node}
            </div>;
};

export default class Input extends Component {
    render() {
        return (
            <div>
                <h2>Input</h2>
                <ul>
                    <li>
                        <h3>Default input</h3>
                        {makeBtn()}
                        <h4>Error input</h4>
                        {makeBtn('error')}
                        <h4>Focus input</h4>
                        {makeBtn('focus')}
                        <br/>
                        <h4>Round input</h4>
                        {makeBtn('round')}
                        <h4>Fluid input</h4>
                        {makeBtn('fluid')}
                        <h4>Disabled input</h4>
                        {makeBtn('disabled')}
                    </li>
                    <li>
                        <h3>Size</h3>
                        {makeBtn('tiny')}
                        {makeBtn('small')}
                        {makeBtn('')}
                        {makeBtn('large')}
                        {makeBtn('huge')}
                    </li>
                    <li>
                        <h3>Action input</h3>
                        {actionBtns()}
                        {actionBtns(true)}
                        <h4>Round action input</h4>
                        <div className={CN('input round action')}>
                            <input type="text" placeholder='search...'/>
                            <div className={CN('button')}>button</div>
                        </div>
                        <br/>
                        <h4>Fluid action input</h4>
                        <div className={CN('fluid action input')}>
                            <input type="text" placeholder='search...'/>
                            <div className={CN('button')}>button</div>
                        </div>
                        <br/>
                        <div className={CN('fluid huge action input')}>
                            <div className={CN('button')}>button</div>
                            <input type="text" placeholder='search...'/>
                        </div>
                        <br/>
                    </li>
                    <li>
                        <h3>Icon input</h3>
                        <div className={CN('field')}>
                            <div className={CN('icon input')}>
                                <input type="text" placeholder="search..."/>
                                <i className={CN('icon')}>search</i>
                            </div>
                        </div>
                        <div className={CN('field')}>
                            <div className={CN('huge icon input')}>
                                <input type="text" placeholder="search..."/>
                                <i className={CN('icon')}>search</i>
                            </div>
                        </div>
                        <div className={CN('field')}>
                            <div className={CN('icon left input')}>
                                <i className={CN('icon')}>search</i>
                                <input type="text" placeholder="search..."/>
                            </div>
                        </div>
                        <div className={CN('field')}>
                            <div className={CN('fluid icon input')}>
                                <input type="text" placeholder="search..."/>
                                <i className={CN('icon')}>search</i>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}
