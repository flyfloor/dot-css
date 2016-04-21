import demoCss from './example/demo.less';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import {CN} from './example/util';

import Button from './example/Button';
import Basic from './example/Basic';
import Grid from './example/Grid';
import Icon from './example/Icon';
import Table from './example/Table';
import Input from './example/Input';
import Checkbox from './example/Checkbox';
import Label from './example/Label';

const NavLink = (props) => {
    return (
        <Link {...props} activeClassName="active"></Link>
    );
}

class App extends Component {
    render() {
        const {children} = this.props;
        const {pathname} = this.props.location;
        return (
            <page>
                {pathname !== '/' ? 
                    <div>
                        <header>
                            <h1>Dot css</h1>
                        </header>
                        <div className={CN('grid')}>
                            <aside className={CN('column column-2 padding')}>
                                <ul>
                                    <li><NavLink to="/basic">basic</NavLink></li>
                                    <li><NavLink to="/grid">grid</NavLink></li>
                                    <li><NavLink to="/button">button</NavLink></li>
                                    <li><NavLink to="/icon">icon</NavLink></li>
                                    <li><NavLink to="/table">table</NavLink></li>
                                    <li><NavLink to="/input">input</NavLink></li>
                                    <li><NavLink to="/checkbox">checkbox</NavLink></li>
                                    <li><NavLink to="/label">label</NavLink></li>
                                </ul>
                            </aside>
                            <artical className="column column-14">
                                {children}
                            </artical>
                        </div>
                    </div>
                    : <RootPage/>
                }
            </page>
        );
    }
}


class RootPage extends Component {
    render() {
        return (
            <div className={CN('basic table intro-page absolute-center')}>
                <div className="row">
                    <div className="cell">
                        <h1 className={CN('field')}>Dot Css</h1>
                        <p className={CN('field')}>A Micro Css Scaffold</p>
                        <Link to="/basic" className={CN('red button')}>see more</Link>
                    </div>
                </div>
            </div>
        );
    }
}



ReactDOM.render(<Router history={hashHistory}>
                    <Route path="/" component={App}>
                        <IndexRoute component={RootPage}/>
                        <Route path="/button" component={Button}></Route>
                        <Route path="/basic" component={Basic}></Route>
                        <Route path="/grid" component={Grid}></Route>
                        <Route path="/Icon" component={Icon}></Route>
                        <Route path="/Table" component={Table}></Route>
                        <Route path="/Input" component={Input}></Route>
                        <Route path="/Checkbox" component={Checkbox}></Route>
                        <Route path="/Label" component={Label}></Route>
                    </Route>
                </Router>, document.getElementById('root'));




