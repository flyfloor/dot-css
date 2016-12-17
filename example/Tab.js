import React, { Component } from 'react';
import {CN, TitleBlock} from './util';
import {NS} from './setting';

export default class Tab extends Component {
    render() {
        return (
            <div>
                {TitleBlock('Tab')}
                <p className={`${NS} warning icon message`}>
                    <i className="icon">warning</i>
                    <div className="content">experimental</div>
                </p>
                <ul>
                    <li>
                        <h4>Default Tab</h4>
                        <div className={CN('tab')}>
                            <div className="bar">
                                <div className="item active">tab 1</div>
                                <div className="item">tab 2</div>
                                <div className="item">tab 3</div>
                            </div>
                            <div className="content">
                                <h3>This is content</h3>
                                <p>test</p>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                            </div>
                        </div>
                    </li>
                    <li>
                        <h4>Bottom Tab</h4>
                        <div className={CN('bottom tab')}>
                            <div className="content">
                                <h3>This is content</h3>
                                <p>test</p>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                            </div>
                            <div className="bar">
                                <div className="item active">tab 1</div>
                                <div className="item">tab 2</div>
                                <div className="item">tab 3</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <h4>Section tab</h4>
                        <div className={CN('section tab')}>
                            <div className="bar">
                                <div className="item active">tab 1</div>
                                <div className="item">tab 2</div>
                                <div className="item">tab 3</div>
                            </div>
                            <div className="content">
                                <h3>This is content</h3>
                                <p>test...</p>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                            </div>
                        </div>
                    </li>
                    <li>
                        <h4>Bottom Section tab</h4>
                        <div className={CN('bottom section tab')}>
                            <div className="content">
                                <h3>This is content</h3>
                                <p>test...</p>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                            </div>
                            <div className="bar">
                                <div className="item active">tab 1</div>
                                <div className="item">tab 2</div>
                                <div className="item">tab 3</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <h4>Vertical tab</h4>
                        <div className={CN('vertical tab')}>
                            <div className="bar">
                                <div className="item active">tab 1</div>
                                <div className="item">tab 2</div>
                                <div className="item">tab 3</div>
                            </div>
                            <div className="content">
                                <h3>This is content</h3>
                                <p>test...</p>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                            </div>
                        </div>
                    </li>
                    <li>
                        <h4>Right Vertical tab</h4>
                        <div className={CN('right vertical tab')}>
                            <div className="content">
                                <h3>This is content</h3>
                                <p>test...</p>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                            </div>
                            <div className="bar">
                                <div className="item active">tab 1</div>
                                <div className="item">tab 2</div>
                                <div className="item">tab 3</div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}
