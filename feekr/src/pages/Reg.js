import React, { Component } from 'react';
import '../css/Reg.scss'
import { NavLink } from 'react-router-dom';
// console.log(api)
class Reg extends Component {




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
                            <input type="text" className="account reg-input" placeholder="请输入手机号码" data-type="cellphone" />
                        </div>
                        <div className="password-wrap input-wrap">
                            <span className="iconfont icon-mima"></span>
                            <input type="password" className="hide" />
                            <input type="password" className="pwd reg-input" placeholder="请设置密码（6位数以上数字或字母）" data-type="password" />
                        </div>
                        <button type="submit" className="reg-submit submit-btn">注册</button>
                    </form>
                    <div className="policy info">您已同意并愿意遵守Feekr的<span className="normal policy-btn">用户协议</span>.</div>
                </div>
            </div>
            <div className="global-alert" style={{ zIndex: 10001 }}>
                <div className="alert-content">请填写手机号码</div>
            </div>
        </div>
    }
}

export default Reg;