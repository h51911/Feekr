import React, { Component } from 'react';
import { NavLink, } from 'react-router-dom';
import { findDOMNode } from 'react-dom'


import '../css/Nav.scss'
class Nav extends Component {

    componentDidUpdate() {

        if (this.props.path == '/login' || this.props.path == '/reg' || this.props.path == '/forget' || this.props.path.indexOf('/guide/')) {
            // console.log(findDOMNode(this.refs.comment));
            findDOMNode(this.refs.comment).style.display = 'none'
        } else {
            findDOMNode(this.refs.comment).style.display = 'block'
        }

    }
    componentDidMount() {

        if (this.props.path == '/login' || this.props.path == '/reg' || this.props.path == '/forget' || this.props.path.indexOf('/guide/')) {
            // console.log(findDOMNode(this.refs.comment));
            findDOMNode(this.refs.comment).style.display = 'none'
        } else {
            findDOMNode(this.refs.comment).style.display = 'block'
        }

    }
    render() {

        // console.log('nav', this.props.path.indexOf('/guide/'))
        return <>
            <div className="nav" ref='comment' style={{ display: 'block' }}>
                <nav className="nav-wrap table-mode">
                    <div className="table-cell">
                        <NavLink to='/home' className=" nav-menu nav-0 v-link-active" href="/?pv_from=navindex" activeStyle={{ color: '#1abc9c' }}>
                            <span className="iconfont icon-shouyepressed"></span>
                            <span className="nav-name">首页</span>
                        </NavLink>
                    </div>
                    <div className="table-cell">
                        <NavLink to='/dujia' className="nav-menu nav-1" href="https://m.feekr.com?pv_from=navindex" activeStyle={{ color: '#1abc9c' }}>
                            <span className="iconfont icon-0040dujia"></span>
                            <span className="nav-name">度假</span>
                        </NavLink>
                    </div>
                    <div className="table-cell">
                        <NavLink to='/gonglve' className="nav-menu nav-2" href="/guide/index?pv_from=navindex" activeStyle={{ color: '#1abc9c' }} >
                            <span className="iconfont icon-gongluenormal"></span>
                            <span className="nav-name">攻略</span>
                        </NavLink>
                    </div>
                    <div className="table-cell">
                        <NavLink to='/login' className="nav-menu nav-3" href="/user?pv_from=navindex" activeStyle={{ color: '#1abc9c' }}>
                            <span className="iconfont icon-wodenormal"></span>
                            <span className="nav-name">我的</span>
                        </NavLink>
                    </div>

                </nav>
            </div>
        </>
    }
}

export default Nav;