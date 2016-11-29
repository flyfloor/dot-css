import React, { Component } from 'react';
import {CN, TitleBlock} from './util';
import {NS} from './setting';

const makeList = (cn='') => {
    return (
        <ul className={CN(cn + ' list')}>
            <li className="item">
                <div className="tiny image">
                    <img src="http://braavos.me/dot-css/dist/img/avatar.png"/>
                </div>
                <div className="content">
                    <div className="header">Jerry</div>
                    <div className="extra">just push 3 commit to dot-css</div>
                </div>
            </li>
            <li className="item">
                <div className="tiny image">
                    <img src="http://braavos.me/dot-css/dist/img/img.png"/>
                </div>
                <div className="content">
                    <div className="header">Jerry</div>
                    <div className="extra">
                        珍珠丸子又名蓑衣丸子，是湖北沔阳（今仙桃市）著名的汉族小吃。其风味独特、清香细嫩、鲜香可口。珍珠丸子可以直接食用，也可以蘸料搭配着吃。珍珠丸子位在沔阳三蒸之首。将糯米淘洗并用温水浸泡，然后捞出滤干。再将加了蛋清的肉茸、鱼茸、荸荠丁、香菇末搅匀，挤成肉丸，放入糯米中滚上一层米，用手轻压表面，把一部分糯米压入肉馅中。蒸制前，铺上一层菜叶，不易粘盘。
                    </div>
                </div>
            </li>
            <li className="item">
                <div className="tiny image">
                    <img src="http://braavos.me/dot-css/dist/img/avatar.png"/>
                </div>
                <div className="content">
                    <div className="header">Jerry</div>
                    <div className="extra">
                        珍珠丸子又名蓑衣丸子，是湖北沔阳（今仙桃市）著名的汉族小吃。其风味独特
                    </div>
                </div>
            </li>
        </ul>
    )
}

