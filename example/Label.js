import React, { Component } from 'react';
import {CN} from './util';
import {COLORS} from './setting';

const makeSizeLabels = (cn='') => {
    return <div className={CN(`${cn} icon label`)}>
                <i className={CN('icon')}>person</i>
                label
            </div>;
}

const colorLabels = (cn='') => {
    return <div className={CN('field')}>
            {COLORS.map((color, index) => {
                return <div key={`${cn}-icon-${color}-label`} className={CN(`${cn} icon ${color} label`)}>
                            <i className={CN('icon')}>photo_camera</i>
                            {color}
                        </div>;
            })}
        </div>
}

export default class Label extends Component {
    render() {
        return (
            <div className="label-example">
                <h2>Label</h2>
                <blockquote>
                    <p>This part is about Label</p>
                </blockquote>
                <ul>
                    <li>
                        <h3>Label</h3>
                        <div className={CN('field')}>
                            <h4>Default Label</h4>
                            <div className={CN('label')}>
                                label
                            </div>
                            <div className={CN('icon label')}>
                                user
                                <i className={CN('icon')}>close</i>
                            </div>
                            <div className={CN('icon label')}>
                                <i className={CN('icon')}>close</i>
                                user
                            </div>
                        </div>
                        <div className={CN('field')}>
                            <h4>Image label</h4>
                            <div className={CN('image label')}>
                                <img src="img/thumb.png" alt=""/>
                                user
                            </div>
                            <div className={CN('image label')}>
                                <i className={CN('icon')}>close</i>
                                user
                            </div>
                        </div>
                        <div className={CN('field')}>
                            <h4>Colored label</h4>
                            {colorLabels()}
                            <h4>Basic colored label</h4>
                            {colorLabels('basic')}
                        </div>
                        <h3>Label size</h3>
                        <div className={CN('field')}>
                            {makeSizeLabels('tiny')}
                            {makeSizeLabels('small')}
                            {makeSizeLabels('')}
                            {makeSizeLabels('large')}
                            {makeSizeLabels('huge')}
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}
