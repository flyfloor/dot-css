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

const makeLabelGroups = (cn='') => {
    return <div className={CN(`${cn} label-group`)}>
            <div className={CN('label')}>
                label
            </div>
            <div className={CN('icon label')}>
                label
                <i className={CN('icon')}>close</i>
            </div>
            <div className={CN('round icon label')}>
                <i className={CN('icon')}>fullscreen</i>
                label
            </div>
        </div>;
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
                            <div className={CN('label')}>
                                label
                            </div>
                            <div className={CN('icon label')}>
                                label
                                <i className={CN('icon')}>close</i>
                            </div>
                            <div className={CN('icon label')}>
                                <i className={CN('icon')}>close</i>
                                label
                            </div>
                        </div>
                        <div className={CN('field')}>
                            <h4>Image label</h4>
                            <div className={CN('image label')}>
                                <img src="img/avatar.png" className={CN('image')} alt=""/>
                                label
                            </div>
                            <div className={CN('image label')}>
                                label
                                <img src="img/avatar.png" className={CN('image')} alt=""/>
                            </div>
                        </div>
                        <div className={CN('field')}>
                            <h4>Colored label</h4>
                            {colorLabels()}
                            <h4>Basic colored label</h4>
                            {colorLabels('basic')}
                        </div>
                        <div className={CN('field')}>
                            <h4>Circle label</h4>
                            <div className={CN('circle label')}>
                                <i className={CN('icon')}>share</i>
                            </div>
                            <div className={CN('circle red label')}>
                                <i className={CN('icon')}>close</i>
                            </div>
                            <div className={CN('circle green basic label')}>
                                <i className={CN('icon')}>check</i>
                            </div>
                        </div>
                        <div className={CN('field')}>
                            <h4>Round label</h4>
                            <div className={CN('round icon label')}>
                                <i className={CN('icon')}>share</i>
                                share
                            </div>
                            <div className={CN('round red icon label')}>
                                close
                                <i className={CN('icon')}>close</i>
                            </div>
                            <div className={CN('round green basic icon label')}>
                                <i className={CN('icon')}>check</i>
                                check
                            </div>
                        </div>
                        <h3>Label size</h3>
                        <div className={CN('field')}>
                            {makeSizeLabels('tiny')}
                            {makeSizeLabels('small')}
                            {makeSizeLabels('')}
                            {makeSizeLabels('large')}
                            {makeSizeLabels('huge')}
                        </div>
                        <h3>Label Group share same size</h3>
                        {makeLabelGroups('tiny')}
                        {makeLabelGroups('small')}
                        {makeLabelGroups()}
                        {makeLabelGroups('large')}
                        {makeLabelGroups('huge')}
                    </li>
                </ul>
            </div>
        );
    }
}
