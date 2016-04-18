import React, { Component } from 'react';
import {NS} from './setting';

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
                        <button className={`${NS} button`}>button</button>
                    </li>
                    <li>
                        <h3>Button size</h3>
                        <button className={`${NS} tiny button`}>tiny</button>
                        <button className={`${NS} small button`}>small</button>
                        <button className={`${NS} button`}>normal</button>
                        <button className={`${NS} large button`}>large</button>
                        <button className={`${NS} huge button`}>huge</button>
                    </li>
                    <li>
                        <h3>Colored button</h3>
                        <div>
                            <button className={`${NS} red button`}>red</button>
                            <button className={`${NS} pink button`}>pink</button>
                            <button className={`${NS} purple button`}>purple</button>
                            <button className={`${NS} indigo button`}>indigo</button>
                            <button className={`${NS} cyan button`}>cyan</button>
                            <button className={`${NS} teal button`}>teal</button>
                            <button className={`${NS} green button`}>green</button>
                            <button className={`${NS} lime button`}>lime</button>
                            <button className={`${NS} amber button`}>amber</button>
                            <button className={`${NS} orange button`}>orange</button>
                            <button className={`${NS} brown button`}>brown</button>
                            <button className={`${NS} gray button`}>gray</button>
                            <button className={`${NS} bluegray button`}>bluegray</button>
                            <button className={`${NS} yellow button`}>yellow</button>
                            <button className={`${NS} black button`}>black</button>
                        </div>
                        <br/>
                        <h3>basic button</h3>
                        <div>
                            <button className={`${NS} basic red button`}>red</button>
                            <button className={`${NS} basic pink button`}>pink</button>
                            <button className={`${NS} basic purple button`}>purple</button>
                            <button className={`${NS} basic indigo button`}>indigo</button>
                            <button className={`${NS} basic cyan button`}>cyan</button>
                            <button className={`${NS} basic teal button`}>teal</button>
                            <button className={`${NS} basic green button`}>green</button>
                            <button className={`${NS} basic lime button`}>lime</button>
                            <button className={`${NS} basic amber button`}>amber</button>
                            <button className={`${NS} basic orange button`}>orange</button>
                            <button className={`${NS} basic brown button`}>brown</button>
                            <button className={`${NS} basic gray button`}>gray</button>
                            <button className={`${NS} basic bluegray button`}>bluegray</button>
                            <button className={`${NS} basic yellow button`}>yellow</button>
                            <button className={`${NS} basic black button`}>black</button>
                        </div>
                        <br/>
                    </li>
                    <li>
                        <h3>Icon button</h3>
                        <div>
                            <button className={`${NS} button tiny icon-button`}>
                                <i className={`${NS} icon`}>refresh</i>
                                refresh
                            </button>
                            <button className={`${NS} button small icon-button`}>
                                <i className={`${NS} icon`}>star</i>
                                star
                            </button>
                            <button className={`${NS} button icon-button`}>
                                <i className={`${NS} icon`}>home</i>
                                home
                            </button>
                            <button className={`${NS} button red icon-button`}>
                                <i className={`${NS} icon`}>watch</i>
                                watch
                            </button>
                            <button className={`${NS} button large icon-button`}>
                                <i className={`${NS} icon`}>contact_mail</i>
                                contact_mail
                            </button>
                            <button className={`${NS} button huge icon-button`}>
                                <i className={`${NS} icon`}>group</i>
                                group
                            </button>
                        </div>
                        <br/>
                    </li>
                    <li>
                        <h3>Fluid button</h3>
                        <div>
                            <button className={`${NS} fluid button`}>fluid button</button>
                        </div>
                        <br/>
                    </li>
                    <li>
                        <h3>Round button</h3>
                        <div>
                            <div className={`${NS} round tiny button`}>
                                <i className={`${NS} icon`}>apps</i>
                            </div>
                            <div className={`${NS} round small button`}>
                                <i className={`${NS} icon`}>share</i>
                            </div>
                            <div className={`${NS} round button`}>
                                <i className={`${NS} icon`}>clear</i>
                            </div>
                            <div className={`${NS} round green button`}>
                                <i className={`${NS} icon`}>arrow_back</i>
                            </div>
                            <div className={`${NS} round basic blue button`}>
                                <i className={`${NS} icon`}>more_vert</i>
                            </div>
                            <div className={`${NS} round large button`}>
                                <i className={`${NS} icon`}>reply</i>
                            </div>
                            <div className={`${NS} round huge button`}>
                                <i className={`${NS} icon`}>plus_one</i>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}
