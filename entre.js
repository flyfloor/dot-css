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
import Comment from './example/Comment';
import Item from './example/Item';
import Card from './example/Card';
import Message from './example/Message';
import Progress from './example/Progress';
import Crumb from './example/Crumb';
import Loader from './example/Loader';
import Form from './example/Form';
import Other from './example/Other';

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
                        <header className={CN('basic block')}>
                            <h1>
                                <Link to="/basic" className={CN('color-deep_gray')}>
                                    <span>D</span>
                                    <i className={CN('icon dot-icon')}>invert_colors</i>
                                    <span>t css</span>
                                </Link>
                            </h1>
                        </header>
                        <div className={CN('grid')}>
                            <aside className={CN('column-3 main-aside')}>
                                <NavLink to="/basic">basic</NavLink>
                                <NavLink to="/grid">grid</NavLink>
                                <NavLink to="/button">button</NavLink>
                                <NavLink to="/icon">icon</NavLink>
                                <NavLink to="/table">table</NavLink>
                                <NavLink to="/input">input</NavLink>
                                <NavLink to="/checkbox">checkbox</NavLink>
                                <NavLink to="/label">label</NavLink>
                                <NavLink to="/text">text</NavLink>
                                <NavLink to="/image">image</NavLink>
                                <NavLink to="/comment">comment</NavLink>
                                <NavLink to="/item">item</NavLink>
                                <NavLink to="/card">card</NavLink>
                                <NavLink to="/message">message</NavLink>
                                <NavLink to="/progress">progress</NavLink>
                                <NavLink to="/crumb">crumb</NavLink>
                                <NavLink to="/loader">loader</NavLink>
                                <NavLink to="/form">form</NavLink>
                                <NavLink to="/other">other</NavLink>
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
            <div className={CN('basic fluid table intro-page absolute-center')}>
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
                        <Route path="/icon" component={Icon}></Route>
                        <Route path="/table" component={Table}></Route>
                        <Route path="/input" component={Input}></Route>
                        <Route path="/checkbox" component={Checkbox}></Route>
                        <Route path="/label" component={Label}></Route>
                        <Route path="/text" component={Text}></Route>
                        <Route path="/image" component={Image}></Route>
                        <Route path="/comment" component={Comment}></Route>
                        <Route path="/item" component={Item}></Route>
                        <Route path="/card" component={Card}></Route>
                        <Route path="/message" component={Message}></Route>
                        <Route path="/progress" component={Progress}></Route>
                        <Route path="/crumb" component={Crumb}></Route>
                        <Route path="/loader" component={Loader}></Route>
                        <Route path="/form" component={Form}></Route>
                        <Route path="/other" component={Other}></Route>
                    </Route>
                </Router>, document.getElementById('root'));




