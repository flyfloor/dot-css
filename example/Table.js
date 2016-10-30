import React, { Component } from 'react';
import {CN, TitleBlock} from './util';
import {NS} from './setting';

const makeTable = (cn='') => {
    return (
        <table className={CN(`${cn} table`)}>
            <thead>
                <tr>
                    <th>name</th>
                    <th>bio</th>
                    <th>age</th>
                    <th>company</th>
                    <th>hobby</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td rowSpan="3">jerry</td>
                    <td rowSpan="3">Something Ricked This Way Comes, Something Ricked This Way Comes</td>
                    <td rowSpan="3">27</td>
                    <td rowSpan="3">meituan</td>
                    <td>sport</td>
                </tr>
                <tr>
                    <td>cycling</td>
                </tr>
                <tr>
                    <td>...</td>
                </tr>
                <tr>
                    <td>lily</td>
                    <td>...</td>
                    <td>20</td>
                    <td>?</td>
                    <td>...</td>
                </tr>
            </tbody>
        </table>
    )
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
    <thead>
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
                        <h3>celled table</h3>
                        {makeTable('celled')}
                        <pre>
                            <code>
{`<table className="${NS} celled table">
    ...
</table>`}                                
                            </code>
                        </pre>
                    </li>
                    <li>
                        <h3>fixed table</h3>
                        {makeTable('fixed')}
                        <pre>
                            <code>
{`<table class="${NS} fixed table">
    ...
</table>`}                                
                            </code>
                        </pre>
                    </li>
                    <li>
                        <h3>table layout</h3>
                        {makeTable('basic fluid')}
                        <br/>
                        <pre>
                            <code>
{`<table class="${NS} basic table">
    ...
</table>`}                                
                            </code>
                        </pre>
                    </li>
                </ul>
            </div>
        );
    }
}
