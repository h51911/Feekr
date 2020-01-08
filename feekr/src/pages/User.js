import React, { Component } from 'react';
import '../css/User.scss'
class User extends Component {
    state={
        text:''
    }
    
    componentDidMount(){
        console.log(this.props.match.params.id)
        this.setState({
            text:this.props.match.params.id
        })
    }
    render() {
        return <div className='myuser'>
           <div className="inner-wrap">
            <header className="back-title user-header">
                <span>我的</span>
            </header>
            <div className="user-home nav-space"><a className="user-info table-mode" href="/user/author?id=73282&amp;pv_from=mypage">
            <div className="table-cell">
                
                <img src="https://res01.feekr.com/wap/avatar/fxb-avatar-180X180.jpg" className="avatar" />
                
            </div>
            <div className="table-cell txt-left">
    <p className="nickname">{this.state.text}</p>
                
            </div>
            <div className="table-cell iconfont icon-right-jiantou"></div>
        </a>
        
        
        <div className="menu-group">
            
            <a className="user-menu table-mode" href="/user/comment?id=73282">
                <div className="table-cell iconfont icon-email txt-right"></div>
                <div className="table-cell menu-name txt-left">消息
                    
                </div>
                <div className="table-cell iconfont icon-right-jiantou"></div>
            </a>
            
            <a className="user-menu table-mode" href="/user/favourite?id=73282">
                <div className="table-cell iconfont icon-wujiaoxingkong1 txt-right"></div>
                <div className="table-cell menu-name txt-left">收藏
                    
                </div>
                <div className="table-cell iconfont icon-right-jiantou"></div>
            </a>
            
        </div>
        
        <div className="menu-group">
            
            <a className="user-menu table-mode" href="/user/setting?id=73282">
                <div className="table-cell iconfont icon-Set_up txt-right"></div>
                <div className="table-cell menu-name txt-left">设置
                    
                </div>
                <div className="table-cell iconfont icon-right-jiantou"></div>
            </a>
            
            <a className="user-menu table-mode" href="/user/feedback?id=73282">
                <div className="table-cell iconfont icon-fankui txt-right"></div>
                <div className="table-cell menu-name txt-left">反馈
                    
                </div>
                <div className="table-cell iconfont icon-right-jiantou"></div>
            </a>
            
        </div>
        </div>
        </div>
        </div>
    }
}

export default User;