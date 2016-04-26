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
                        <div className={CN('mini image')}>
                            <img src="http://braavos.me/dot-css/dist/img/img.png"/>
                        </div>
                        <div className={CN('tiny image')}>
                            <img src="http://braavos.me/dot-css/dist/img/img.png"/>
                        </div>
                        <div className={CN('small image')}>
                            <img src="http://braavos.me/dot-css/dist/img/img.png"/>
                        </div>
                        <div className={CN('middle image')}>
                            <img src="http://braavos.me/dot-css/dist/img/img.png"/>
                        </div>
                        <div className={CN('large image')}>
                            <img src="http://braavos.me/dot-css/dist/img/img.png"/>
                        </div>
                        <div className={CN('big image')}>
                            <img src="http://braavos.me/dot-css/dist/img/img.png"/>
                        </div>
                        <div className={CN('huge image')}>
                            <img src="http://braavos.me/dot-css/dist/img/img.png"/>
                        </div>
                        <h4>Round image</h4>
                        <div className={CN('round image')}>
                            <img src="http://braavos.me/dot-css/dist/img/img.png"/>
                        </div>
                    </li>
                    <li>
                        <h3>Circle image</h3>
                        <h4>Default circle image</h4>
                        <div className={CN('circle tiny image')}>
                            <img src="http://braavos.me/dot-css/dist/img/avatar.png"/>
                        </div>
                        <h4>Landscape circle image</h4>
                        <div className={CN('circle small landscape image')}>
                            <img src="http://braavos.me/dot-css/dist/img/img.png"/>
                        </div>
                        <h4>Portrait circle image</h4>
                        <div className={CN('circle small portrait image')}>
                            <img src="http://braavos.me/dot-css/dist/img/img0.png"/>
                        </div>
                    </li>
                    <li></li>
                </ul>
            </div>
        );
    }
}
