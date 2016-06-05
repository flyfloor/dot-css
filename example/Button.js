import React, { Component } from 'react';
import {CN} from './util';
import {NS, COLORS} from './setting';

const labelBtnGroup = (cn='') => {
    return <div className={CN(`${cn} button-group`)}>
                <div className={CN('labeled button')}>
                    <i className={CN('icon')}>photo_camera</i>
                </div>
                <div className={CN('labeled button')}>
                    <i className={CN('icon')}>extension</i>
                </div>
                <div className={CN('button')}>normal button</div>
                <div className={CN('labeled button')}>
                    <i className={CN('icon')}>layers</i>
                </div>
            </div>;
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
                <h2>Button</h2>
                <blockquote className={CN('blockquote')}>
                    <p>This part is about Button, Icon button, Labeled button, Circle button, Button size, Button group</p>
                </blockquote>
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
                                <i className={CN('icon')}>refresh</i>
                                refresh
                            </button>
                            <button className={CN('button small icon')}>
                                <i className={CN('icon')}>star</i>
                                star
                            </button>
                            <button className={CN('button icon')}>
                                <i className={CN('icon')}>home</i>
                                home
                            </button>
                            <button className={CN('button large icon')}>
                                <i className={CN('icon')}>contact_mail</i>
                                mail
                            </button>
                            <button className={CN('button huge icon')}>
                                <i className={CN('icon')}>group</i>
                                group
                            </button>
                            <button className={CN('button red icon')}>
                                <i className={CN('icon')}>watch</i>
                                watch
                            </button>
                            <button className={CN('button basic amber icon')}>
                                <i className={CN('icon')}>keyboard</i>
                                keyboard
                            </button>
                        </div>
                        <pre>
                            <code>
{`<div class="${NS} icon button">
    <i class="${NS} icon">star</i>
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
                                <i className={CN('icon')}>apps</i>
                            </div>
                            <div className={CN('circle small button')}>
                                <i className={CN('icon')}>share</i>
                            </div>
                            <div className={CN('circle button')}>
                                <i className={CN('icon')}>clear</i>
                            </div>
                            <div className={CN('circle large button')}>
                                <i className={CN('icon')}>reply</i>
                            </div>
                            <div className={CN('circle huge button')}>
                                <i className={CN('icon')}>plus_one</i>
                            </div>
                            <div className={CN('circle green button')}>
                                <i className={CN('icon')}>arrow_back</i>
                            </div>
                            <div className={CN('circle basic blue button')}>
                                <i className={CN('icon')}>more_vert</i>
                            </div>
                        </div>
                        <pre>
                            <code>
{`<div class="${NS} circle button">
    <i class="${NS} icon">apps</i>
</div>
`}                                
                            </code>
                        </pre>
                        <h4>Round button</h4>
                        <div className={CN('round button')}>
                            button
                        </div>
                        <div className={CN('round icon blue button')}>
                            <i className={CN('icon')}>more_vert</i>
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
                            <i className={CN('icon')}>menu</i>
                        </div>
                        <pre>
                            <code>
{`<div class="${NS} labeled button">
    <i class="${NS} icon">menu</i>
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
                            <div className={CN('button')}>first</div>
                            <div className={CN('button')}>second</div>
                            <div className={CN('button')}>thrid</div>
                        </div>
                        <br/>
                        <pre>
                            <code>
{`<div class="${NS} button-group">
    <div class="${NS} button">first</div>
    <div class="${NS} button">second</div>
    <div class="${NS} button">third</div>
</div>
`}                                
                            </code>
                        </pre>
                        <div className={CN('vertical button-group')}>
                            <div className={CN('button')}>first</div>
                            <div className={CN('button')}>second</div>
                            <div className={CN('button')}>thrid</div>
                        </div>
                        <br/>
                        <pre>
                            <code>
{`<div class="${NS} vertical button-group">
    <div class="${NS} button">button</div>
    <div class="${NS} button">button</div>
    <div class="${NS} button">button</div>
</div>
`}                                
                            </code>
                        </pre>
                    </li>
                    <li>
                        <h3>Labeled button group</h3>
                        <div className={CN('vertical button-group')}>
                            <div className={CN('labeled button')}>
                                <i className={CN('icon')}>laptop</i>
                            </div>
                            <div className={CN('labeled button')}>
                                <i className={CN('icon')}>watch</i>
                            </div>
                            <div className={CN('labeled button')}>
                                <i className={CN('icon')}>headset</i>
                            </div>
                        </div>
                        <div>
                            {labelBtnGroup('tiny')}
                        </div>
                        <div>
                            {labelBtnGroup('small')}
                        </div>
                        <div>
                            {labelBtnGroup()}
                        </div>
                        <div>
                            {labelBtnGroup('large')}
                        </div>
                        <div>
                            {labelBtnGroup('huge')}
                        </div>
                        <pre>
                            <code>
{`<div class="${NS} tiny button-group">
    <div class="${NS} button">first</div>
    <div class="${NS} button">second</div>
    <div class="${NS} button">third</div>
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
