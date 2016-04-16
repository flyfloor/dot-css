import React, { Component } from 'react';
import {COLOR} from './setting';


const makeColor = (color) => {
    switch (color) {
        case 'white':
            return <div className={`background-${color}`}>{color}</div>;
        case 'black':
            return <div className={`background-${color}`}>{color}</div>;
        case 'gray':
            return <div>
                    <div className={`background-mini_${color}`}>{`mini_${color}`}</div>
                    <div className={`background-tiny_${color}`}>{`tiny_${color}`}</div>
                    <div className={`background-light_${color}`}>{`light_${color}`}</div>
                    <div className={`background-${color}`}>{color}</div>
                    <div className={`background-dark_${color}`}>{`dark_${color}`}</div>
                    <div className={`background-deep_${color}`}>{`deep_${color}`}</div>
                </div>;
        default:
            return <div>
                    <div className={`background-light_${color}`}>{`light_${color}`}</div>
                    <div className={`background-${color}`}>{color}</div>
                    <div className={`background-dark_${color}`}>{`dark_${color}`}</div>
                    <div className={`background-deep_${color}`}>{`deep_${color}`}</div>
                </div>;
    }
};

export default class Basic extends Component {
    render() {
        const nodes = COLOR.map(item => {
            return <li key={`color-${item}`}>
                        <h4>{item}</h4>
                        {makeColor(item)}
                    </li>
        });
        return (
            <ul>
                <li>
                    <h3>Fonts</h3>
                    <h1>H1</h1>
                    <h2>H2</h2>
                    <h3>H3</h3>
                    <h4>H4</h4>
                    <h5>H5</h5>
                    <h6>H6</h6>
                </li>
                <li>
                    <h3>Paragragh</h3>
                    <p>This is a content of Paragragh, Paragragh has 120% line height</p>
                    <p>This is another content of Paragragh</p>
                </li>
                <li>
                    <h3>Colors</h3>
                    <ul>
                        {nodes}
                    </ul>
                </li>
            </ul>
        );
    }
}
