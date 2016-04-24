import React, { Component } from 'react';
import {CN} from './util';

export default class Grid extends Component {
    render() {
        return (
            <div className='grid-example'>
                <h2>Grid</h2>
                <blockquote>
                    <p>This part is about Grid</p>
                </blockquote>
                <ul>
                    <li>
                        <h4>Same width column</h4>
                        <div className={CN('grid grid-5 text-center text-extra')}>
                            <div className="row">
                                <div className="column">
                                    <p>1/5</p>
                                </div>
                                <div className="column">
                                    <p>1/5</p>
                                </div>
                                <div className="column">
                                    <p>1/5</p>
                                </div>
                                <div className="column">
                                    <p>1/5</p>
                                </div>
                                <div className="column">
                                    <p>1/5</p>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className={CN('grid text-center')}>
                            <div className="row column-3">
                                <div className="column">
                                    <p>1/3</p>
                                </div>
                                <div className="column">
                                    <p>1/3</p>
                                </div>
                                <div className="column">
                                    <p>1/3</p>
                                </div>
                            </div>
                            <div className="row column-5">
                                <div className="column">
                                    <p>1/5</p>
                                </div>
                                <div className="column">
                                    <p>1/5</p>
                                </div>
                                <div className="column">
                                    <p>1/5</p>
                                </div>
                                <div className="column">
                                    <p>1/5</p>
                                </div>
                                <div className="column">
                                    <p>1/5</p>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <ul className={CN('grid grid-4 text-center')}>
                            <li className="column">
                                <p>1/4</p>
                            </li>
                            <li className="column">
                                <p>1/4</p>
                            </li>
                            <li className="column">
                                <p>1/4</p>
                            </li>
                            <li className="column">
                                <p>1/4</p>
                            </li>
                        </ul>
                        <br/>
                    </li>
                    <li>
                        <h3>Column width, divide to 16 part</h3>
                        <div className={CN('grid text-center')}>
                            <div className="row">
                                <div className="column column-2">
                                    <p>2</p>
                                </div>
                                <div className="column column-6">
                                    <p>6</p>
                                </div>
                                <div className="column column-2">
                                    <p>2</p>
                                </div>
                                <div className="column column-2">
                                    <p>2</p>
                                </div>
                                <div className="column column-4">
                                    <p>4</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="column column-8">
                                    <p>8</p>
                                </div>
                                <div className="column column-8">
                                    <p>8</p>
                                </div>
                            </div>
                        </div>
                        <br/>
                    </li>
                    <li>
                        <h3>Column width, divide to 16 part</h3>
                        <div className={CN('grid text-center')}>
                            <div className="row">
                                <div className="column column-3">
                                    <p>3</p>
                                </div>
                                <div className="column column-5">
                                    <p>5</p>
                                </div>
                                <div className={CN('float-right column column-4')}>
                                    <p>4</p>
                                </div>
                            </div>
                        </div>
                        <br/>
                    </li>
                    <li>
                        <h3>Auto fold column</h3>
                        <div className={CN('grid')}>
                            <div className="column">
                                <p>1</p>
                            </div>
                            <div className="column">
                                <p>2</p>
                            </div>
                            <div className="column">
                                <p>3</p>
                            </div>
                            <div className="column">
                                <p>4</p>
                            </div>
                            <div className="column">
                                <p>5</p>
                            </div>
                            <div className="column">
                                <p>6</p>
                            </div>
                            <div className="column">
                                <p>7</p>
                            </div>
                            <div className="column">
                                <p>8</p>
                            </div>
                            <div className="column">
                                <p>9</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}
