import React, { Component } from 'react';
import {CN, TitleBlock} from './util';
import {NS, COLORS} from './setting';

const makeSizeLabels = (cn='') => {
    return <div className={CN(`${cn} icon label`)}>
                <i className="icon">person</i>
                <span>{cn ? cn : 'label'}</span>
            </div>;
}

const colorLabels = (cn='') => {
    return <div className="field">
            {COLORS.map((color, index) => {
                return <div key={`${cn}-icon-${color}-label`} className={CN(`${cn} icon ${color} label`)}>
                            <i className="icon">photo_camera</i>
                            <span>{color}</span>
                        </div>;
            })}
        </div>
}

const makeLabelGroups = (cn='') => {
    return <div className={CN(`${cn} label-group`)}>
                <div className="label">
                    <span>{cn ? cn : 'label'}</span>
                </div>
                <div className={CN('icon label')}>
                    <span>{cn ? cn : 'label'}</span>
                    <i className="icon">close</i>
                </div>
                <div className={CN('round icon label')}>
                    <i className="icon">fullscreen</i>
                    <span>{cn ? cn : 'label'}</span>
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
                        <div className="field">
                            <div className={CN('label')}>
                                <span>label</span>
                            </div>
                            <pre>
                                <code>{`<div class="${NS} label">label</div>`}</code>
                            </pre>
                            <div className={CN('icon label')}>
                                <span>label</span>
                                <i className="icon">close</i>
                            </div>
                            <pre>
                                <code>
{`<div class="${NS} label">
    <span>label</span>
    <i class="icon">close</i>
</div>`}                                    
                                </code>
                            </pre>
                            <div className={CN('icon label')}>
                                <i className="icon">close</i>
                                <span>label</span>
                            </div>
                            <pre>
                                <code>
{`<div class="${NS} icon label">
    <i class="icon">close</i>
    <span>label</span>
</div>`}                                    
                                </code>
                            </pre>
                        </div>
                        <div className="field">
                            <h4>Image label</h4>
                            <div className={CN('image label')}>
                                <img src="http://braavos.me/dot-css/dist/img/avatar.png" className={CN('image')} alt=""/>
                                <span>label</span>
                            </div>
                            <pre>
                                <code>
{`<div class="${NS} image label">
    <img src="" alt="" />
    <span>label</span>
</div>`}                                    
                                </code>
                            </pre>
                            <div className={CN('image label')}>
                                <span>label</span>
                                <img src="http://braavos.me/dot-css/dist/img/avatar.png" className={CN('image')} alt=""/>
                            </div>
                            <pre>
                                <code>
{`<div class="${NS} image label">
    <span>label</span>
    <img src="" alt="" />
</div>`}                                          
                                </code>
                            </pre>
                        </div>
                        <div className="field">
                            <h4>Colored label</h4>
                            {colorLabels()}
                            <pre>
                                <code>{`<div class="${NS} red label">label</div>`}</code>
                                <br/>
                                <code>
{`<div class="${NS} icon red label">
    <i class="icon">photo_camera</i>
    <span>label</span>
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
    <i class="icon">photo_camera</i>
    <span>label</span>
</div>`}                                    
                                </code>
                            </pre>
                        </div>
                        <div className="field">
                            <h4>Circle label</h4>
                            <div className={CN('circle label')}>
                                <i className="icon">share</i>
                            </div>
                            <div className={CN('circle red label')}>
                                <i className="icon">close</i>
                            </div>
                            <div className={CN('circle green basic label')}>
                                <i className="icon">check</i>
                            </div>
                            <pre>
                                <code>
{`<div class="${NS} circle label">
    <i class="icon">share</i>
</div>`}                                    
                                </code>
                            </pre>
                        </div>
                        <div className="field">
                            <h4>Round label</h4>
                            <div className={CN('round icon label')}>
                                <i className="icon">share</i>
                                <span>share</span>
                            </div>
                            <div className={CN('round red icon label')}>
                                <span>close</span>
                                <i className="icon">close</i>
                            </div>
                            <div className={CN('round green basic icon label')}>
                                <i className="icon">check</i>
                                <span>check</span>
                            </div>
                            <pre>
                                <code>
{`<div class="${NS} round icon label">
    <i class="icon">check</i>
    <span>label</span>
</div>`}                                    
                                </code>
                            </pre>
                        </div>
                        <h3>Label size</h3>
                        <div className="field">
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
{`<div class="${NS} large label-group">
    <div class="label">label</div>
    <div class="icon label">
        <i class="icon">check</i>
        <span>label</span>
    </div>
    <div class="label">label</div>
</div>`}                                
                            </code>
                        </pre>
                    </li>
                </ul>
            </div>
        );
    }
}
