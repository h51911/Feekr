import React, { Component } from 'react';
import '../css/Reg.scss'
import { NavLink } from 'react-router-dom';
import { findDOMNode } from 'react-dom'
import Axios from 'axios'
import qs from 'qs'
// console.log(api)
class Forget extends Component {

    constructor() {
        super()
        this.state = {
            tipText: '',
            title: '',//手机号
            pwd: ''//密码
        }
        this.getForget = this.getForget.bind(this)
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
    async getForget() {
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
                        // console.log('可以发送了！')
                        // 查询数据库是否存在该用户
                        let { data } = await Axios.get('http://localhost:2020/user/check', {
                            params: {
                                name: user
                            }
                        })
                        // console.log(data.code)
                        if (data.code) {//1  不存在  
                            this.tip('该用户不存在，请先注册！')
                        } else {

                            let params = qs.stringify({
                                name: user,
                                password: pwd
                            })
                            let { data } = await Axios.post(
                                'http://localhost:2020/user/update', params

                            )
                            // console.log(data)
                            if (data.code) {//修改成功 来到登录页面重新登录
                                // console.log('修改成功')
                                this.props.history.push('/login')//跳转到登录页
                            } else {
                                console.log('修改失败')
                            }
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
        return <div className='boxs'>
            <div className="inner-wrap register-wrap">
                <header className="back-title">
                    <NavLink to="/login" className="iconfont icon-fanhui" data-history="back"></NavLink>
                    <span className="style-title">忘记密码</span>
                </header>
                <div className="reg-container body-space-large">
                    <form className="reg-form">
                        <div className="username-wrap input-wrap">
                            <span className="iconfont icon-yonghu"></span>
                            <input type="text" className="hide" />
                            <input type="text" className="account reg-input"
                                onChange={this.changetitle}
                                value={this.state.title}
                                placeholder="请输入手机号码" data-type="cellphone" />
                        </div>
                        <div className="password-wrap input-wrap">
                            <span className="iconfont icon-mima"></span>
                            <input type="password" className="hide" />
                            <input type="password" className="pwd reg-input"
                                value={this.state.pwd}
                                onChange={this.changepwd}
                                placeholder="请设置密码（6位数以上数字或字母）" data-type="password" />
                        </div>
                        <input type="button" className="reg-submit submit-btn" value='完 成'
                            onClick={this.getForget}
                        ></input>
                    </form>
                    <div className="policy info">您已同意并愿意遵守Feekr的<span className="normal policy-btn">用户协议</span>.</div>
                </div>
            </div>
            <div className="global-alert" style={{ zIndex: 10001 }}>
                <div className="alert-content">请填写手机号码</div>
            </div>
            <div ref='hide' className="global-alert" style={{ zIndex: 10001 }}>
                <div className="alert-content" ref='hides'>{this.state.tipText}</div>
            </div>
        </div>
    }
}

export default Forget;