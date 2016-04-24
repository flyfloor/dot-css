import React, { Component } from 'react';
import {COLORS, LARGE_VIEW, SMALL_VIEW, MOBILE_VIEW, TABLET_VIEW} from './setting';
import {CN} from './util';


const makeColor = (color) => {
    switch (color) {
        case 'white':
            return <div className={CN(`padding bg-${color}`)}>{color}</div>;
        case 'black':
            return <div className={CN(`padding bg-${color} color-white`)}>{color}</div>;
        case 'gray':
            return <div>
                    <div className={CN(`padding bg-mini_${color}`)}>{`mini_${color}`}</div>
                    <div className={CN(`padding bg-tiny_${color}`)}>{`tiny_${color}`}</div>
                    <div className={CN(`padding bg-light_${color}`)}>{`light_${color}`}</div>
                    <div className={CN(`padding bg-soft_${color}`)}>{`soft_${color}`}</div>
                    <div className={CN(`padding bg-${color}`)}>{color}</div>
                    <div className={CN(`padding bg-dull_${color}`)}>{`dull_${color}`}</div>
                    <div className={CN(`padding bg-dark_${color}`)}>{`dark_${color}`}</div>
                    <div className={CN(`padding bg-deep_${color}`)}>{`deep_${color}`}</div>
                    <div className={CN(`padding bg-most_${color}`)}>{`most_${color}`}</div>
                </div>;

        default:
            return <div>
                    <div className={CN(`padding bg-mini_${color}`)}>{`mini_${color}`}</div>
                    <div className={CN(`padding bg-tiny_${color}`)}>{`tiny_${color}`}</div>
                    <div className={CN(`padding bg-light_${color}`)}>{`light_${color}`}</div>
                    <div className={CN(`padding bg-${color}`)}>{color}</div>
                    <div className={CN(`padding bg-dark_${color}`)}>{`dark_${color}`}</div>
                    <div className={CN(`padding bg-deep_${color}`)}>{`deep_${color}`}</div>
                    <div className={CN(`padding bg-most_${color}`)}>{`most_${color}`}</div>
                </div>;
    }
};

export default class Basic extends Component {
    render() {
        const nodes = COLORS.map(item => {
            return <li className={CN('column')} key={`color-${item}`}>
                        <h4>{item}</h4>
                        {makeColor(item)}
                    </li>
        });
        return (
            <div>
                <h2>Basic</h2>
                <blockquote>
                    <p>This part contains basic stuff, colors, fonts, H1 ~ H6</p>
                </blockquote>
                <ul>
                    <li>
                        <h3>The titles</h3>
                        <h1>H1</h1>
                        <h2>H2</h2>
                        <h3>H3</h3>
                        <h4>H4</h4>
                        <h5>H5</h5>
                        <h6>H6</h6>
                        <br/>
                    </li>
                    <li>
                        <h3>Paragragh</h3>
                        <p>This is a content of Paragragh, Paragragh has 120% line height</p>
                        <p>This is another content of Paragragh</p>
                        <br/>
                    </li>
                    <li>
                        <h3>Colors</h3>
                        <ul className={CN('grid text-extra text-center')}>
                            {nodes}
                        </ul>
                        <br/>
                    </li>
                    <li>
                        <h3>Container</h3>
                        <ol>
                            <li>
                                <h4>Container is center block content</h4>
                                <p>adjust to screen width</p>
                                <br/>
                                <div className={CN('table')}>
                                    <div className="row">
                                        <div className="cell">mobile({MOBILE_VIEW})</div>
                                        <div className="cell">tablet({TABLET_VIEW})</div>
                                        <div className="cell">small desktop({SMALL_VIEW})</div>
                                        <div className="cell">large desktop({LARGE_VIEW})</div>
                                    </div>
                                </div>
                                <br/>
                            </li>
                            <li>
                                <h4>Text Container</h4>
                                <p>center text block</p>
                                <div className={CN('table')}>
                                    <div className="row head">
                                        <div className="cell">{MOBILE_VIEW}</div>
                                        <div className="cell">{TABLET_VIEW}</div>
                                        <div className="cell">{SMALL_VIEW}</div>
                                        <div className="cell">{LARGE_VIEW}</div>
                                    </div>
                                    <div className={CN('row text-extra')}>
                                        <div className="cell">100%</div>
                                        <div className="cell">100%</div>
                                        <div className="cell">{SMALL_VIEW}</div>
                                        <div className="cell">{SMALL_VIEW}</div>
                                    </div>
                                </div>
                            </li>
                        </ol>
                    </li>
                </ul>
            </div>
        );
    }
}
