import React, { Component } from 'react';

import '../utils/base.css'
import '../utils/icon.css'
import '../css/Weixin.css';

class Weixin extends Component {
    constructor() {
        super();
    }

    render() {
        return <section className="footer-box">
            <div className="footer-box-brand">
                <p><i className="iconfont footer-box-logo icon-feekr"></i></p>
                <p className="flex-center-v footer-box-link">
                    ©2016Feekr
        <a href="###">浙ICP备13003499</a>
                </p>
            </div>
            <div className="footer-box-vcode">
                <img src="https://m.feekr.com/resource/img/icon/feekr_code.png" />
                <p>长按二维码或添加微信：feekr_trip</p>
                <p>关注feekr小众旅行, 获取最新玩法攻略</p>
            </div>
            <div className="footer-box-btns">
                <a href="###" className="base-bg">关于Feekr</a>
                <a href="###" className="base-bg">联系我们</a>
            </div>
        </section>
    }
}

export default Weixin;