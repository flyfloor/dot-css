import React, { Component } from 'react';
import {CN} from './util';

export default class Progress extends Component {
    render() {
        return (
            <div>
                <h2>Progress</h2>
                <blockquote className={CN('blockquote')}>
                    <p>Content about Progress</p>
                </blockquote>
                <ul>
                    <li>
                        <h4>Status Progress</h4>
                        <div className={CN('progress')}>
                            <div className="bar" style={{width: '20%'}}>
                            </div>
                        </div>
                        <div className={CN('success progress')}>
                            <div className="bar" style={{width: '100%'}}>
                            </div>
                        </div>
                        <div className={CN('error progress')}>
                            <div className="bar" style={{width: '30%'}}>
                            </div>
                        </div>
                        <div className={CN('warning progress')}>
                            <div className="bar" style={{width: '30%'}}>
                            </div>
                        </div>
                        <h4>Progress Size</h4>
                        <h5>small</h5>
                        <div className={CN('small progress')}>
                            <div className="bar" style={{'width': '30%'}}>
                            </div>
                        </div>
                        <h5>default</h5>
                        <div className={CN('progress')}>
                            <div className="bar" style={{'width': '30%'}}>
                            </div>
                        </div>
                        <h5>large</h5>
                        <div className={CN('large progress')}>
                            <div className="bar" style={{'width': '30%'}}>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}
