import React, { Component } from 'react';
import {ICONS} from './setting';
import {CN} from './util';
import {NS} from './setting';


export default class Icon extends Component {
    constructor(props){
        super(props);
        this.state = {
            display: 'account_circle'
        };
    }
    
    handleClick(icon){
        this.setState({
            display: icon
        });
    }

    makeIcons(){
        return (
            <ul className={CN('grid grid-5 text-center text-extra')}>
                {ICONS.map(icon => {
                    return <li key={icon} onClick={() => this.handleClick(icon)} className={CN('column padding truncate field icon-item')}>
                                <i className={CN('icon')}>{icon}</i>
                                <p>{icon}</p>
                            </li>
                })}
            </ul>
        );
    };
    render() {
        return (
            <div className="icon-example">
                <h2>Icon</h2>
                <blockquote>
                    <p>This part is the Icons dot css use, <span className={CN('color-brown')}>from Google's material icons, <a href="https://design.google.com/icons/" target="_blank">Google icons</a></span></p>
                </blockquote>
                <pre>
                    <code>
                        &lt;i class="{NS} icon"&gt;{this.state.display}&lt;/i&gt;
                    </code>
                </pre>
                {this.makeIcons()}
                <br/>
                <h4>Colored icon</h4>
                <div className={CN('grid grid-10')}>
                    <div className={CN('column padding')}>
                        <i className={CN('color-red icon')}>favorite</i>
                    </div>
                    <div className={CN('column padding')}>
                        <i className={CN('color-green icon')}>all_inclusive</i>
                    </div>
                </div>
            </div>
        );
    }
}
