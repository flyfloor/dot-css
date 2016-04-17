import React, { Component } from 'react';
import {NS} from './setting';

export default class Button extends Component {
    render() {
        return (
            <div>
                <h2>
                    Button
                </h2>
                <ul>
                    <li>
                        <h3>A standard button</h3>
                        <button className={`${NS} button`}>button</button>
                    </li>
                    <li>
                        <h3>Button size</h3>
                        <button className={`${NS} tiny button`}>tiny</button>
                        <button className={`${NS} small button`}>small</button>
                        <button className={`${NS} button`}>normal</button>
                        <button className={`${NS} large button`}>large</button>
                        <button className={`${NS} huge button`}>huge</button>
                    </li>
                    <li>
                        <h3>Colored button</h3>
                        <button className={`${NS} red button`}>red</button>
                        <button className={`${NS} pink button`}>pink</button>
                        <button className={`${NS} purple button`}>purple</button>
                        <button className={`${NS} indigo button`}>indigo</button>
                        <button className={`${NS} cyan button`}>cyan</button>
                        <button className={`${NS} teal button`}>teal</button>
                        <button className={`${NS} green button`}>green</button>
                        <button className={`${NS} lime button`}>lime</button>
                        <button className={`${NS} amber button`}>amber</button>
                        <button className={`${NS} orange button`}>orange</button>
                        <button className={`${NS} brown button`}>brown</button>
                        <button className={`${NS} gray button`}>gray</button>
                        <button className={`${NS} bluegray button`}>bluegray</button>
                        <button className={`${NS} yellow button`}>yellow</button>
                        <button className={`${NS} black button`}>black</button>
                        <button className={`${NS} white button`}>white</button>
                    </li>
                </ul>
            </div>
        );
    }
}
