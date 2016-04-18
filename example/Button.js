import React, { Component } from 'react';
import {className} from './util';

export default class Button extends Component {
    render() {
        return (
            <div>
                <h2>
                    Button
                </h2>
                <ul>
                    <li>
                        <h3>A standard button</h3>
                        <button className={className('button')}>button</button>
                        <br/>
                    </li>
                    <li>
                        <h3>Right angled button</h3>
                        <button className={className('angled button')}>angled button</button>
                        <br/>
                    </li>
                    <li>
                        <h3>Button size</h3>
                        <button className={className('tiny button')}>tiny</button>
                        <button className={className('small button')}>small</button>
                        <button className={className('button')}>normal</button>
                        <button className={className('large button')}>large</button>
                        <button className={className('huge button')}>huge</button>
                        <br/>
                    </li>
                    <li>
                        <h3>Colored button</h3>
                        <div>
                            <button className={className('red button')}>red</button>
                            <button className={className('pink button')}>pink</button>
                            <button className={className('purple button')}>purple</button>
                            <button className={className('indigo button')}>indigo</button>
                            <button className={className('cyan button')}>cyan</button>
                            <button className={className('teal button')}>teal</button>
                            <button className={className('green button')}>green</button>
                            <button className={className('lime button')}>lime</button>
                            <button className={className('amber button')}>amber</button>
                            <button className={className('orange button')}>orange</button>
                            <button className={className('brown button')}>brown</button>
                            <button className={className('gray button')}>gray</button>
                            <button className={className('bluegray button')}>bluegray</button>
                            <button className={className('yellow button')}>yellow</button>
                            <button className={className('black button')}>black</button>
                        </div>
                        <br/>
                        <h3>basic button</h3>
                        <div>
                            <button className={className('basic red button')}>red</button>
                            <button className={className('basic pink button')}>pink</button>
                            <button className={className('basic purple button')}>purple</button>
                            <button className={className('basic indigo button')}>indigo</button>
                            <button className={className('basic cyan button')}>cyan</button>
                            <button className={className('basic teal button')}>teal</button>
                            <button className={className('basic green button')}>green</button>
                            <button className={className('basic lime button')}>lime</button>
                            <button className={className('basic amber button')}>amber</button>
                            <button className={className('basic orange button')}>orange</button>
                            <button className={className('basic brown button')}>brown</button>
                            <button className={className('basic gray button')}>gray</button>
                            <button className={className('basic bluegray button')}>bluegray</button>
                            <button className={className('basic yellow button')}>yellow</button>
                            <button className={className('basic black button')}>black</button>
                        </div>
                        <br/>
                    </li>
                    <li>
                        <h3>Icon button</h3>
                        <div>
                            <button className={className('button tiny icon-button')}>
                                <i className={className('icon')}>refresh</i>
                                refresh
                            </button>
                            <button className={className('button small icon-button')}>
                                <i className={className('icon')}>star</i>
                                star
                            </button>
                            <button className={className('button icon-button')}>
                                <i className={className('icon')}>home</i>
                                home
                            </button>
                            <button className={className('button red icon-button')}>
                                <i className={className('icon')}>watch</i>
                                watch
                            </button>
                            <button className={className('button large icon-button')}>
                                <i className={className('icon')}>contact_mail</i>
                                contact_mail
                            </button>
                            <button className={className('button huge icon-button')}>
                                <i className={className('icon')}>group</i>
                                group
                            </button>
                        </div>
                        <br/>
                    </li>
                    <li>
                        <h3>Fluid button</h3>
                        <div>
                            <button className={className('fluid button')}>fluid button</button>
                        </div>
                        <br/>
                    </li>
                    <li>
                        <h3>Circle button</h3>
                        <div>
                            <div className={className('circle tiny button')}>
                                <i className={className('icon')}>apps</i>
                            </div>
                            <div className={className('circle small button')}>
                                <i className={className('icon')}>share</i>
                            </div>
                            <div className={className('circle button')}>
                                <i className={className('icon')}>clear</i>
                            </div>
                            <div className={className('circle green button')}>
                                <i className={className('icon')}>arrow_back</i>
                            </div>
                            <div className={className('circle basic blue button')}>
                                <i className={className('icon')}>more_vert</i>
                            </div>
                            <div className={className('circle large button')}>
                                <i className={className('icon')}>reply</i>
                            </div>
                            <div className={className('circle huge button')}>
                                <i className={className('icon')}>plus_one</i>
                            </div>
                        </div>
                    </li>
                    <li>
                        <h3>Button grounp</h3>
                        <div className={className('button-group')}>
                            <div className={className('button')}>first</div>
                            <div className={className('button')}>second</div>
                            <div className={className('button')}>thrid</div>
                        </div>
                        <br/>
                    </li>
                    <li>
                        <h3>Button grounp</h3>
                        <div className={className('vertical button-group')}>
                            <div className={className('button')}>first</div>
                            <div className={className('button')}>second</div>
                            <div className={className('button')}>thrid</div>
                        </div>
                        <br/>
                    </li>
                    <li>
                        <h3>Edge button</h3>
                        <div className={className('edge button')}>
                            <div className={className('button')}></div>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}
