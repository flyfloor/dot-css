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
import Text from './example/Text';
import Image from './example/Image';
import Other from './example/Other';
import Advanced from './example/Advanced';

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
            <page className={CN('container')}>
                {pathname !== '/' ? 
                    <div>
                        <header className={CN('padding')}>
                            <h1>
                                <span>D</span>
                                <i className={CN('icon dot-icon')}>invert_colors</i>
                                <span>t css</span>
                            </h1>
                        </header>
                        <div className={CN('grid')}>
                            <aside className={CN('column column-3 padding main-aside')}>
                                <NavLink className={CN('block')} to="/basic">basic</NavLink>
                                <NavLink className={CN('block')} to="/grid">grid</NavLink>
                                <NavLink className={CN('block')} to="/button">button</NavLink>
                                <NavLink className={CN('block')} to="/icon">icon</NavLink>
                                <NavLink className={CN('block')} to="/table">table</NavLink>
                                <NavLink className={CN('block')} to="/input">input</NavLink>
                                <NavLink className={CN('block')} to="/checkbox">checkbox</NavLink>
                                <NavLink className={CN('block')} to="/label">label</NavLink>
                                <NavLink className={CN('block')} to="/text">text</NavLink>
                                <NavLink className={CN('block')} to="/image">image</NavLink>
                                <NavLink className={CN('block')} to="/advanced">advanced</NavLink>
                                <NavLink className={CN('block')} to="/other">other</NavLink>
                            </aside>
                            <artical className="column column-13 main-content">
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
                        <h1 className={CN('field')}>
                            <span>D</span>
                            <i className={CN('icon dot-icon')}>invert_colors</i>
                            <span>t Css</span>
                        </h1>
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
                        <Route path="/text" component={Text}></Route>
                        <Route path="/image" component={Image}></Route>
                        <Route path="/other" component={Other}></Route>
                        <Route path="/advanced" component={Advanced}></Route>
                    </Route>
                </Router>, document.getElementById('root'));




