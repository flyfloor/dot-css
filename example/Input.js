import React, { Component } from 'react';
import {CN} from './util';
const SIZE = ['tiny', 'small', '', 'large', 'huge'];

const labeledInput = (cn='', invert) => {
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

const makeInput = (cn='') => {
    return <div>
                <div className={CN(`${cn} input`)}>
                    <input type="text" placeholder='search...'/>
                </div>
                <br/>
            </div>;
};

const actionInputs =  (invert=false) => {
    let node = [];
    for (var i = 0; i < SIZE.length; i++) {
        node.push(<div key={`${SIZE[i]}-action-button`}>
                    {labeledInput(SIZE[i], invert)}
                    <br/>
                </div>);
    }

    return <div>{node}</div>;
};

export default class Input extends Component {
    render() {
        return (
            <div>
                <h2>Input</h2>
                <ul>
                    <li>
                        <h3>Default input</h3>
                        {makeInput()}
                        <h4>Angled input</h4>
                        {makeInput('angled')}
                        <h3>Default textarea</h3>
                        <div className={CN('input')}>
                            <textarea name="" id="" cols="30" rows="10" placeholder='type in something...'>
                            </textarea>
                        </div>
                        <h4>Error input</h4>
                        {makeInput('error')}
                        <h4>Focus input</h4>
                        {makeInput('focus')}
                        <br/>
                        <h4>Round input</h4>
                        {makeInput('round')}
                        <h4>Fluid input</h4>
                        {makeInput('fluid')}
                        <h4>Disabled input</h4>
                        {makeInput('disabled')}
                    </li>
                    <li>
                        <h3>Size</h3>
                        {makeInput('tiny')}
                        {makeInput('small')}
                        {makeInput('')}
                        {makeInput('large')}
                        {makeInput('huge')}
                    </li>
                    <li>
                        <h3>Action input</h3>
                        {actionInputs()}
                        {actionInputs(true)}
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
