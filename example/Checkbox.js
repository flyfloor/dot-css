import React, { Component } from 'react';
import {CN, TitleBlock} from './util';
import {NS} from './setting';

export default class Checkbox extends Component {
    render() {
        return (
            <div>
                {TitleBlock('Checkbox')}
                <ul>
                    <li>
                        <h3>Checkbox</h3>
                        <div className={CN('checkbox')}>
                            <input type="checkbox" name="checkbox"/>
                            <span>checkbox</span>
                        </div>
                        <br/>
                        <pre>
                            <code>
{`<div className="${NS} checkbox">
    <input type="checkbox" name="checkbox"/>
    <span>checkbox</span>
</div>`}                                
                            </code>
                        </pre>
                    </li>
                    <li>
                        <h3>Radio</h3>
                        <div className={CN('radio')}>
                            <input type="radio" name="radio"/>
                            <span>radio</span>
                        </div>
                        <br/>
                        <pre>
                            <code>
{`<div className="${NS} radio">
    <input type="radio" name="radio"/>
    <span>radio</span>
</div>`}                                    
                            </code>
                        </pre>
                    </li>
                    <li>
                        <h3>Disabled</h3>
                        <div className={CN('disabled radio')}>
                            <input type="radio" name="radio1"/>
                            <span>radio</span>
                        </div>
                        <br/>
                        <div className={CN('disabled checkbox')}>
                            <input type="checkbox" name="checkbox1"/>
                            <span>checkbox</span>
                        </div>
                        <pre>
                            <code>
{`<div className="${NS} disabled checkbox">
    <input type="checkbox" name="checkbox"/>
    <span>checkbox</span>
</div>`}                                    
                            </code>
                        </pre>
                    </li>
                    <li>
                        <h3>original checkbox or label</h3>
                        <label className="dot checkbox">
                            <input type="checkbox" className="original"/>
                            <span>checkbox</span>
                        </label>
                        <label className="dot radio">
                            <input type="radio" className="original"/>
                            <span>radio</span>
                        </label>
                        <pre>
                            <code>
{`<label class="${NS} radio">
    <input type="radio" class="original"/>
    <span>radio</span>
</label>
<label class="${NS} checkbox">
    <input type="checkbox" class="original"/>
    <span>radio</span>
</label>`}                                
                            </code>
                        </pre>
                    </li>
                </ul>
            </div>
        );
    }
}
