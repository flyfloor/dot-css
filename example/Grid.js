import React, { Component } from 'react';
import {NS} from './setting';

export default class Grid extends Component {
    render() {
        return (
            <div>
                <h2>Grid</h2>
                <ul>
                    <li>
                        <h4>same width column</h4>
                        <ul className={`${NS} grid grid-5 grid-example text-center text-extra`}>
                            <li className="column">
                                <p>column1
                                </p>
                            </li>
                            <li className="column">
                                <p>column2
                                </p>
                            </li>
                            <li className="column">
                                <p>column3
                                </p>
                            </li>
                            <li className="column">
                                <p>column4
                                </p>
                            </li>
                            <li className="column">
                                <p>column5
                                </p>
                            </li>
                        </ul>
                        <ul className={`${NS} grid grid-8 grid-example text-center`}>
                            <li className="column">
                                <p>column1
                                </p>
                            </li>
                            <li className="column">
                                <p>column2
                                </p>
                            </li>
                            <li className="column">
                                <p>column3
                                </p>
                            </li>
                            <li className="column">
                                <p>column4
                                </p>
                            </li>
                            <li className="column">
                                <p>column5
                                </p>
                            </li>
                            <li className="column">
                                <p>column6
                                </p>
                            </li>
                            <li className="column">
                                <p>column7
                                </p>
                            </li>
                            <li className="column">
                                <p>column8
                                </p>
                            </li>
                        </ul>
                        <ul className={`${NS} grid grid-4 grid-example text-center`}>
                            <li className="column">
                                <p>column1
                                </p>
                            </li>
                            <li className="column">
                                <p>column2
                                </p>
                            </li>
                            <li className="column">
                                <p>column3
                                </p>
                            </li>
                            <li className="column">
                                <p>column4
                                </p>
                            </li>
                        </ul>
                        <br/>
                    </li>
                    <li>
                        <h3>column width, divide to 16 part</h3>
                        <ul className={`${NS} grid grid-example text-center`}>
                            <li className="column column-2">
                                <p>2 part column</p>
                            </li>
                            <li className="column column-6">
                                <p>6 part column</p>
                            </li>
                            <li className="column column-4">
                                <p>4 part column</p>
                            </li>
                            <li className="column column-2">
                                <p>2 part column</p>
                            </li>
                            <li className="column column-2">
                                <p>2 part column</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h3>column width, divide to 16 part</h3>
                        <ul className={`${NS} grid grid-example text-center`}>
                            <li className="column column-3">
                                <p>3 part column</p>
                            </li>
                            <li className="column column-5">
                                <p>5 part column</p>
                            </li>
                            <li className={`${NS} float-right column column-4`}>
                                <p>4 part column</p>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}
