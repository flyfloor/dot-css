import React, { Component } from 'react';
import {CN, TitleBlock} from './util';
import {NS} from './setting';

const makeForm = (cn = '') => {
    return (
        <div className={CN(`${cn} form`)}>
            <div className="field">
                <label htmlFor="">name:</label>
                <input type="text" className={CN('input')}/>
            </div>
            <div className="field">
                <label htmlFor="">sex:</label>
                <input type="text" className={CN('input')}/>
            </div>
            <div className="field">
                <label htmlFor="">first name:</label>
                <input type="text" className={CN('input')}/>
            </div>
            <div className="field">
                <label htmlFor="">address:</label>
                <input type="text" className={CN('input')}/>
            </div>
            <div className="field action">
                <button className={CN('button')}>提交</button>
            </div>
        </div>
    )
}

export default class Form extends Component {
    render() {
        return (
            <div>
                {TitleBlock('Form')}
                <ul>
                    <li>
                        <h4>Default form</h4>
                        {makeForm()}
                        <pre>
                            <code>
{`
<div class="${NS} form">
    <div class="field">
        <label>name:</label>
        <input type="text" class="${NS} input"/>
    </div>
    <div class="field">
        <label>sex:</label>
        <input type="text" class="${NS} input"/>
    </div>
    <div class="field">
        <label>first name:</label>
        <input type="text" class="${NS} input"/>
    </div>
    <div class="field">
        <label>address:</label>
        <input type="text" class="${NS} input"/>
    </div>
    <div class="field action">
        <button class="${NS} button">提交</button>
    </div>
</div>
`}                                
                            </code>
                        </pre>
                    </li>
                    <li>
                        <h4>Inline form</h4>
                        {makeForm('inline')}
                        <pre>
                            <code>
{`
<div class="${NS} inline form">
    <div class="field">
        <label>name:</label>
        <input type="text" class="${NS} input"/>
    </div>
    <div class="field">
        <label>sex:</label>
        <input type="text" class="${NS} input"/>
    </div>
    <div class="field">
        <label>first name:</label>
        <input type="text" class="${NS} input"/>
    </div>
    <div class="field">
        <label>address:</label>
        <input type="text" class="${NS} input"/>
    </div>
    <div class="field action">
        <button class="${NS} button">提交</button>
    </div>
</div>
`}                                    
                            </code>
                        </pre>
                    </li>
                    <li>
                        <h4>Trim form</h4>
                        {makeForm('inline trim')}
                        <pre>
                            <code>
{`
<div class="${NS} inline trim form">
    <div class="field">
        <label>name:</label>
        <input type="text" class="${NS} input"/>
    </div>
    <div class="field">
        <label>sex:</label>
        <input type="text" class="${NS} input"/>
    </div>
    <div class="field">
        <label>first name:</label>
        <input type="text" class="${NS} input"/>
    </div>
    <div class="field">
        <label>address:</label>
        <input type="text" class="${NS} input"/>
    </div>
    <div class="field action">
        <button class="${NS} button">提交</button>
    </div>
</div>
`}                                    
                            </code>
                        </pre>
                    </li>
                    <li>
                        <h4>Fluid form</h4>
                        {makeForm('fluid')}
                        <pre>
                            <code>
{`
<div class="${NS} fluid form">
    <div class="field">
        <label>name:</label>
        <input type="text" class="${NS} input"/>
    </div>
    <div class="field">
        <label>sex:</label>
        <input type="text" class="${NS} input"/>
    </div>
    <div class="field">
        <label>first name:</label>
        <input type="text" class="${NS} input"/>
    </div>
    <div class="field">
        <label>address:</label>
        <input type="text" class="${NS} input"/>
    </div>
    <div class="field action">
        <button class="${NS} button">提交</button>
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
