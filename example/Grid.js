import React, { Component } from 'react';
import {CN, TitleBlock} from './util';
import {NS} from './setting';

export default class Grid extends Component {
    render() {
        return (
            <div className='grid-example'>
                {TitleBlock('Grid')}
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
                        <pre>
                            <code>
{`grid-(1~16)
<div class="${NS} grid grid-5">
    <div class="row">
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
    </div>
</div>`
}                            
                            </code>
                        </pre>
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
                        <pre>
                            <code>
{`<div class="${NS} grid">
    <div class="row column-3">
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
    </div>
    <div class="row">
    </div>
</div>`
}                                   
                            </code>
                        </pre>
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
                        <pre>
                            <code>
{`column-(1~16)
<div class="${NS} grid">
    <div class="row">
        <div class="column column-2"></div>
        <div class="column column-6"></div>
        <div class="column column-2"></div>
        <div class="column column-2"></div>
        <div class="column column-4"></div>
    </div>
</div>
`}                                
                            </code>
                        </pre>
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
                        <pre>
                            <code>
{`<div class="grid">
    <div class="row">
        <div class="column column-3"></div>
        <div class="column column-5"></div>
        <div class="float-right column column-4"></div>
    </div>
</div>`}                                
                            </code>
                        </pre>
                    </li>
                </ul>
            </div>
        );
    }
}
