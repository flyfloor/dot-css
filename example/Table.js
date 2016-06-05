import React, { Component } from 'react';
import {CN} from './util';
import {NS} from './setting';

const makeTable = (cn='') => {
    return (
        <div className={CN(`${cn} table`)}>
            <div className="row head">
                <div className="cell" width="30%">
                    <p>table head1</p>
                </div>
                <div className="cell">
                    <p>table head2</p>
                </div>
                <div className="cell">
                    <p>table head3</p>
                </div>
                <div className="cell">
                    <p>table head4</p>
                </div>
                <div className="cell">
                    <p>table head5</p>
                </div>
            </div>
            <div className="row">
                <div className="cell">
                    <p>table row1 cell1</p>
                </div>
                <div className="cell">
                    <p>table row1 cell2</p>
                </div>
                <div className="cell">
                    <p>table row1 cell3</p>
                </div>
                <div className="cell">
                    <p>table row1 cell4</p>
                </div>
                <div className="cell">
                    <p>table row1 cell5</p>
                </div>
            </div>
            <div className="row">
                <div className="cell">
                    <p>table row2 cell1</p>
                </div>
                <div className="cell">
                    <p>table row2 cell2</p>
                </div>
                <div className="cell">
                    <p>table row2 cell3</p>
                </div>
                <div className="cell">
                    <p>table row2 cell4</p>
                </div>
                <div className="cell">
                    <p>table row2 cell5</p>
                </div>
            </div>
        </div>
    );
};

export default class Table extends Component {
    render() {
        return (
            <div>
                <h2>Table</h2>
                <blockquote className={CN('blockquote')}>
                    <p>This part contains Table, and Table layout</p>
                </blockquote>
                <ul>
                    <li>
                        <h3>default display table</h3>
                        {makeTable()}
                        <br/>
                        <pre>
                            <code>
{`<div class="${NS} table">
    <div class="head">
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
