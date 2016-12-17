import React, { Component } from 'react';
import {CN, TitleBlock} from './util';
import {NS} from './setting';

const makeForm = (cn = '') => {
    return (
        <div className={CN(`${cn} form`)}>
            <div className="group">
                <label placeholder="input name...">name:</label>
                <div className="field">
                    <input type="text"/>
                </div>
            </div>
            <div className="group">
                <label>radio:</label>
                <div className="fields-4">
                    <div className="field">
                        <label className={CN('checkbox')}>
                            <input type="checkbox" className="original"/>
                            <span>origin checkbox</span>
                        </label>
                    </div>
                    <div className="field">
                        <label className={CN('radio')}>
                            <input type="radio" className="original"/>
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
            <div className="group">
                <label htmlFor="">inline:</label>
                <div className="inline field">
                    <label className={CN('checkbox')}>
                        <input type="checkbox" className="original"/>
                        <span>origin checkbox</span>
                    </label>
                    <label className={CN('radio')}>
                        <input type="radio" className="original"/>
                        <span>origin radio</span>
                    </label>
                    <label className={CN('checkbox')}>
                        <input type="checkbox"/>
                        <span>checkbox</span>
                    </label>
                    <label className={CN('radio')}>
                        <input type="radio"/>
                        <span>radio</span>
                    </label>
                    <div className="dot icon input">
                        <input type="text"/>
                        <i className="icon">send</i>
                    </div>
                </div>
            </div>
            <div className="group">
                <label>inline field:</label>
                <div className="inline field">
                    <select>
                        <option value="ember">ember</option>
                        <option value="react">react</option>
                        <option value="vue">vue</option>
                    </select>
                    min:
                    <input type="number"/>
                    max:
                    <input type="number"/>
                    step:
                    <input type="number" className="mini"/>
                    <button className="dot button">save</button>
                </div>
            </div>
            <div className="group">
                <div className="fields-2">
                    <div className="field">
                        <label>first name:</label>
                        <input type="text"/>
                    </div>
                    <div className="field">
                    <label>last name:</label>
                        <div className="dot fluid icon input">
                            <input type="email"/>
                            <i className="icon">email</i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="group">
                <label htmlFor="">fields-3:</label>
                <div className="fields-3">
                    <div className="field">
                        <input type="text"/>
                    </div>
                    <div className="field">
                        <input type="text"/>
                    </div>
                    <div className="field">
                        <input type="text"/>
                    </div>
                </div>
            </div>
            <div className="group">
                <label>mix:</label>
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
                <div className="inline field">
                    <label htmlFor="">inline:</label>
                    <select name="" id="">
                        <option value="a">ember</option>
                        <option value="b">react</option>
                        <option value="c">angular</option>
                    </select>
                    <input type="url"/>
                    <span>至</span>
                    <div className="dot icon input">
                        <input type="url"/>
                        <i className="icon">security</i>
                    </div>
                </div>
            </div>
            <div className="group">
                <label>address:</label>
                <div className="field">
                    <textarea></textarea>
                </div>
            </div>
            <div className="group">
                <label htmlFor="">search:</label>
                <div className="fields-2">
                    <div className="field">
                        <div className="dot fluid input">
                            <input type="text"/>
                            <div className="action">
                                <button>Go</button>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <div className="dot round fluid input">
                            <input type="email"/>
                            <div className="action">
                                <button>email</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="group">
                <label htmlFor="">label:</label>
                <div className="field">
                    <div className="dot icon label">
                        <span>close</span>
                        <i className="icon">close</i>
                    </div>
                    <div className="dot button-group">
                        <input type="button" className="yellow button" value="button"/>
                        <div className="dot labeled green button">
                            <i className="icon">photo</i>
                        </div>
                        <div className="dot icon blue button">
                            <i className="icon">phone</i>
                            button
                        </div>
                    </div>
                </div>
            </div>
            <div className="group action">
                <button className={CN('button')}>submit</button>
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
    <div class="group">
        <label placeholder="input name...">name:</label>
        <div class="field">
            <input type="text"/>
        </div>
    </div>
    <div class="group">
        <label>radio:</label>
        <div class="fields-4">
            <div class="field">
                <label class="${NS} checkbox">
                    <input type="checkbox" class="original"/>
                    <span>origin checkbox</span>
                </label>
            </div>
            <div class="field">
                <label class="${NS} radio">
                    <input type="radio" class="original"/>
                    <span>origin radio</span>
                </label>
            </div>
            <div class="field">
                <label class="${NS} checkbox">
                    <input type="checkbox"/>
                    <span>checkbox</span>
                </label>
            </div>
            <div class="field">
                <label class="${NS} radio">
                    <input type="radio"/>
                    <span>radio</span>
                </label>
            </div>
        </div>
    </div>
    <div class="group">
        <label htmlFor="">inline:</label>
        <div class="inline field">
            <label class="${NS} checkbox">
                <input type="checkbox" class="original"/>
                <span>origin checkbox</span>
            </label>
            <label class="${NS} radio">
                <input type="radio" class="original"/>
                <span>origin radio</span>
            </label>
            <label class="${NS} checkbox">
                <input type="checkbox"/>
                <span>checkbox</span>
            </label>
            <label class="${NS} radio">
                <input type="radio"/>
                <span>radio</span>
            </label>
            <div class="dot icon input">
                <input type="text"/>
                <i class="icon">send</i>
            </div>
        </div>
    </div>
    <div class="group">
        <label>inline field:</label>
        <div class="inline field">
            <select>
                <option value="ember">ember</option>
                <option value="react">react</option>
                <option value="vue">vue</option>
            </select>
            min:
            <input type="number"/>
            max:
            <input type="number"/>
            step:
            <input type="number" class="mini"/>
            <button class="dot button">save</button>
        </div>
    </div>
    <div class="group">
        <div class="fields-2">
            <div class="field">
                <label>first name:</label>
                <input type="text"/>
            </div>
            <div class="field">
            <label>last name:</label>
                <div class="dot fluid icon input">
                    <input type="email"/>
                    <i class="icon">email</i>
                </div>
            </div>
        </div>
    </div>
    <div class="group">
        <label>mix:</label>
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
        <div class="inline field">
            <label htmlFor="">inline:</label>
            <select name="" id="">
                <option value="a">ember</option>
                <option value="b">react</option>
                <option value="c">angular</option>
            </select>
            <input type="url"/>
            <span>至</span>
            <div class="dot icon input">
                <input type="url"/>
                <i class="icon">security</i>
            </div>
        </div>
    </div>
    <div class="group">
        <label>address:</label>
        <div class="field">
            <textarea></textarea>
        </div>
    </div>
    <div class="group">
        <label htmlFor="">search:</label>
        <div class="fields-2">
            <div class="field">
                <div class="dot fluid input">
                    <input type="text"/>
                    <div class="action">
                        <button>Go</button>
                    </div>
                </div>
            </div>
            <div class="field">
                <div class="dot round fluid input">
                    <input type="email"/>
                    <div class="action">
                        <button>email</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="group">
        <label htmlFor="">label:</label>
        <div class="field">
            <div class="dot icon label">
                <span>close</span>
                <i class="icon">close</i>
            </div>
            <div class="dot button-group">
                <input type="button" class="yellow button" value="button"/>
                <div class="dot labeled green button">
                    <i class="icon">photo</i>
                </div>
                <div class="dot icon blue button">
                    <i class="icon">phone</i>
                    button
                </div>
            </div>
        </div>
    </div>
    <div class="group action">
        <button class="${NS} button">submit</button>
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
{`<div class="${NS} inline form">
    <div class="group">
        <label placeholder="input name...">name:</label>
        <div class="field">
            <input type="text"/>
        </div>
    </div>
    <div class="group">
        <label>radio:</label>
        <div class="fields-4">
            <div class="field">
                <label class="${NS} checkbox">
                    <input type="checkbox" class="original"/>
                    <span>origin checkbox</span>
                </label>
            </div>
            <div class="field">
                <label class="${NS} radio">
                    <input type="radio" class="original"/>
                    <span>origin radio</span>
                </label>
            </div>
            <div class="field">
                <label class="${NS} checkbox">
                    <input type="checkbox"/>
                    <span>checkbox</span>
                </label>
            </div>
            <div class="field">
                <label class="${NS} radio">
                    <input type="radio"/>
                    <span>radio</span>
                </label>
            </div>
        </div>
    </div>
    <div class="group">
        <label htmlFor="">inline:</label>
        <div class="inline field">
            <label class="${NS} checkbox">
                <input type="checkbox" class="original"/>
                <span>origin checkbox</span>
            </label>
            <label class="${NS} radio">
                <input type="radio" class="original"/>
                <span>origin radio</span>
            </label>
            <label class="${NS} checkbox">
                <input type="checkbox"/>
                <span>checkbox</span>
            </label>
            <label class="${NS} radio">
                <input type="radio"/>
                <span>radio</span>
            </label>
            <div class="dot icon input">
                <input type="text"/>
                <i class="icon">send</i>
            </div>
        </div>
    </div>
    <div class="group">
        <label>inline field:</label>
        <div class="inline field">
            <select>
                <option value="ember">ember</option>
                <option value="react">react</option>
                <option value="vue">vue</option>
            </select>
            min:
            <input type="number"/>
            max:
            <input type="number"/>
            step:
            <input type="number" class="mini"/>
            <button class="dot button">save</button>
        </div>
    </div>
    <div class="group">
        <div class="fields-2">
            <div class="field">
                <label>first name:</label>
                <input type="text"/>
            </div>
            <div class="field">
            <label>last name:</label>
                <div class="dot fluid icon input">
                    <input type="email"/>
                    <i class="icon">email</i>
                </div>
            </div>
        </div>
    </div>
    <div class="group">
        <label>mix:</label>
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
        <div class="inline field">
            <label htmlFor="">inline:</label>
            <select name="" id="">
                <option value="a">ember</option>
                <option value="b">react</option>
                <option value="c">angular</option>
            </select>
            <input type="url"/>
            <span>至</span>
            <div class="dot icon input">
                <input type="url"/>
                <i class="icon">security</i>
            </div>
        </div>
    </div>
    <div class="group">
        <label>address:</label>
        <div class="field">
            <textarea></textarea>
        </div>
    </div>
    <div class="group">
        <label htmlFor="">search:</label>
        <div class="fields-2">
            <div class="field">
                <div class="dot fluid input">
                    <input type="text"/>
                    <div class="action">
                        <button>Go</button>
                    </div>
                </div>
            </div>
            <div class="field">
                <div class="dot round fluid input">
                    <input type="email"/>
                    <div class="action">
                        <button>email</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="group">
        <label htmlFor="">label:</label>
        <div class="field">
            <div class="dot icon label">
                <span>close</span>
                <i class="icon">close</i>
            </div>
            <div class="dot button-group">
                <input type="button" class="yellow button" value="button"/>
                <div class="dot labeled green button">
                    <i class="icon">photo</i>
                </div>
                <div class="dot icon blue button">
                    <i class="icon">phone</i>
                    button
                </div>
            </div>
        </div>
    </div>
    <div class="group action">
        <button class="${NS} button">submit</button>
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
{`<div class="${NS} inline trim form">
    <div class="group">
        <label placeholder="input name...">name:</label>
        <div class="field">
            <input type="text"/>
        </div>
    </div>
    <div class="group">
        <label>radio:</label>
        <div class="fields-4">
            <div class="field">
                <label class="${NS} checkbox">
                    <input type="checkbox" class="original"/>
                    <span>origin checkbox</span>
                </label>
            </div>
            <div class="field">
                <label class="${NS} radio">
                    <input type="radio" class="original"/>
                    <span>origin radio</span>
                </label>
            </div>
            <div class="field">
                <label class="${NS} checkbox">
                    <input type="checkbox"/>
                    <span>checkbox</span>
                </label>
            </div>
            <div class="field">
                <label class="${NS} radio">
                    <input type="radio"/>
                    <span>radio</span>
                </label>
            </div>
        </div>
    </div>
    <div class="group">
        <label htmlFor="">inline:</label>
        <div class="inline field">
            <label class="${NS} checkbox">
                <input type="checkbox" class="original"/>
                <span>origin checkbox</span>
            </label>
            <label class="${NS} radio">
                <input type="radio" class="original"/>
                <span>origin radio</span>
            </label>
            <label class="${NS} checkbox">
                <input type="checkbox"/>
                <span>checkbox</span>
            </label>
            <label class="${NS} radio">
                <input type="radio"/>
                <span>radio</span>
            </label>
            <div class="dot icon input">
                <input type="text"/>
                <i class="icon">send</i>
            </div>
        </div>
    </div>
    <div class="group">
        <label>inline field:</label>
        <div class="inline field">
            <select>
                <option value="ember">ember</option>
                <option value="react">react</option>
                <option value="vue">vue</option>
            </select>
            min:
            <input type="number"/>
            max:
            <input type="number"/>
            step:
            <input type="number" class="mini"/>
            <button class="dot button">save</button>
        </div>
    </div>
    <div class="group">
        <div class="fields-2">
            <div class="field">
                <label>first name:</label>
                <input type="text"/>
            </div>
            <div class="field">
            <label>last name:</label>
                <div class="dot fluid icon input">
                    <input type="email"/>
                    <i class="icon">email</i>
                </div>
            </div>
        </div>
    </div>
    <div class="group">
        <label>mix:</label>
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
        <div class="inline field">
            <label htmlFor="">inline:</label>
            <select name="" id="">
                <option value="a">ember</option>
                <option value="b">react</option>
                <option value="c">angular</option>
            </select>
            <input type="url"/>
            <span>至</span>
            <div class="dot icon input">
                <input type="url"/>
                <i class="icon">security</i>
            </div>
        </div>
    </div>
    <div class="group">
        <label>address:</label>
        <div class="field">
            <textarea></textarea>
        </div>
    </div>
    <div class="group">
        <label htmlFor="">search:</label>
        <div class="fields-2">
            <div class="field">
                <div class="dot fluid input">
                    <input type="text"/>
                    <div class="action">
                        <button>Go</button>
                    </div>
                </div>
            </div>
            <div class="field">
                <div class="dot round fluid input">
                    <input type="email"/>
                    <div class="action">
                        <button>email</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="group">
        <label htmlFor="">label:</label>
        <div class="field">
            <div class="dot icon label">
                <span>close</span>
                <i class="icon">close</i>
            </div>
            <div class="dot button-group">
                <input type="button" class="yellow button" value="button"/>
                <div class="dot labeled green button">
                    <i class="icon">photo</i>
                </div>
                <div class="dot icon blue button">
                    <i class="icon">phone</i>
                    button
                </div>
            </div>
        </div>
    </div>
    <div class="group action">
        <button class="${NS} button">submit</button>
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
