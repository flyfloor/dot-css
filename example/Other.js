import React, { Component } from 'react';
import {CN} from './util';

export default class Other extends Component {
    render() {
        return (
            <div>
                <h2>Other</h2>
                <blockquote>
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
                    </li>
                </ul>
            </div>
        );
    }
}
