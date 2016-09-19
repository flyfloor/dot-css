import React, { Component } from 'react';
import {CN, TitleBlock} from './util';
import {NS, COLORS} from './setting';

const labelBtnGroup = (cn='') => {
    return (
        <div className="field">
            <div className={CN(`${cn} button-group`)}>
                <div className={CN('labeled button')}>
                    <i className="icon">photo_camera</i>
                </div>
                <div className={CN('labeled button')}>
                    <i className="icon">extension</i>
                </div>
                <div className={CN('button')}>normal button</div>
                <div className={CN('labeled button')}>
                    <i className="icon">layers</i>
                </div>
            </div>
            <br/>
        </div>
    )
};

const colorBtns = (cn='') => {
    return <div>
                {COLORS.map(color => {
                    return <button key={`${cn}-${color}-button`} className={CN(`${cn} ${color} button`)}>
                                {color}
                            </button>;
                })}
            </div>;
}

export default class Button extends Component {
    render() {
        return (
            <div className="button-example">
                {TitleBlock('Button')}
                <ul>
                    <li>
                        <h3>Button</h3>
                        <button className={CN('button')}>button</button>
                        <pre>
                            <code>{`<button class="${NS} button">button</button>`}</code>
                        </pre>
                        <h4>Right angled button</h4>
                        <button className={CN('angled button')}>angled button</button>
                        <pre>
                            <code>{`<button class="${NS} angled button">button</button>`}</code>
                        </pre>
                        <h4>Colored button</h4>
                        {colorBtns()}
                        <pre>
                            <code>{`<button class="${NS} red">button</button>`}</code>
                        </pre>
                        <h4>Basic button</h4>
                        {colorBtns('basic')}
                        <pre>
                            <code>{`<button class="${NS} basic red button">button</button>`}</code>
                        </pre>
                        <h4>Icon button</h4>
                        <div>
                            <button className={CN('button tiny icon')}>
                                <i className="icon">refresh</i>
                                refresh
                            </button>
                            <button className={CN('button small icon')}>
                                <i className="icon">star</i>
                                star
                            </button>
                            <button className={CN('button icon')}>
                                <i className="icon">home</i>
                                home
                            </button>
                            <button className={CN('button large icon')}>
                                <i className="icon">contact_mail</i>
                                mail
                            </button>
                            <button className={CN('button huge icon')}>
                                <i className="icon">group</i>
                                group
                            </button>
                            <button className={CN('button red icon')}>
                                <i className="icon">watch</i>
                                watch
                            </button>
                            <button className={CN('button basic amber icon')}>
                                <i className="icon">keyboard</i>
                                keyboard
                            </button>
                        </div>
                        <pre>
                            <code>
{`<div class="${NS} icon button">
    <i class="icon">star</i>
    star
</div>
`}                                
                            </code>
                        </pre>
                        <h4>Fluid button</h4>
                        <div>
                            <button className={CN('fluid button')}>fluid button</button>
                        </div>
                        <pre>
                            <code>{`<div class="${NS} fluid button">fluid</div>`}</code>
                        </pre>
                        <h4>Circle button</h4>
                        <div>
                            <div className={CN('circle tiny button')}>
                                <i className="icon">apps</i>
                            </div>
                            <div className={CN('circle small button')}>
                                <i className="icon">share</i>
                            </div>
                            <div className={CN('circle button')}>
                                <i className="icon">clear</i>
                            </div>
                            <div className={CN('circle large button')}>
                                <i className="icon">reply</i>
                            </div>
                            <div className={CN('circle huge button')}>
                                <i className="icon">plus_one</i>
                            </div>
                            <div className={CN('circle green button')}>
                                <i className="icon">arrow_back</i>
                            </div>
                            <div className={CN('circle basic blue button')}>
                                <i className="icon">more_vert</i>
                            </div>
                        </div>
                        <pre>
                            <code>
{`<div class="${NS} circle button">
    <i class="icon">apps</i>
</div>
`}                                
                            </code>
                        </pre>
                        <h4>Round button</h4>
                        <div className={CN('round button')}>
                            button
                        </div>
                        <div className={CN('round icon blue button')}>
                            <i className="icon">more_vert</i>
                            more
                        </div>
                        <div className={CN('round basic green button')}>
                            ok
                        </div>
                        <pre>
                            <code>
                                {`<div class="${NS} round button">round</div>`}                                  
                            </code>
                        </pre>
                        <h4>Labeled button</h4>
                        <div className={CN('labeled button')}>
                            <i className="icon">menu</i>
                        </div>
                        <pre>
                            <code>
{`<div class="${NS} labeled button">
    <i class="icon">menu</i>
</div>
`}                                
                            </code>
                        </pre>
                    </li>
                    <li>
                        <h3>Button size</h3>
                        <button className={CN('tiny button')}>tiny</button>
                        <button className={CN('small button')}>small</button>
                        <button className={CN('button')}>normal</button>
                        <button className={CN('large button')}>large</button>
                        <button className={CN('huge button')}>huge</button>
                        <br/>
                        <pre>
                            <code>
                                {`<div class="${NS} tiny button">tiny</div>`}
                            </code>
                        </pre>
                    </li>
                    <li>
                        <h3>Button group share same size</h3>
                        <div className={CN('button-group')}>
                            <div className="button">first</div>
                            <div className="button">second</div>
                            <div className="button">thrid</div>
                        </div>
                        <br/>
                        <pre>
                            <code>
{`<div class="${NS} button-group">
    <div class="button">first</div>
    <div class="button">second</div>
    <div class="button">third</div>
</div>
`}                                
                            </code>
                        </pre>
                        <div className={CN('vertical button-group')}>
                            <div className="button">first</div>
                            <div className="button">second</div>
                            <div className="button">thrid</div>
                        </div>
                        <br/>
                        <pre>
                            <code>
{`<div class="${NS} vertical button-group">
    <div class="button">button</div>
    <div class="button">button</div>
    <div class="button">button</div>
</div>
`}                                
                            </code>
                        </pre>
                    </li>
                    <li>
                        <h3>Labeled button group</h3>
                        <div className="field">
                            <div className={CN('vertical button-group')}>
                                <div className="labeled button">
                                    <i className="icon">laptop</i>
                                </div>
                                <div className="labeled button">
                                    <i className="icon">watch</i>
                                </div>
                                <div className="labeled button">
                                    <i className="icon">headset</i>
                                </div>
                            </div>
                        </div>
                        {labelBtnGroup('tiny')}
                        {labelBtnGroup('small')}
                        {labelBtnGroup()}
                        {labelBtnGroup('large')}
                        {labelBtnGroup('huge')}
                        <pre>
                            <code>
{`<div class="${NS} tiny button-group">
    <div class="label button">
        <i class="icon">menu</i>
    </div>
    <div class="label button">
        <i class="icon">menu</i>
    </div>
    ...
    <div class="button">second</div>
</div>
`}                                 
                            </code>
                        </pre>
                    </li>
                </ul>
            </div>
        );
    }
}
