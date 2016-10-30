import React, { Component } from 'react';
import {CN, TitleBlock} from './util';
import {NS} from './setting';

const makeForm = (cn = '') => {
    if (cn.indexOf('inline') === -1) {
        return (
            <div className={CN(`${cn} form`)}>
                <div className="field">
                    <label className="label" placeholder="input name...">name:</label>
                    <input type="text"/>
                </div>
                <div className="field">
                    <label className="label">radio:</label>
                    <div className="fields-4">
                        <div className="field">
                            <label className={CN('checkbox')}>
                                <input type="checkbox" className="show"/>
                                <span>origin checkbox</span>
                            </label>
                        </div>
                        <div className="field">
                            <label className={CN('radio')}>
                                <input type="radio" className="show"/>
                                <span>origin radio</span>
                            </label>
                        </div>
                        <div className="field">
                            <label className={CN('checkbox')}>
                                <input type="checkbox"/>
                                <span>checkbox</span>
                            </label>
                        </div>
                        <div className="field">
                            <label className={CN('radio')}>
                                <input type="radio"/>
                                <span>radio</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <div className="fields-2">
                        <div className="field">
                            <label className="label">first name:</label>
                            <input type="text"/>
                        </div>
                        <div className="field">
                        <label className="label">last name:</label>
                            <input type="email"/>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <label className="label">mix:</label>
                    <div className="fields">
                        <div className="field-3">
                            <select name="" id="">
                                <option value="a">ember</option>
                                <option value="b">react</option>
                                <option value="c">angular</option>
                            </select>
                        </div>
                        <div className="field-6">
                            <input type="date"/>
                        </div>
                        <div className="field-1 text-center">
                            至
                        </div>
                        <div className="field-6">
                            <input type="datetime-local"/>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <label className="label">address:</label>
                    <textarea></textarea>
                </div>
                <div className="field action">
                    <button className={CN('button')}>提交</button>
                </div>
            </div>
        )
    }
    return (
        <div className={CN(`${cn} form`)}>
            <div className="field">
                <label className="label" placeholder="input name...">name:</label>
                <div className="field">
                    <input type="text"/>
                </div>
            </div>
            <div className="field">
                <label className="label">radio:</label>
                <div className="fields-4">
                    <div className="field">
                        <label className={CN('checkbox')}>
                            <input type="checkbox" className="show"/>
                            origin checkbox
                        </label>
                    </div>
                    <div className="field">
                        <label className={CN('radio')}>
                            <input type="radio" className="show"/>
                            origin radio
                        </label>
                    </div>
                    <div className="field">
                        <label className={CN('checkbox')}>
                            <input type="checkbox"/>
                            checkbox
                        </label>
                    </div>
                    <div className="field">
                        <label className={CN('radio')}>
                            <input type="radio"/>
                            radio
                        </label>
                    </div>
                </div>
            </div>
            <div className="field">
                <label className="label">career:</label>
                <div className="fields">
                    <div className="field">
                        <input type="text"/>
                    </div>
                    <div className="field">
                        <input type="email"/>
                    </div>
                    <div className="fields-2">
                        <div className="field">
                            <label className="label">company:</label>
                            <input type="text"/>
                        </div>
                        <div className="field">
                            <label className="label">year:</label>
                            <input type="number"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="field">
                <label className="label">mix:</label>
                <div className="fields">
                    <div className="field-3">
                        <select name="" id="">
                            <option value="a">ember</option>
                            <option value="b">react</option>
                            <option value="c">angular</option>
                        </select>
                    </div>
                    <div className="field-6">
                        <input type="date"/>
                    </div>
                    <div className="field-1 text-center">
                        至
                    </div>
                    <div className="field-6">
                        <input type="datetime-local"/>
                    </div>
                </div>
            </div>
            <div className="field">
                <label className="label">address:</label>
                <div className="field">
                    <textarea></textarea>
                </div>
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
{`<div class="${NS} form">
    <div class="field">
        <label class="label" placeholder="input name...">name:</label>
        <input type="text"/>
    </div>
    <div class="field">
        <label class="label">radio:</label>
        <div class="fields-4">
            <div class="field">
                <label class="${NS} checkbox">
                    <input type="checkbox" class="show"/>
                    origin checkbox
                </label>
            </div>
            <div class="field">
                <label class="${NS} radio">
                    <input type="radio" class="show"/>
                    origin radio
                </label>
            </div>
            <div class="field">
                <label class="${NS} checkbox">
                    <input type="checkbox"/>
                    checkbox
                </label>
            </div>
            <div class="field">
                <label class="${NS} radio">
                    <input type="radio"/>
                    radio
                </label>
            </div>
        </div>
    </div>
    <div class="field">
        <div class="fields-2">
            <div class="field">
                <label class="label">first name:</label>
                <input type="text"/>
            </div>
            <div class="field">
            <label class="label">last name:</label>
                <input type="email"/>
            </div>
        </div>
    </div>
    <div class="field">
        <label class="label">mix:</label>
        <div class="fields">
            <div class="field-3">
                <select name="" id="">
                    <option value="a">ember</option>
                    <option value="b">react</option>
                    <option value="c">angular</option>
                </select>
            </div>
            <div class="field-6">
                <input type="date"/>
            </div>
            <div class="field-1 text-center">
                至
            </div>
            <div class="field-6">
                <input type="datetime-local"/>
            </div>
        </div>
    </div>
    <div class="field">
        <label class="label">address:</label>
        <textarea></textarea>
    </div>
    <div class="field action">
        <button class="${NS} button">提交</button>
    </div>
</div>`}                                
                            </code>
                        </pre>
                    </li>
                    <li>
                        <h4>Inline form</h4>
                        {makeForm('inline')}
                        <pre>
                            <code>
{`<div className="${NS} inline form">
    <div className="field">
        <label className="label" placeholder="input name...">name:</label>
        <div className="field">
            <input type="text"/>
        </div>
    </div>
    <div className="field">
        <label className="label">radio:</label>
        <div className="fields-4">
            <div className="field">
                <label className="${NS} checkbox">
                    <input type="checkbox" className="show"/>
                    origin checkbox
                </label>
            </div>
            <div className="field">
                <label className="${NS} radio">
                    <input type="radio" className="show"/>
                    origin radio
                </label>
            </div>
            <div className="field">
                <label className="${NS} checkbox">
                    <input type="checkbox"/>
                    checkbox
                </label>
            </div>
            <div className="field">
                <label className="${NS} radio">
                    <input type="radio"/>
                    radio
                </label>
            </div>
        </div>
    </div>
    <div className="field">
        <label className="label">career:</label>
        <div className="fields">
            <div className="field">
                <input type="text"/>
            </div>
            <div className="field">
                <input type="email"/>
            </div>
            <div className="fields-2">
                <div className="field">
                    <label className="label">company:</label>
                    <input type="text"/>
                </div>
                <div className="field">
                    <label className="label">year:</label>
                    <input type="number"/>
                </div>
            </div>
        </div>
    </div>
    <div className="field">
        <label className="label">mix:</label>
        <div className="fields">
            <div className="field-3">
                <select name="" id="">
                    <option value="a">ember</option>
                    <option value="b">react</option>
                    <option value="c">angular</option>
                </select>
            </div>
            <div className="field-6">
                <input type="date"/>
            </div>
            <div className="field-1 text-center">
                至
            </div>
            <div className="field-6">
                <input type="datetime-local"/>
            </div>
        </div>
    </div>
    <div className="field">
        <label className="label">address:</label>
        <div className="field">
            <textarea></textarea>
        </div>
    </div>
    <div className="field action">
        <button className="${NS} button">提交</button>
    </div>
</div>`}                                    
                            </code>
                        </pre>
                    </li>
                    <li>
                        <h4>Trim form</h4>
                        {makeForm('inline trim')}
                        <pre>
                            <code>
{`<div className="${NS} inline trim form">
    <div className="field">
        <label className="label" placeholder="input name...">name:</label>
        <div className="field">
            <input type="text"/>
        </div>
    </div>
    <div className="field">
        <label className="label">radio:</label>
        <div className="fields-4">
            <div className="field">
                <label className="${NS} checkbox">
                    <input type="checkbox" className="show"/>
                    origin checkbox
                </label>
            </div>
            <div className="field">
                <label className="${NS} radio">
                    <input type="radio" className="show"/>
                    origin radio
                </label>
            </div>
            <div className="field">
                <label className="${NS} checkbox">
                    <input type="checkbox"/>
                    checkbox
                </label>
            </div>
            <div className="field">
                <label className="${NS} radio">
                    <input type="radio"/>
                    radio
                </label>
            </div>
        </div>
    </div>
    <div className="field">
        <label className="label">career:</label>
        <div className="fields">
            <div className="field">
                <input type="text"/>
            </div>
            <div className="field">
                <input type="email"/>
            </div>
            <div className="fields-2">
                <div className="field">
                    <label className="label">company:</label>
                    <input type="text"/>
                </div>
                <div className="field">
                    <label className="label">year:</label>
                    <input type="number"/>
                </div>
            </div>
        </div>
    </div>
    <div className="field">
        <label className="label">mix:</label>
        <div className="fields">
            <div className="field-3">
                <select name="" id="">
                    <option value="a">ember</option>
                    <option value="b">react</option>
                    <option value="c">angular</option>
                </select>
            </div>
            <div className="field-6">
                <input type="date"/>
            </div>
            <div className="field-1 text-center">
                至
            </div>
            <div className="field-6">
                <input type="datetime-local"/>
            </div>
        </div>
    </div>
    <div className="field">
        <label className="label">address:</label>
        <div className="field">
            <textarea></textarea>
        </div>
    </div>
    <div className="field action">
        <button className="${NS} button">提交</button>
    </div>
</div>`}                                    
                            </code>
                        </pre>
                    </li>
                </ul>
            </div>
        );
    }
}
