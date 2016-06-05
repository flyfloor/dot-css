import React, { Component } from 'react';
import {CN} from './util';
import {NS} from './setting';
const SIZE = ['tiny', 'small', '', 'large', 'huge'];

const labeledInput = (cn='', invert=false) => {
    if (invert) {
        return (<div className={CN(`${cn} input action`)}>
                    <input type="text" placeholder={cn ? cn : 'search...'}/>
                    <div className="action">
                        <div className={CN("button")}>button</div>
                    </div>
                </div>);
    }
    return <div className={CN(`${cn} input action`)}>
                <div className="action">
                    <div className={CN('button')}>button</div>
                </div>
                <input type="text" placeholder={cn ? cn : 'search...'}/>
            </div>;
}

const makeInput = (cn='') => {
    return <div className={CN('field')}>
                <div className={CN(`${cn} input`)}>
                    <input type="text" placeholder={cn ? cn : 'search...'}/>
                </div>
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
                <blockquote className={CN('blockquote')}>
                    <p>This part contains Input, Input size, Action input, Icon input</p>
                </blockquote>
                <ul>
                    <li>
                        <h3>Default input</h3>
                        {makeInput()}
                        <pre>
                            <code>
{`<div class="${NS} input">
    <input type="text" />
</div>`}
                            </code>
                        </pre>
                        <h4>Angled input</h4>
                        {makeInput('angled')}
                        <pre>
                            <code>
{`<div class="${NS} angled input">
    <input type="text" />
</div>`}                                
                            </code>
                        </pre>
                        <h3>Default textarea</h3>
                        <div className={CN('input')}>
                            <textarea name="" id="" cols="30" rows="10" placeholder='type in something...'>
                            </textarea>
                        </div>
                        <pre>
                            <code>
{`<div class="${NS} input">
    <textarea name="" id="" cols="30" rows="10"></textarea>
</div>`}                                
                            </code>
                        </pre>
                        <h4>Error input</h4>
                        {makeInput('error')}
                        <pre>
                            <code>
{`<div class="${NS} error input">
    <input type="text" />
</div>`}                                
                            </code>
                        </pre>
                        <h4>Focus input</h4>
                        {makeInput('focus')}
                        <br/>
                        <pre>
                            <code>
{`<div class="${NS} focus input">
    <input type="text" />
</div>`}                                
                            </code>
                        </pre>
                        <h4>Round input</h4>
                        {makeInput('round')}
                        <pre>
                            <code>
{`<div class="${NS} round input">
    <input type="text" />
</div>`}                                
                            </code>
                        </pre>
                        <h4>Fluid input</h4>
                        {makeInput('fluid')}
                        <pre>
                            <code>
{`<div class="${NS} fluid input">
    <input type="text" />
</div>`}                                
                            </code>
                        </pre>
                        <h4>Disabled input</h4>
                        {makeInput('disabled')}
                        <pre>
                            <code>
{`<div class="${NS} disabled input">
    <input type="text" />
</div>`}                                
                            </code>
                        </pre>
                    </li>
                    <li>
                        <h3>Size</h3>
                        {makeInput('tiny')}
                        {makeInput('small')}
                        {makeInput('')}
                        {makeInput('large')}
                        {makeInput('huge')}
                        <pre>
                            <code>
{`<div class="${NS} tiny input">
    <input type="text" />
</div>`}                                
                            </code>
                        </pre>
                    </li>
                    <li>
                        <h3>Action input</h3>
                        {actionInputs()}
                        <pre>
                            <code>
{`<div class="${NS} action input">
    <div class="action">
        <div class="${NS} button">button</div>
    </div>
    <input type="text" />
</div>`}                                
                            </code>
                        </pre>
                        {actionInputs(true)}
                        <pre>
                            <code>
{`<div class="${NS} action input">
    <input type="text" />
    <div class="action">
        <div class="${NS} button">button</div>
    </div>
</div>`}                         
                            </code>
                        </pre>
                        <h4>Round action input</h4>
                        <div className={CN('input round action')}>
                            <input type="text" placeholder='search...'/>
                            <div className="action">
                                <div className={CN('button')}>button</div>
                            </div>
                        </div>
                        <br/>
                        <pre>
                            <code>
{`<div class="${NS} input round action">
    <input type="text" />
    <div class="action">
        <div class="${NS} button">button</div>
    </div>
</div>`}                                
                            </code>
                        </pre>
                        <h4>Fluid action input</h4>
                        <div className={CN('fluid action input')}>
                            <input type="text" placeholder='search...'/>
                            <div className="action">
                                <div className={CN('button')}>button</div>
                            </div>
                        </div>
                        <br/>
                        <pre>
                            <code>
{`<div class="${NS} fluid action input">
    <input type="text" />
    <div class="action">
        <div class="${NS} button">button</div>
    </div>
</div>`}                                
                            </code>
                        </pre>
                        <div className={CN('fluid huge action input')}>
                            <div className="action">
                                <div className={CN('button')}>button</div>
                            </div>
                            <input type="text" placeholder='search...'/>
                        </div>
                        <br/>
                        <pre>
                            <code>
{`<div class="${NS} fluid action input">
    <div class="action">
        <div class="${NS} button">button</div>
    </div>
    <input type="text" />
</div>`}                                
                            </code>
                        </pre>
                    </li>
                    <li>
                        <h3>Icon input</h3>
                        <div className={CN('field')}>
                            <div className={CN('icon input')}>
                                <input type="text" placeholder="search..."/>
                                <i className={CN('icon')}>search</i>
                            </div>
                        </div>
                        <pre>
                            <code>
{`<div class="${NS} icon input">
    <input type="text" />
    <i class="${NS} icon">search</i>
</div>`}                                
                            </code>
                        </pre>
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
                        <pre>
                            <code>
{`<div class="${NS} icon left input">
    <i class="${NS} icon">search</i>
    <input type="text" />
</div>`}                                     
                            </code>
                        </pre>
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
