import demoCss from './example/demo.less';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import {NS} from './example/setting';

import Button from './example/Button';
import Basic from './example/Basic';
import Grid from './example/Grid';
import Icon from './example/Icon';

const NavLink = (props) => {
    return (
        <Link {...props} activeClassName="active"></Link>
    );
}

class App extends Component {
    render() {
        const {children} = this.props;
        return (
            <page>
                <header>
                    <h1>Dot css</h1>
                </header>
                <div className={`${NS} grid`}>
                    <aside className={`column column-2 ${NS} padding`}>
                        <ul>
                            <li><NavLink to="/basic">basic</NavLink></li>
                            <li><NavLink to="/grid">grid</NavLink></li>
                            <li><NavLink to="/button">button</NavLink></li>
                            <li><NavLink to="/icon">icon</NavLink></li>
                        </ul>
                    </aside>
                    <artical className="column column-14">
                        {children}
                    </artical>
                </div>
            </page>
        );
    }
}


class RootPage extends Component {
    render() {
        return (
            <h2 className={`${NS} text-center`}>
                A micro css framework
            </h2>
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
                    </Route>
                </Router>, document.getElementById('root'));




