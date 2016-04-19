import React, { Component } from 'react';
import {CN} from './util';

const labeledBtns = (cn='', invert) => {
    if (invert) {
        return <div className={CN(`${cn} round input action`)}>
                    <input type="text" placeholder='search...'/>
                    <div className={CN(`${cn} button`)}>search</div>
                </div>;
    }
    return <div className={CN(`${cn} round input action`)}>
                <div className={CN(`${cn} button`)}>search</div>
                <input type="text" placeholder='search...'/>
            </div>;
}

export default class Input extends Component {
    render() {
        return (
            <div>
                <h2>Input</h2>
                <ul>
                    <li>
                        <h3>Default input</h3>
                        <div className={CN('input')}>
                            <input type="text" placeholder='search...'/>
                        </div>
                        <br/>
                    </li>
                    <li>
                        <h3>Error input</h3>
                        <div className={CN('error input')}>
                            <input type="text" placeholder='error'/>
                        </div>
                        <br/>
                    </li>
                    <li>
                        <h3>Focus input</h3>
                        <div className={CN('focus input')}>
                            <input type="text" placeholder='search...'/>
                        </div>
                        <br/>
                    </li>
                    <li>
                        <h3>Round input</h3>
                        <div className={CN('round input')}>
                            <input type="text" placeholder='search...'/>
                        </div>
                        <br/>
                    </li>
                    <li>
                        <h3>Fluid input</h3>
                        <div className={CN('fluid input')}>
                            <input type="text" placeholder='search...'/>
                        </div>
                        <br/>
                    </li>
                    <li>
                        <h3>Disabled input</h3>
                        <div className={CN('disabled input')}>
                            <input type="text"/>
                        </div>
                    </li>
                    <li>
                        <h3>Size</h3>
                        <div className={CN('tiny input')}>
                            <input type="text" placeholder='search...'/>
                        </div>
                        <br/>
                        <div className={CN('small input')}>
                            <input type="text" placeholder='search...'/>
                        </div>
                        <br/>
                        <div className={CN('input')}>
                            <input type="text" placeholder='search...'/>
                        </div>
                        <br/>
                        <div className={CN('large input')}>
                            <input type="text" placeholder='search...'/>
                        </div>
                        <br/>
                        <div className={CN('huge input')}>
                            <input type="text" placeholder='search...'/>
                        </div>
                        <br/>
                    </li>
                    <li>
                        <h3>Labeld input</h3>
                        {labeledBtns('tiny')}
                        <br/>
                        {labeledBtns('small')}
                        <br/>
                        {labeledBtns()}
                        <br/>
                        {labeledBtns('large')}
                        <br/>
                        {labeledBtns('huge')}
                        <br/>
                        {labeledBtns('tiny', true)}
                        <br/>
                        {labeledBtns('small', true)}
                        <br/>
                        {labeledBtns('', true)}
                        <br/>
                        {labeledBtns('large', true)}
                        <br/>
                        {labeledBtns('huge', true)}
                        <br/>
                    </li>
                </ul>
            </div>
        );
    }
}
