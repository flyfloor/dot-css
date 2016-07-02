import React, { Component } from 'react';
import {CN} from './util';
import {SHAPE_SIZE} from './setting';

const makeCrumbList = (cn='') => {
    return (
        <ul>
            {SHAPE_SIZE.map(size => {
                return <li key={`${size}${cn}_crumb`}>
                            <div className={CN(`${size} ${cn} crumb`)}>
                                <a href="#" className="section">home</a>
                                <a href="#" className="section">blog</a>
                                <span className="section">last year</span>
                            </div>
                            <br/>
                        </li>
            })}
        </ul>
    )
}

export default class Crumb extends Component {
    render() {
        return (
            <div>
                <h2>Crumb</h2>
                <blockquote className={CN('blockquote')}>
                    <p>Content about Crumb</p>
                </blockquote>
                <ul>
                    <li>
                        {makeCrumbList()}
                        <h4>Slashed crumb</h4>
                        <br/>
                        {makeCrumbList('slash')}
                    </li>
                </ul>
            </div>
        );
    }
}
