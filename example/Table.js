import React, { Component } from 'react';
import {CN, TitleBlock} from './util';
import {NS} from './setting';

const makeTable = (cn='') => {
    if (!cn) {
        return (
            <table className={CN('table')}>
                <thead>
                    <tr>
                        <th>th1</th>
                        <th>th2</th>
                        <th>th3</th>
                        <th>th4</th>
                        <th>th5</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>td1</td>
                        <td>td2</td>
                        <td>td3</td>
                        <td>td4</td>
                        <td>td5</td>
                    </tr>
                    <tr>
                        <td>tr2 td1</td>
                        <td>tr2 td2</td>
                        <td>tr2 td3</td>
                        <td>tr2 td4</td>
                        <td>tr2 td5</td>
                    </tr>
                </tbody>
            </table>
        )
    }
    return (
        <div className={CN(`${cn} table`)}>
            <div className="row head">
                <div className="cell" width="30%">
                    <p>head1</p>
                </div>
                <div className="cell">
                    <p>head2</p>
                </div>
                <div className="cell">
                    <p>head3</p>
                </div>
                <div className="cell">
                    <p>head4</p>
                </div>
                <div className="cell">
                    <p>head5</p>
                </div>
            </div>
            <div className="row">
                <div className="cell">
                    <p>row1 cell1</p>
                </div>
                <div className="cell">
                    <p>row1 cell2</p>
                </div>
                <div className="cell">
                    <p>row1 cell3</p>
                </div>
                <div className="cell">
                    <p>row1 cell4</p>
                </div>
                <div className="cell">
                    <p>row1 cell5</p>
                </div>
            </div>
            <div className="row">
                <div className="cell">
                    <p>row2 cell1</p>
                </div>
                <div className="cell">
                    <p>row2 cell2</p>
                </div>
                <div className="cell">
                    <p>row2 cell3</p>
                </div>
                <div className="cell">
                    <p>row2 cell4</p>
                </div>
                <div className="cell">
                    <p>row2 cell5</p>
                </div>
            </div>
        </div>
    );
};

export default class Table extends Component {
    render() {
        return (
            <div>
                {TitleBlock('Table')}
                <ul>
                    <li>
                        <h3>default display table</h3>
                        {makeTable()}
                        <br/>
                        <pre>
                            <code>
{`<table class="${NS} table">
    <thead class="head">
        <tr>
            <th></th><th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</div>`}                                
                            </code>
                        </pre>
                        <h3>Or</h3>
                        <pre>
                            <code>
{`<div class="${NS} table">
    <div class="thead">
        <div class="cell"></div>
        <div class="cell"></div>
    </div>
    <div class="row">
        <div class="cell"></div>
        <div class="cell"></div>
    </div>
</div>`}                                     
                            </code>
                        </pre>
                    </li>
                    <li>
                        <h3>fluid table</h3>
                        {makeTable('fluid')}
                        <br/>
                        <pre>
                            <code>
{`<div class="${NS} fluid table">
    <div class="row">
        <div class="cell"></div>
        <div class="cell"></div>
    </div>
</div>`}                                  
                            </code>
                        </pre>
                    </li>
                    <li>
                        <h3>table layout</h3>
                        {makeTable('basic fluid')}
                        <br/>
                        <pre>
                            <code>
{`<div class="${NS} basic table">
    <div class="row">
        <div class="cell"></div>
        <div class="cell"></div>
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
