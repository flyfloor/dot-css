import React, { Component } from 'react';
import {CN, TitleBlock} from './util';

export default class Item extends Component {
    render() {
        return (
            <div>
                {TitleBlock('Item')}
                <ul>
                    <li>
                        <ul className={CN('list')}>
                            <li>
                                <h4>Default Item(vertical center)</h4>
                                <div className={CN('item')}>
                                    <div className={CN('mini image')}>
                                        <img src="http://braavos.me/dot-css/dist/img/avatar.png"/>
                                    </div>
                                    <div className="content">
                                        <div className="header">Jerry</div>
                                        <div className="extra">just push 3 commit to dot-css</div>
                                    </div>
                                </div>
                                <pre>
                                    <code>
{`
<div className="${CN('item')}">
    <div className="${CN('mini image')}">
        <img src="http://braavos.me/dot-css/dist/img/avatar.png"/>
    </div>
    <div className="content">
        <div className="header">Jerry</div>
        <div className="extra">just push 3 commit to dot-css</div>
    </div>
</div>
`}                                        
                                    </code>
                                </pre>
                            </li>
                            <li>
                                <h4>vertical top item</h4>
                                <div className={CN('item top')}>
                                    <div className={CN('small image')}>
                                        <img src="http://braavos.me/dot-css/dist/img/img.png"/>
                                    </div>
                                    <div className="content">
                                        <div className="header">Jerry</div>
                                        <div className="extra">just push 3 commit to dot-css</div>
                                    </div>
                                </div>
                                <pre>
                                    <code>
{`
<div className="${CN('item top')}">
    ...
</div>
`}                                        
                                    </code>
                                </pre>
                            </li>
                            <li className="item">
                                <h4>vertical bottom item</h4>
                                <div className={CN('item bottom')}>
                                    <div className={CN('tiny image')}>
                                        <img src="http://braavos.me/dot-css/dist/img/avatar.png"/>
                                    </div>
                                    <div className="content">
                                        <div className="header">Jerry</div>
                                        <div className="extra">just push 3 commit to dot-css</div>
                                    </div>
                                </div>
                                <pre>
                                    <code>
{`
<div className="${CN('item bottom')}">
    ...
</div>
`}                                        
                                    </code>
                                </pre>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}
