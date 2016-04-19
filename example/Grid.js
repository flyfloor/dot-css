import React, { Component } from 'react';
import {CN} from './util';

export default class Grid extends Component {
    render() {
        return (
            <div>
                <h2>Grid</h2>
                <ul>
                    <li>
                        <h4>same width column</h4>
                        <div className={CN('grid grid-5 grid-example text-center text-extra')}>
                            <div className="row">
                                <div className="column">
                                    <p>column1</p>
                                </div>
                                <div className="column">
                                    <p>column2</p>
                                </div>
                                <div className="column">
                                    <p>column3</p>
                                </div>
                                <div className="column">
                                    <p>column4</p>
                                </div>
                                <div className="column">
                                    <p>column5</p>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className={CN('grid grid-example text-center')}>
                            <div className="row column-3">
                                <div className="column">
                                    <p>column1</p>
                                </div>
                                <div className="column">
                                    <p>column2</p>
                                </div>
                                <div className="column">
                                    <p>column3</p>
                                </div>
                            </div>
                            <div className="row column-5">
                                <div className="column">
                                    <p>column4</p>
                                </div>
                                <div className="column">
                                    <p>column5</p>
                                </div>
                                <div className="column">
                                    <p>column6</p>
                                </div>
                                <div className="column">
                                    <p>column7</p>
                                </div>
                                <div className="column">
                                    <p>column8</p>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <ul className={CN('grid grid-4 grid-example text-center')}>
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
                        <div className={CN('grid grid-example text-center')}>
                            <div className="row">
                                <div className="column column-2">
                                    <p>2 part column</p>
                                </div>
                                <div className="column column-6">
                                    <p>6 part column</p>
                                </div>
                                <div className="column column-2">
                                    <p>2 part column</p>
                                </div>
                                <div className="column column-2">
                                    <p>2 part column</p>
                                </div>
                                <div className="column column-4">
                                    <p>4 part column</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="column column-8">
                                    <p>8 part column</p>
                                </div>
                                <div className="column column-8">
                                    <p>8 part column</p>
                                </div>
                            </div>
                        </div>
                        <br/>
                    </li>
                    <li>
                        <h3>column width, divide to 16 part</h3>
                        <div className={CN('grid grid-example text-center')}>
                            <div className="row">
                                <div className="column column-3">
                                    <p>3 part column</p>
                                </div>
                                <div className="column column-5">
                                    <p>5 part column</p>
                                </div>
                                <div className={CN('float-right column column-4')}>
                                    <p>4 part column</p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}
