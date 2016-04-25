import React, { Component } from 'react';
import {CN} from './util';

export default class Checkbox extends Component {
    render() {
        return (
            <div>
                <h2>Checkbox</h2>
                <blockquote className={CN('blockquote')}>
                    <p>This contains checkbox and radio</p>
                </blockquote>
                <ul>
                    <li>
                        <h3>Checkbox</h3>
                        <div className={CN('checkbox')}>
                            <input type="checkbox" name="checkbox"/>
                            <label>checkbox</label>
                        </div>
                        <br/>
                    </li>
                    <li>
                        <h3>Radio</h3>
                        <div className={CN('radio')}>
                            <input type="radio" name="radio"/>
                            <label>radio</label>
                        </div>
                        <br/>
                    </li>
                    <li>
                        <h3>Disabled</h3>
                        <div className={CN('disabled radio')}>
                            <input type="radio" name="radio1"/>
                            <label>radio</label>
                        </div>
                        <br/>
                        <div className={CN('disabled checkbox')}>
                            <input type="checkbox" name="checkbox1"/>
                            <label>checkbox</label>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}
