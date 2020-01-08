import React, { Component } from 'react';
import '../css/Exit.scss'
class Exit extends Component {
    render() {
        return <div class='exit'>
            <div class="inner-wrap">
                <header class="back-title user-header">
                    <span>设置</span>
                    <a href="/user" class="iconfont icon-fanhui"></a>
                </header>
                <div class="menu">

                    <a class="user-menu table-mode" href="/user/setInfo?id=73282">

                        <div class="table-cell menu-name txt-left">个人设置</div>
                        <div class="table-cell iconfont icon-right-jiantou"></div>
                    </a>


                    <a class="user-menu table-mode" href="/about">

                        <div class="table-cell menu-name txt-left">关于Feekr</div>
                        <div class="table-cell iconfont icon-right-jiantou"></div>
                    </a>
                </div>
                <a class="logout-btn" href="">退出</a>
            </div>
        </div>
    }
}

export default Exit;