export default class List extends Component {
    render() {
        return (
            <div>
                {TitleBlock('List')}
                <ul>
                    <li>
                        <h4>List</h4>
                        {makeList()}
                        <pre>
                            <code>
{`
<ul className="${CN('list')}">
    ...
    <li class="item">
        <div class="tiny image">
            <img src="http://braavos.me/dot-css/dist/img/avatar.png"/>
        </div>
        <div class="content">
            <div class="header">Jerry</div>
            <div class="extra">just push 3 commit to dot-css</div>
        </div>
    </li>
    ...
</ul>
`}                                        
                            </code>
                        </pre>
                    </li>

                    <li>
                        <h4>Ordered List</h4>
                        {makeList('ordered')}
                        <pre>
                            <code>
{`<ul class="${CN('ordered list')}">
    ...
    <li class="item"></li>
    ...
</ul>
`}                                
                            </code>
                        </pre>
                    </li>

                    <li>
                        <h4>Horizontal List</h4>
                        <ul className={CN('horizontal list')}>
                            <li className="item">
                                <div className="tiny image">
                                    <img src="http://braavos.me/dot-css/dist/img/avatar.png"/>
                                </div>
                                <div className="content">
                                    <div className="header">Jerry</div>
                                    <div className="extra">programmer</div>
                                </div>
                            </li>
                            <li className="item">
                                <div className="tiny image">
                                    <img src="http://braavos.me/dot-css/dist/img/avatar.png"/>
                                </div>
                                <div className="content">
                                    <div className="header">Jerry</div>
                                    <div className="extra">programmer</div>
                                </div>
                            </li>
                            <li className="item">
                                <div className="circle tiny image">
                                    <img src="http://braavos.me/dot-css/dist/img/avatar.png"/>
                                </div>
                                <div className="content">
                                    <div className="header">Jerry</div>
                                    <div className="extra">programmer</div>
                                </div>
                            </li>
                        </ul>
                        <ul className={CN('horizontal list')}>
                            <li className="item">
                                <div className="mini image">
                                    <img src="http://braavos.me/dot-css/dist/img/avatar.png"/>
                                </div>
                                <div className="content">
                                    Jerry
                                </div>
                            </li>
                            <li className="item">
                                <div className="mini image">
                                    <img src="http://braavos.me/dot-css/dist/img/avatar0.png"/>
                                </div>
                                <div className="content">
                                    Lilly
                                </div>
                            </li>
                            <li className="item">
                                <div className="circle mini image">
                                    <img src="http://braavos.me/dot-css/dist/img/avatar.png"/>
                                </div>
                                <div className="content">
                                    Jason
                                </div>
                            </li>
                        </ul>
                        <pre>
                            <code>
{`<ul class="${CN('horizontal list')}">
    ...
    <li class="item"></li>
    ...
</ul>
`}                                    
                            </code>
                        </pre>
                    </li>
                    <li>
                        <h4>Horizontal Ordered List</h4>
                        <ul className={CN('horizontal ordered list')}>
                            <li className="item">
                                <div className="tiny image">
                                    <img src="http://braavos.me/dot-css/dist/img/avatar.png"/>
                                </div>
                                <div className="content">
                                    <div className="header">Jerry</div>
                                    <div className="extra">programmer</div>
                                </div>
                            </li>
                            <li className="item">
                                <div className="tiny image">
                                    <img src="http://braavos.me/dot-css/dist/img/avatar.png"/>
                                </div>
                                <div className="content">
                                    <div className="header">Jerry</div>
                                    <div className="extra">programmer</div>
                                </div>
                            </li>
                            <li className="item">
                                <div className="circle tiny image">
                                    <img src="http://braavos.me/dot-css/dist/img/avatar.png"/>
                                </div>
                                <div className="content">
                                    <div className="header">Jerry</div>
                                    <div className="extra">programmer</div>
                                </div>
                            </li>
                        </ul>
                        <pre>
                            <code>
{`<ul class="${CN('horizontal ordered list')}">
...
<li class="item"></li>
...
</ul>
`}                                    
                            </code>
                        </pre>
                    </li>

                    <li>
                        <h4>Icon List</h4>
                        <ul className={CN('list')}>
                            <li className="item">
                                <i className="icon">person</i>
                                <div className="content">珍珠丸子又名蓑衣丸子</div>
                            </li>
                            <li className="item">
                                <i className="icon">school</i>
                                <div className="content">著名的汉族小吃</div>
                            </li>
                            <li className="item">
                                <i className="icon">group</i>
                                <div className="content">风味独特、清香细嫩、鲜香可口</div>
                            </li>
                        </ul>
                        <pre>
                            <code>
{`<ul class="${NS} list">
    <li class="item">
        <i class="icon">persion</i>
        <div class="content">content</div>
    </li>
    ...
</ul>`}                                
                            </code>
                        </pre>
                    </li>

                    <li>
                        <h4>Nested Ordered List</h4>
                        <ul className={CN('ordered list')}>
                            <li className="item">
                                <div className="content">珍珠丸子又名蓑衣丸子</div>
                            </li>
                            <li className="item">
                                <div className="content">著名的汉族小吃</div>
                            </li>
                            <li className="item">
                                <div className="content">风味独特、清香细嫩、鲜香可口</div>
                                <ul className="ordered list">
                                    <li className="item">
                                        <div className="content">珍珠丸子又名蓑衣丸子</div>
                                    </li>
                                    <li className="item">
                                        <div className="content">著名的汉族小吃</div>
                                    </li>
                                    <li className="item">
                                        <div className="content">风味独特、清香细嫩、鲜香可口</div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <pre>
                            <code>
{`<ul class="${NS} ordered list">
    <li class="item">
        <div class="content">content</div>
    </li>
    <li class="item">
        <div class="conetent"></div>
        <ul class="ordered list">
            <li class="item">
                <div class="content">content</div>
            </li>
            ...
        </ul>
    </li>
    ...
</ul>`}                                  
                            </code>
                        </pre>
                    </li>
                </ul>
            </div>
        );
    }
}
