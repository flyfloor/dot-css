import React, { Component } from 'react';
import {CN} from './util';
import {NS} from './setting';

const makeImage = (cn) => {
    return  <div>
                <h4>{`${cn} size image`}</h4>
                <div className={CN(`${cn} image`)}>
                    <img src="http://braavos.me/dot-css/dist/img/img.png"/>
                </div>
            </div>
};

export default class Image extends Component {
    render() {
        return (
            <div>
                <h2>Image</h2>
                <blockquote className={CN('blockquote')}>
                    <p>This part is about image</p>
                </blockquote>
                <pre>
                    <p>Use in two ways</p>
                    <ol>
                        <li>{`<img src="image.png" class="${NS} image"/>`}</li>
                        <li>
                            <div>{`<div class="${NS} image">`}</div>
                            <div>{`    <img src="image.png"/>`}</div>
                            <div>{`</div>`}</div>
                        </li>
                    </ol>
                </pre>
                <ul>
                    <li>
                        <h3>Image</h3>
                        <img src="http://braavos.me/dot-css/dist/img/img.png" className={CN('mini image')}/>
                        {makeImage('tiny')}
                        {makeImage('small')}
                        {makeImage('middle')}
                        {makeImage('large')}
                        {makeImage('big')}
                        {makeImage('huge')}
                        {makeImage('massive')}
                        <h4>Round border radius image</h4>
                        <div className={CN('round image')}>
                            <img src="http://braavos.me/dot-css/dist/img/img0.png"/>
                        </div>
                        <h4>Fluid image</h4>
                        <div className={CN('fluid image')}>
                            <img src="http://braavos.me/dot-css/dist/img/img.png"/>
                        </div>
                        <br/>
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
                </ul>
            </div>
        );
    }
}
