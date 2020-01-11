import React, { Component } from 'react';
import '../css/Reg.scss'
import { NavLink } from 'react-router-dom';
import { findDOMNode } from 'react-dom'
// import Api from '../api/Reg'
import qs from 'qs'
import Axios from 'axios';
// console.log(api)
class Reg extends Component {
    constructor() {
        super()
        this.state = {
            title: '',//手机号
            tipText: '',
            pwd: ''//密码
        }
        this.changetitle = this.changetitle.bind(this)
        this.regs = this.regs.bind(this)
        this.changepwd = this.changepwd.bind(this)
    }

    changetitle(event) {//手机号码
        // console.log(event.target.value)
        this.setState({
            title: event.target.value
        })
    }
    changepwd(event) {//密码
        // console.log(event.target.value)
        this.setState({
            pwd: event.target.value
        })
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
    async regs() {
        /* 
            1.先验证手机号码是否为空
            2.再验证密码是否为空
            3.再验证手机号码正则
            4.再验证密码正则
            5.发送ajax
        */
        let user = this.state.title.trim()
        let pwd = this.state.pwd.trim()
        if (user) {//验证手机不为空
            // console.log('不为空')
            if (pwd) {//验证密码不为空
                const reg = /^\d{11}$/;
                let res = reg.test(user)//验证手机正则
                if (res) {//手机正则验证通过
                    const regDwd = /^[a-zA-Z0-9]{6,}$/;
                    let resDwd = regDwd.test(pwd)//验证密码正则
                    if (resDwd) {//密码正则通过
                        //发送axios
                        console.log('可以发送了！')
                        // 查询数据库是否存在该用户
                        let { data } = await Axios.get('http://localhost:2020/user/check', {
                            params: {
                                name: user
                            }
                        })
                        // console.log(data.code)
                        if (data.code) {//1  可以注册
                            let params = qs.stringify({
                                name: user,
                                password: pwd
                            })
                            let { data } = await Axios.post(
                                'http://localhost:2020/user/reg', params

                            )
                            console.log(data)
                            if (data.code) {//注册成功 直接发送ajax登录 并且获取token 存入本地浏览器 并且跳到用户页
                                let { data } = await Axios.get('http://localhost:2020/user/login', {
                                    params: {
                                        name: user,
                                        password: pwd,
                                        keep: true//生成token
                                    }
                                })
                                console.log(data)
                                if (data.code) {//1  可以登录 
                                    console.log('yes')
                                    this.props.history.push('/user/' + user)//跳转到用户页
                                    //存token在本地

                                    let userToken = {
                                        user,
                                        Authorization: data.authorization
                                    }
                                    let str = JSON.stringify(userToken);//把对象转为字符串
                                    localStorage.setItem('authorization', str)//存token在本地

                                }
                            }
                        } else {
                            this.tip('手机号已经被注册')
                        }

                    } else {
                        this.tip('请设置密码（6位数以上数字或字母）')
                    }
                } else {//手机正则验证没通过
                    this.tip('请填写正确的手机号码')
                }
            } else {
                this.tip('请设置密码');
            }


        } else {//提示信息
            // console.log('为空')
            this.tip('请填写手机号码');
        }
    }

    render() {
        return <div className='boxs'>
            <div className="inner-wrap register-wrap">
                <header className="back-title">
                    <NavLink to="/login" className="iconfont icon-fanhui" data-history="back"></NavLink>
                    <span className="style-title">注册</span>
                </header>
                <div className="reg-container body-space-large">
                    <form className="reg-form">
                        <div className="username-wrap input-wrap">
                            <span className="iconfont icon-yonghu"></span>
                            <input type="text" className="hide" />
                            <input
                                value={this.state.title}
                                // ref={(ele) => this.title = ele}
                                onChange={this.changetitle}
                                type="text" className="account reg-input" placeholder="请输入手机号码" data-type="cellphone" />
                        </div>
                        <div className="password-wrap input-wrap">
                            <span className="iconfont icon-mima"></span>
                            <input type="password" className="hide" />
                            <input
                                value={this.state.pwd}
                                onChange={this.changepwd}
                                type="password" className="pwd reg-input" placeholder="请设置密码（6位数以上数字或字母）" data-type="password" />
                        </div>
                        <button
                            onClick={this.regs}
                            type="button" className="reg-submit submit-btn">注册</button>
                    </form>
                    <div className="policy info">您已同意并愿意遵守Feekr的<span className="normal policy-btn">用户协议</span>.</div>
                </div>
            </div>
            <div ref='hide' className="global-alert" style={{ zIndex: 10001 }}>
                <div className="alert-content" ref='hides'>{this.state.tipText}</div>
            </div>
        </div>
    }
}

export default Reg;