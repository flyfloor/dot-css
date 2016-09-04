import React, { Component } from 'react';
import {CN, TitleBlock} from './util';
import {NS} from './setting';

export default class Tab extends Component {
    render() {
        return (
            <div>
                {TitleBlock('Tab')}
                <ul>
                    <li>
                        <h4>Default Tab</h4>
                        <div className={CN('tab')}>
                            <div className="item active">tab 1</div>
                            <div className="item">tab 2</div>
                            <div className="item">tab 3</div>
                        </div>
                        <div className="dot module">
                            <h3>This is content</h3>
                        </div>
                    </li>
                    <li>
                        <h4>Section tab</h4>
                        <div className={CN('section tab')}>
                            <div className="item active">tab 1</div>
                            <div className="item">tab 2</div>
                            <div className="item">tab 3</div>
                        </div>
                        <div className="dot module">
                            <h3>This is content</h3>
                        </div>
                    </li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        );
    }
}
