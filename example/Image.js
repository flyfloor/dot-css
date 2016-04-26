import React, { Component } from 'react';
import {CN} from './util';

export default class Image extends Component {
    render() {
        return (
            <div>
                <h2>Image</h2>
                <blockquote>
                    <q>This part is about image</q>
                </blockquote>
                <ul>
                    <li>
                        <h3>Image</h3>
                        <div className={CN('image')}>
                            <img src="http://braavos.me/dot-css/dist/img/img.png"/>
                        </div>
                    </li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        );
    }
}
