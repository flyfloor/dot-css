import React, { Component } from 'react';
import {CN} from './util';
import {COLORS} from './setting';

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
                <blockquote>
                    <p>This part is about Button, Icon button, Labeled button, Circle button, Button size, Button group</p>
                </blockquote>
                <ul>
                    <li>
                        <h3>Button</h3>
                        <button className={CN('button')}>button</button>
                        <h4>Right angled button</h4>
                        <button className={CN('angled button')}>angled button</button>
                        <h4>Colored button</h4>
                        {colorBtns()}
                        <h4>Basic button</h4>
                        {colorBtns('basic')}
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
                        <h4>Fluid button</h4>
                        <div>
                            <button className={CN('fluid button')}>fluid button</button>
                        </div>
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
                        <h4>Labeled button</h4>
                        <div className={CN('labeled button')}>
                            <i className={CN('icon')}>menu</i>
                        </div>
                    </li>
                    <li>
                        <h3>Button grounp</h3>
                        <div className={CN('button-group')}>
                            <div className={CN('button')}>first</div>
                            <div className={CN('button')}>second</div>
                            <div className={CN('button')}>thrid</div>
                        </div>
                        <br/>
                        <div className={CN('vertical button-group')}>
                            <div className={CN('button')}>first</div>
                            <div className={CN('button')}>second</div>
                            <div className={CN('button')}>thrid</div>
                        </div>
                        <br/>
                    </li>
                    <li>
                        <h3>Button size</h3>
                        <button className={CN('tiny button')}>tiny</button>
                        <button className={CN('small button')}>small</button>
                        <button className={CN('button')}>normal</button>
                        <button className={CN('large button')}>large</button>
                        <button className={CN('huge button')}>huge</button>
                        <br/>
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
                        {labelBtnGroup('tiny')}
                        {labelBtnGroup('small')}
                        {labelBtnGroup()}
                        {labelBtnGroup('large')}
                        {labelBtnGroup('huge')}
                    </li>
                </ul>
            </div>
        );
    }
}
