import React, { Component } from 'react';
import {COLORS} from './setting';
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
                <ul>
                    <li>
                        <h3>The titles, H1 ~ H6</h3>
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
                        <ul className={CN('grid grid-8 text-extra text-center')}>
                            {nodes}
                        </ul>
                        <br/>
                    </li>
                </ul>
            </div>
        );
    }
}
