import React, { Component } from 'react';
import '../css/Exit.scss'
class Exit extends Component {

    gotoback = (id) => {//点击退出 按钮 来到login  并且清除token
        //退出
        localStorage.removeItem('authorization')
        this.props.history.push(id)
    }
    render() {
        // console.log(this.props)
        return <div className='exit'>
            <div className="inner-wrap">
                <header className="back-title user-header">
                    <span>设置</span>
                    <div className="iconfont icon-fanhui" onClick={this.gotoback.bind(null, `/user/${this.props.match.params.id}`)}></div>
                </header>
                <div className="menu">

                    <a className="user-menu table-mode" href="/user/setInfo?id=73282">

                        <div className="table-cell menu-name txt-left">个人设置</div>
                        <div className="table-cell iconfont icon-right-jiantou"></div>
                    </a>


                    <a className="user-menu table-mode" href="/about">

                        <div className="table-cell menu-name txt-left">关于Feekr</div>
                        <div className="table-cell iconfont icon-right-jiantou"></div>
                    </a>
                </div>
                <div className="logout-btn" onClick={this.gotoback.bind(null, '/login')}>退出</div>
            </div>
        </div>
    }
}

export default Exit;