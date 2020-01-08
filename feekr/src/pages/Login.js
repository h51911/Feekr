import React, { Component } from 'react';
import '../css/Login.scss'
import { NavLink } from 'react-router-dom';
class Login extends Component {
    componentDidMount() {

    }
    render() {
        // console.log('login', this.props)
        return <div className='box'>
            <div className=" tablecell">
                <div className="logo">
                    <p className="iconfont icon-feekr"></p>
                </div>
                <form className="login-form">
                    <div className="username-wrap input-wrap">
                        <span className="iconfont icon-yonghu"></span><input type="text" className="account login-input" placeholder="请输入邮箱或手机号" data-type="username" />
                    </div>
                    <div className="password-wrap input-wrap">
                        <span className="iconfont icon-mima"></span><input type="password" className="pwd login-input" placeholder="请输入密码" data-type="password" />
                    </div>
                    <button type="submit" className="login-submit">登录</button>
                </form>
                <div className="go-reg clearfix">
                    <NavLink to="/forget" className="pull-left">忘记密码</NavLink><NavLink to="/reg" className="pull-right">快速注册</NavLink>
                </div>
                <div className="login-third-wrap">
                    <div className="third-title table-mode">
                        <div className="table-cell"><span className="line"></span></div>
                        <div className="table-cell title">使用第三方账号登录</div>
                        <div className="table-cell"><span className="line"></span></div>
                    </div>
                    <div className="login-list">
                        <a className="thirdparty zone-login" href="/login/oauth/source/2&amp;return=https%3A%2F%2Fwap.feekr.com%2Fuser%3Fpv_from%3Dnavguide" target="_parent" title="使用腾讯QQ"><span className="iconfont icon-qq"></span></a>
                        <a className="thirdparty weibo-login" href="/login/oauth/source/1&amp;return=https%3A%2F%2Fwap.feekr.com%2Fuser%3Fpv_from%3Dnavguide" target="_parent" title="使用新浪微博">
                            <span className="iconfont icon-weibo"></span></a>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Login;