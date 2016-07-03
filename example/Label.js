import React, { Component } from 'react';
import {CN, TitleBlock} from './util';
import {NS, COLORS} from './setting';

const makeSizeLabels = (cn='') => {
    return <div className={CN(`${cn} icon label`)}>
                <i className={CN('icon')}>person</i>
                {cn ? cn : 'label'}
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
                    {cn ? cn : 'label'}
                </div>
                <div className={CN('icon label')}>
                    {cn ? cn : 'label'}
                    <i className={CN('icon')}>close</i>
                </div>
                <div className={CN('round icon label')}>
                    <i className={CN('icon')}>fullscreen</i>
                    {cn ? cn : 'label'}
                </div>
            </div>;
}

export default class Label extends Component {
    render() {
        return (
            <div className="label-example">
                {TitleBlock('Label')}
                <ul>
                    <li>
                        <h3>Label</h3>
                        <div className={CN('field')}>
                            <div className={CN('label')}>
                                label
                            </div>
                            <pre>
                                <code>{`<div class="${NS} label">label</div>`}</code>
                            </pre>
                            <div className={CN('icon label')}>
                                label
                                <i className={CN('icon')}>close</i>
                            </div>
                            <pre>
                                <code>
{`<div class="${NS} label">
    label
    <i class="${NS} icon">close</i>
</div>`}                                    
                                </code>
                            </pre>
                            <div className={CN('icon label')}>
                                <i className={CN('icon')}>close</i>
                                label
                            </div>
                            <pre>
                                <code>
{`<div class="${NS} icon label">
    <i class="${NS} icon">close</i>
    label
</div>`}                                    
                                </code>
                            </pre>
                        </div>
                        <div className={CN('field')}>
                            <h4>Image label</h4>
                            <div className={CN('image label')}>
                                <img src="http://braavos.me/dot-css/dist/img/avatar.png" className={CN('image')} alt=""/>
                                label
                            </div>
                            <pre>
                                <code>
{`<div class="${NS} image label">
    <img src="" alt="" />
    label
</div>`}                                    
                                </code>
                            </pre>
                            <div className={CN('image label')}>
                                label
                                <img src="http://braavos.me/dot-css/dist/img/avatar.png" className={CN('image')} alt=""/>
                            </div>
                            <pre>
                                <code>
{`<div class="${NS} image label">
    label
    <img src="" alt="" />
</div>`}                                          
                                </code>
                            </pre>
                        </div>
                        <div className={CN('field')}>
                            <h4>Colored label</h4>
                            {colorLabels()}
                            <pre>
                                <code>{`<div class="${NS} red label">label</div>`}</code>
                                <br/>
                                <code>
{`<div class="${NS} icon red label">
    <i class="${NS} icon">photo_camera</i>
    label
</div>`}                                    
                                </code>
                            </pre>
                            <h4>Basic colored label</h4>
                            {colorLabels('basic')}
                            <pre>
                                <code>{`<div class="${NS} basic red label">label</div>`}</code>
                                <br/>
                                <code>
{`<div class="${NS} icon basic red label">
    <i class="${NS} icon">photo_camera</i>
    label
</div>`}                                    
                                </code>
                            </pre>
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
                            <pre>
                                <code>
{`<div class="${NS} circle label">
    <i class="${NS} icon">share</i>
</div>`}                                    
                                </code>
                            </pre>
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
                            <pre>
                                <code>
{`<div class="${NS} round icon label">
    <i class="${NS} icon">check</i>
    label
</div>`}                                    
                                </code>
                            </pre>
                        </div>
                        <h3>Label size</h3>
                        <div className={CN('field')}>
                            {makeSizeLabels('tiny')}
                            {makeSizeLabels('small')}
                            {makeSizeLabels('')}
                            {makeSizeLabels('large')}
                            {makeSizeLabels('huge')}
                        </div>
                        <pre>
                            <code>{`<div class="${NS} tiny label">label</div>`}</code>
                        </pre>
                        <h3>Label Group share same size</h3>
                        {makeLabelGroups('tiny')}
                        {makeLabelGroups('small')}
                        {makeLabelGroups()}
                        {makeLabelGroups('large')}
                        {makeLabelGroups('huge')}
                        <pre>
                            <code>
{`<div class="${NS} label-group">
    <div class="${NS} label">label</div>
    <div class="${NS} icon label">
        <i class="${NS} icon">check</i>
        label
    </div>
    <div class="${NS} label">label</div>
</div>`}                                
                            </code>
                        </pre>
                    </li>
                </ul>
            </div>
        );
    }
}
