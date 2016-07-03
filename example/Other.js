import React, { Component } from 'react';
import {CN} from './util';
import {NS} from './setting';

export default class Other extends Component {
    render() {
        return (
            <div>
                <h2>Other</h2>
                <blockquote className={CN('blockquote')}>
                    <p>This part is about MISC stuff</p>
                </blockquote>
                <ul>
                    <li>
                        <h3>Responsive fixed img(fixed resolution)</h3>
                        <ul className={CN('grid grid-3')}>
                            <li className={CN('column padding')}>
                                <div className={CN('figure')}>
                                    <img src="https://drscdn.500px.org/photo/138174521/m%3D2048_k%3D1/8d3c34a9316137bfe2150895bda42da1"/>
                                </div>
                            </li>
                            <li className={CN('column padding')}>
                                <div className={CN('figure')}>
                                    <img src="https://drscdn.500px.org/photo/138174521/m%3D2048_k%3D1/8d3c34a9316137bfe2150895bda42da1"/>
                                </div>
                            </li>
                            <li className={CN('column padding')}>
                                <div className={CN('figure')}>
                                    <img src="https://drscdn.500px.org/photo/138174521/m%3D2048_k%3D1/8d3c34a9316137bfe2150895bda42da1"/>
                                </div>
                            </li>
                        </ul>
                        <pre>
                            <code>
{`<div class="${NS} figure">
    <img src="" alt="" />
</div>`}                                
                            </code>
                        </pre>
                        <h4>Other resolutions</h4>
                        <ul className={CN('grid grid-3')}>
                            <li className={CN('column padding')}>
                                <div className={CN('figure figure:2x1')}>
                                    <img src="http://braavos.me/dot-css/dist/img/img.png"/>
                                </div>
                            </li>
                            <li className={CN('column padding')}>
                                <div className={CN('figure figure:2x1')}>
                                    <img src="http://braavos.me/dot-css/dist/img/img.png"/>
                                </div>
                            </li>
                            <li className={CN('column padding')}>
                                <div className={CN('figure figure:2x1')}>
                                    <img src="http://braavos.me/dot-css/dist/img/img.png"/>
                                </div>
                            </li>
                        </ul>
                        <pre>
                            <code>
{`
<div class="${NS} figure figure:2x1">
    <img src="" alt="" />
</div>
`}                                
                            </code>
                        </pre>
                        <div className={CN('info message')}>
                            <div className="content">
                                <h3>resolution:</h3>
                                <br/>
                                <div className={CN('small table')}>
                                    <div className="row">
                                        <div className="cell">figure:1x1</div>
                                        <div className="cell">figure:1x2</div>
                                        <div className="cell">figure:1x3</div>
                                        <div className="cell">figure:2x1</div>
                                        <div className="cell">figure:2x3</div>
                                        <div className="cell">figure:3x2</div>
                                        <div className="cell">figure:3x4</div>
                                    </div>
                                    <div className="row">
                                        <div className="cell">figure:1x3</div>
                                        <div className="cell">figure:5x2</div>
                                        <div className="cell">figure:5x3</div>
                                        <div className="cell">figure:6x5</div>
                                        <div className="cell">figure:9x16</div>
                                        <div className="cell">figure:16x9</div>
                                        <div className="cell">figure:16x10</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}
