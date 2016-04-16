import css from './src/dot.less';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

import Button from './example/Button';
import Basic from './example/Basic';

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
                    <h2>Dot css</h2>
                </header>
                <aside>
                    <ul>
                        <li>
                            <NavLink to="/button">button</NavLink>
                        </li>
                    </ul>
                </aside>
                <artical>
                    {children}
                </artical>
            </page>
        );
    }
}


class RootPage extends Component {
    render() {
        return (
            <h2>
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
                    </Route>
                </Router>, document.getElementById('root'));




