import React, { Component } from 'react';
import {CN, TitleBlock} from './util';
import {NS} from './setting';

const makeMenu = (cn='') => {
    return (
        <div className={CN(`${cn} menu`)}>
            <a href="javascript:;" className="item active">home</a>
            <a href="javascript:;" className="item">blog</a>
            <a href="javascript:;" className="item">about</a>
            <div className="right menu">
                <div className="item">
                    <div className={CN('input')}>
                        <input type="text"/>
                        <div className="action">
                            <button>search</button>
                        </div>
                    </div>
                </div>
                <div className={CN('item')}>logout</div>
            </div>
        </div>
    )
}

export default class Menu extends Component {
    render() {
        return (
            <div>
                {TitleBlock('Menu')}
                <p className={`${NS} warning icon message`}>
                    <i className="icon">warning</i>
                    <div className="content">experimental</div>
                </p>
                <ul>
                    <li>
                        <h4>Default menu</h4>
                        {makeMenu()}
                        <pre>
                            <code>
{` <div class="${NS} menu">
    <a href="#" class="item active">home</a>
    <a href="#" class="item">blog</a>
    <a href="#" class="item">about</a>
    <div class="right menu">
        <div class="item">
            <div class="${NS} input">
                <input type="text"/>
                <div class="action">
                    <button>search</button>
                </div>
            </div>
        </div>
        <div class="${NS} item">logout</div>
    </div>
</div>`}        
                            </code>
                        </pre>
                        <br/>

                        <h4>colored menu</h4>
                        {makeMenu('green')}
                        <pre>
                            <code>
{` <div class="${NS} green menu">
    <a href="#" class="item active">home</a>
    <a href="#" class="item">blog</a>
    <a href="#" class="item">about</a>
    <div class="right menu">
        <div class="item">
            <div class="${NS} input">
                <input type="text"/>
                <div class="action">
                    <button>search</button>
                </div>
            </div>
        </div>
        <div class="${NS} item">logout</div>
    </div>
</div>`}        
                            </code>
                        </pre>
                        <br/>
                    </li>
                    <li>
                        <h4>Angled menu</h4>
                        {makeMenu('angled')}

                        <pre>
                            <code>
{` <div class="${NS} angled menu">
    <a href="#" class="item active">home</a>
    <a href="#" class="item">blog</a>
    <a href="#" class="item">about</a>
    <div class="right menu">
        <div class="item">
            <div class="${NS} input">
                <input type="text"/>
                <div class="action">
                    <button>search</button>
                </div>
            </div>
        </div>
        <div class="${NS} item">logout</div>
    </div>
</div>`}        
                            </code>
                        </pre>
                        <br/>
                    </li>
                    <li>
                        <h4>Lined menu</h4>
                        {makeMenu('lined')}

                        <pre>
                            <code>
{` <div class="${NS} lined menu">
    <a href="#" class="item active">home</a>
    <a href="#" class="item">blog</a>
    <a href="#" class="item">about</a>
    <div class="right menu">
        <div class="item">
            <div class="${NS} input">
                <input type="text"/>
                <div class="action">
                    <button>search</button>
                </div>
            </div>
        </div>
        <div class="${NS} item">logout</div>
    </div>
</div>`}        
                            </code>
                        </pre>
                        <br/>
                        <h4>colored menu</h4>
                        {makeMenu('red lined')}

                        <pre>
                            <code>
{` <div class="${NS} red lined menu">
    <a href="#" class="item active">home</a>
    <a href="#" class="item">blog</a>
    <a href="#" class="item">about</a>
    <div class="right menu">
        <div class="item">
            <div class="${NS} input">
                <input type="text"/>
                <div class="action">
                    <button>search</button>
                </div>
            </div>
        </div>
        <div class="${NS} item">logout</div>
    </div>
</div>`}        
                            </code>
                        </pre>
                        <br/>
                    </li>
                    <li>
                        <h4>Menu bar</h4>
                        {makeMenu('bar')}

                        <pre>
                            <code>
{` <div class="${NS} bar menu">
    <a href="#" class="item active">home</a>
    <a href="#" class="item">blog</a>
    <a href="#" class="item">about</a>
    <div class="right menu">
        <div class="item">
            <div class="${NS} input">
                <input type="text"/>
                <div class="action">
                    <button>search</button>
                </div>
            </div>
        </div>
        <div class="${NS} item">logout</div>
    </div>
</div>`}        
                            </code>
                        </pre>
                        <br/>
                        <h4>colored menu</h4>
                        {makeMenu('blue bar')}

                        <pre>
                            <code>
{` <div class="${NS} blue bar menu">
    <a href="#" class="item active">home</a>
    <a href="#" class="item">blog</a>
    <a href="#" class="item">about</a>
    <div class="right menu">
        <div class="item">
            <div class="${NS} input">
                <input type="text"/>
                <div class="action">
                    <button>search</button>
                </div>
            </div>
        </div>
        <div class="${NS} item">logout</div>
    </div>
</div>`}        
                            </code>
                        </pre>
                        <br/>
                    </li>
                    <li>
                        <h4>Vertical menu</h4>
                        <div className={CN('vertical menu')}>
                            <a href="javascript:;" className="item active">home</a>
                            <a href="javascript:;" className="item">blog</a>
                            <a href="javascript:;" className="item">about</a>
                        </div>
                        <br/>

                        <pre>
                            <code>
{` <div class="${NS} vertical menu">
    <a href="#" className="item active">home</a>
    <a href="#" className="item">blog</a>
    <a href="#" className="item">about</a>
</div>`}        
                            </code>
                        </pre>
                        <br/>
                    </li>
                    <li>
                        <h4>Lined vertical menu</h4>
                        <div className={CN('vertical lined menu')}>
                            <a href="javascript:;" className="item active">home</a>
                            <a href="javascript:;" className="item">blog</a>
                            <a href="javascript:;" className="item">about</a>
                        </div>
                        <br/>

                        <pre>
                            <code>
{` <div class="${NS} vertical lined menu">
    <a href="#" className="item active">home</a>
    <a href="#" className="item">blog</a>
    <a href="#" className="item">about</a>
</div>`}        
                            </code>
                        </pre>
                        <br/>
                    </li>
                </ul>
            </div>
        );
    }
}
