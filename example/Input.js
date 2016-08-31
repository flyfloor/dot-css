import React, { Component } from 'react';
import {CN, TitleBlock} from './util';
import {NS} from './setting';
const SIZE = ['tiny', 'small', '', 'large', 'huge'];

const makeInput = (cn='') => {
    return <div className="field">
                <input type="text" placeholder={cn ? cn : 'input...'} className={CN(`${cn} input`)}/>
            </div>;
};

const actionInputs =  () => {
    let node = [];
    for (var i = 0; i < SIZE.length; i++) {
        node.push(<div className="field" key={`${SIZE[i]}-action-button`}>
                    <div className={CN(`${SIZE[i]} input`)}>
                        <input type="text" placeholder='input...'/>
                        <div className="action">
                            <button>button</button>
                        </div>
                    </div>
                </div>);
    }

    return <div>{node}</div>;
};

export default class Input extends Component {
    render() {
        return (
            <div>
                {TitleBlock('Input')}
                <ul>
                    <li>
                        <h3>Default input</h3>
                        {makeInput()}
                        <pre>
                            <code>{`<input class="${NS} input"/>`}</code>
                        </pre>
                        <h4>Angled input</h4>
                        {makeInput('angled')}
                        <pre>
                            <code>
{`<input type="text" class="${NS} angled input"/>`}                                
                            </code>
                        </pre>
                        <h3>Default textarea</h3>
                        <textarea className={CN('input')} placeholder='type in something...'>
                        </textarea>
                        <pre>
                            <code>
{`<textarea name="" id="" class="${NS} input"></textarea>`}                                
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
{`<div class="${NS} input">
    <input type="text" />
    <button class="button">button</button>
</div>`}                         
                            </code>
                        </pre>
                        <h4>Round input</h4>
                        <div className={CN('input round')}>
                            <input type="text" placeholder='input...'/>
                            <div className="action">
                                <div className="button">button</div>
                            </div>
                        </div>
                        <br/>
                        <pre>
                            <code>
{`<div class="${NS} input round">
    <input type="text" />
    <div class="action">
        <div class="button">button</div>
    </div>
</div>`}                                
                            </code>
                        </pre>
                        <h4>Fluid action input</h4>
                        <div className={CN('fluid input')}>
                            <input type="text" placeholder='input...'/>
                            <div className="action">
                                <div className="button">button</div>
                            </div>
                        </div>
                        <br/>
                        <pre>
                            <code>
{`<div class="${NS} fluid input">
    <input type="text" />
    <div class="action">
        <div class="button">button</div>
    </div>
</div>`}                                
                            </code>
                        </pre>
                        <div className={CN('fluid huge input')}>
                            <div className="action">
                                <div className="button">button</div>
                            </div>
                            <input type="text" placeholder='input...'/>
                        </div>
                        <br/>
                        <pre>
                            <code>
{`<div class="${NS} fluid input">
    <div class="action">
        <div class="button">button</div>
    </div>
    <input type="text" />
</div>`}                                
                            </code>
                        </pre>
                    </li>
                    <li>
                        <h3>Icon input</h3>
                        <div className="field">
                            <div className={CN('input icon')}>
                                <input type="text" placeholder="input..."/>
                                <i className="icon">search</i>
                            </div>
                        </div>
                        <pre>
                            <code>
{`<div class="${NS} input icon">
    <input type="text" />
    <i class="icon">search</i>
</div>`}                                
                            </code>
                        </pre>
                        <div className="field">
                            <div className={CN('huge input icon')}>
                                <input type="text" placeholder="input..."/>
                                <i className="icon">search</i>
                            </div>
                        </div>
                        <pre>
                            <code>
{`<div class="${NS} huge input icon">
    <input type="text" />
    <i class="icon">search</i>
</div>`}                                           
                            </code>
                        </pre>
                        <div className="field">
                            <div className={CN('input icon')}>
                                <i className="icon">search</i>
                                <input type="text" placeholder="input..."/>
                            </div>
                        </div>
                        <pre>
                            <code>
{`<div class="${NS} input icon">
    <i class="icon">search</i>
    <input type="text" />
</div>`}                                     
                            </code>
                        </pre>
                        <div className="field">
                            <div className={CN('fluid input icon')}>
                                <input type="text" placeholder="input..."/>
                                <i className="icon">search</i>
                            </div>
                        </div>
                        <pre>
                            <code>
{`<div class="${NS} fluid input icon">
    <input type="text" />
    <i class="icon">search</i>
</div>`}                                           
                            </code>
                        </pre>
                    </li>
                </ul>
            </div>
        );
    }
}
