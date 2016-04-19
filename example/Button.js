import React, { Component } from 'react';
import {CN} from './util';

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
                        <button className={CN('button')}>button</button>
                        <br/>
                    </li>
                    <li>
                        <h3>Right angled button</h3>
                        <button className={CN('angled button')}>angled button</button>
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
                        <h3>Colored button</h3>
                        <div>
                            <button className={CN('red button')}>red</button>
                            <button className={CN('pink button')}>pink</button>
                            <button className={CN('purple button')}>purple</button>
                            <button className={CN('indigo button')}>indigo</button>
                            <button className={CN('cyan button')}>cyan</button>
                            <button className={CN('teal button')}>teal</button>
                            <button className={CN('green button')}>green</button>
                            <button className={CN('lime button')}>lime</button>
                            <button className={CN('amber button')}>amber</button>
                            <button className={CN('orange button')}>orange</button>
                            <button className={CN('brown button')}>brown</button>
                            <button className={CN('gray button')}>gray</button>
                            <button className={CN('bluegray button')}>bluegray</button>
                            <button className={CN('yellow button')}>yellow</button>
                            <button className={CN('black button')}>black</button>
                        </div>
                        <br/>
                        <h3>basic button</h3>
                        <div>
                            <button className={CN('basic red button')}>red</button>
                            <button className={CN('basic pink button')}>pink</button>
                            <button className={CN('basic purple button')}>purple</button>
                            <button className={CN('basic indigo button')}>indigo</button>
                            <button className={CN('basic cyan button')}>cyan</button>
                            <button className={CN('basic teal button')}>teal</button>
                            <button className={CN('basic green button')}>green</button>
                            <button className={CN('basic lime button')}>lime</button>
                            <button className={CN('basic amber button')}>amber</button>
                            <button className={CN('basic orange button')}>orange</button>
                            <button className={CN('basic brown button')}>brown</button>
                            <button className={CN('basic gray button')}>gray</button>
                            <button className={CN('basic bluegray button')}>bluegray</button>
                            <button className={CN('basic yellow button')}>yellow</button>
                            <button className={CN('basic black button')}>black</button>
                        </div>
                        <br/>
                    </li>
                    <li>
                        <h3>Icon button</h3>
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
                            <button className={CN('button red icon')}>
                                <i className={CN('icon')}>watch</i>
                                watch
                            </button>
                            <button className={CN('button large icon')}>
                                <i className={CN('icon')}>contact_mail</i>
                                contact_mail
                            </button>
                            <button className={CN('button huge icon')}>
                                <i className={CN('icon')}>group</i>
                                group
                            </button>
                        </div>
                        <br/>
                    </li>
                    <li>
                        <h3>Fluid button</h3>
                        <div>
                            <button className={CN('fluid button')}>fluid button</button>
                        </div>
                        <br/>
                    </li>
                    <li>
                        <h3>Circle button</h3>
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
                            <div className={CN('circle green button')}>
                                <i className={CN('icon')}>arrow_back</i>
                            </div>
                            <div className={CN('circle basic blue button')}>
                                <i className={CN('icon')}>more_vert</i>
                            </div>
                            <div className={CN('circle large button')}>
                                <i className={CN('icon')}>reply</i>
                            </div>
                            <div className={CN('circle huge button')}>
                                <i className={CN('icon')}>plus_one</i>
                            </div>
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
                    </li>
                    <li>
                        <h3>Button grounp</h3>
                        <div className={CN('vertical button-group')}>
                            <div className={CN('button')}>first</div>
                            <div className={CN('button')}>second</div>
                            <div className={CN('button')}>thrid</div>
                        </div>
                        <br/>
                    </li>
                    <li>
                        <h3>Labeld button</h3>
                        <div className={CN('labeld button')}>
                            <i className={CN('icon')}>menu</i>
                        </div>
                        <br/>
                    </li>
                    <li>
                        <h3>Labeld button group</h3>
                        <div className={CN('button-group')}>
                            <div className={CN('labeld button')}>
                                <i className={CN('icon')}>photo_camera</i>
                            </div>
                            <div className={CN('labeld button')}>
                                <i className={CN('icon')}>extension</i>
                            </div>
                            <div className={CN('button')}>normal button</div>
                            <div className={CN('labeld button')}>
                                <i className={CN('icon')}>layers</i>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}
