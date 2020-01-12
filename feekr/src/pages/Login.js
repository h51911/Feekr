import React, { Component } from 'react';
import '../css/Login.scss'
import { NavLink } from 'react-router-dom';
import { findDOMNode } from 'react-dom'
import Axios from 'axios'
class Login extends Component {
    constructor() {
        super()
        this.state = {
            tipText: '',
            title: '',//手机号
            pwd: ''//密码
        }
        this.getlogin = this.getlogin.bind(this)
    }
    changetitle = (event) => {//手机号码
        // console.log(event.target.value)
        this.setState({
            title: event.target.value
        })
    }
    changepwd = (event) => {//密码
        // console.log(event.target.value)
        this.setState({
            pwd: event.target.value
        })
    }
    componentDidMount() {

    }
    async getlogin() {
        let user = this.state.title.trim()
        let pwd = this.state.pwd.trim()
        if (user) {//验证帐号不为空
            // console.log('不为空') 
            if (pwd) {//验证密码不为空  
                // 发送axios  验证用户名字和密码是否正确
                let { data } = await Axios.get('http://localhost:2020/user/login', {
                    params: {
                        name: user,
                        password: pwd,
                        keep: true//生成token
                    }
                })
                // console.log(data)
                if (data.code) {//1  可以登录 
                    // console.log('yes')
                    //存token在本地
                    let userToken = {
                        user,
                        Authorization: data.authorization
                    }
                    let str = JSON.stringify(userToken);//把对象转为字符串
                    localStorage.setItem('authorization', str)//存token在本地
                    this.props.history.push('/user/' + user)//跳转到用户页




                } else {
                    this.tip('用户名或密码错误！')
                }
            } else {
                this.tip('密码不能为空！');
            }
        } else {//提示信息
            // console.log('为空')
            this.tip('帐号不能为空！');
        }
    }
    tip(message) {//提示信息
        findDOMNode(this.refs.hide).className = 'global-alert alert-show'
        findDOMNode(this.refs.hides).className = 'alert-content alert-shows'
        findDOMNode(this.refs.hides).className = 'alert-content alert-shows'
        findDOMNode(this.refs.hide).style.zIndex = '100000'
        setTimeout(() => {
            findDOMNode(this.refs.hide).className = 'global-alert'
            findDOMNode(this.refs.hides).className = 'alert-content'
        }, 1000); //1秒后消失
        this.setState({
            tipText: message
        })
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
                        <span className="iconfont icon-yonghu"></span><input type="text" className="account login-input"
                            onChange={this.changetitle}
                            value={this.state.title}
                            placeholder="请输入手机号" data-type="username" />
                    </div>
                    <div className="password-wrap input-wrap">
                        <span className="iconfont icon-mima"></span><input type="password"
                            value={this.state.pwd}
                            onChange={this.changepwd}
                            className="pwd login-input" placeholder="请输入密码" data-type="password" />
                    </div>
                    <input type="button" className="login-submit" onClick={this.getlogin} value='登录'></input>
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
            <div ref='hide' className="global-alert" style={{ zIndex: 10001 }}>
                <div className="alert-content" ref='hides'>{this.state.tipText}</div>
            </div>
        </div>
    }
}

export default Login;