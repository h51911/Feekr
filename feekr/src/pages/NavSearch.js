import React, { Component } from 'react';

import '../utils/base.css';
import '../utils/icon.css';
import '../css/NavSearch.css';
import Classify from '../api/Classify';

class NavSearch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            display: 'none',
            num: [],
            num2: [],
            num3: [],
        }

        this.changeTitle = this.changeTitle.bind(this);
        this.additem = this.additem.bind(this);
    }

    async componentDidMount() {
        let res = await Classify.get({

        })
        // console.log(res);

        let data = res.data.result.style;
        let data2 = res.data.result.city;
        let data3 = res.data.result.sort;
        // console.log(data2);

        this.setState({
            num: data,
            num2: data2,
            num3: data3
        })
        // console.log(this.state);
    }

    changeTitle(event) {
        this.setState({
            title: event.target.value,
        })
        // console.log(this.title.value)
        if (this.title.value) {
            this.setState({
                display: 'block'
            })
            // console.log(6666)
        } else {
            this.setState({
                display: 'none'
            })
        }
    }
    additem() {
        // 清空并自动获得焦点
        this.setState({
            title: ''
        });

        // 节点操作
        this.title.focus();
    }
    render() {
        let { num, num2, num3 } = this.state;
        return <div>
            <div className="nav-search-main">
                <div className="search-main-fix nav-common-layout-fix">
                    <form className="search-gate-box common-white-sapce">
                        <label className="search-gate-entrance">
                            <i className="iconfont icon-sousuo search-gate-icon"></i>
                            <input id="search" type="search" placeholder="搜索目的地/关键词" className="search-gate-input"
                                ref={(ele) => this.title = ele}
                                // ref={this.title}
                                value={this.state.title}
                                onChange={this.changeTitle} />
                            <i onClick={this.additem} style={{ display: this.state.display }} className="iconfont icon-guanbi search-gate-clear"></i>
                        </label>
                    </form>
                    <section className="search-select-box">
                        <div className="search-select-options">
                            <button className="search-select-items">分类
                                <i className="iconfont icon-arrowup"></i>
                            </button>
                            <button className="search-select-items">目的地
                                <i className="iconfont icon-arrowup"></i>
                            </button>
                            <button className="search-select-items search-select-no-border">排序
                                <i className="iconfont icon-arrowup"></i>
                            </button>
                        </div>
                        <ul className="search-select-detail search-select-more common-scroll-y" style={{ display: 'none' }}>
                            <li className="search-select-label base-color">
                                全部分类
                            </li>
                            {
                                num.map(item => {
                                    return <li className="search-select-label" key={item.id}>
                                        {item.name}
                                    </li>
                                })
                            }
                        </ul>
                        <ul className="search-select-detail search-select-more common-scroll-y" style={{ display: 'none' }}>
                            {
                                num3.map(item => {
                                    return <li className="search-select-label" key={item.id}>
                                        {item.name}
                                    </li>
                                })
                            }
                        </ul>
                        <div className="search-select-detail search-select-sub-box" style={{ display: 'none' }}>
                            <ul className="search-select-sub">
                                <li className="search-select-label base-color">
                                    全部
                                </li>
                                <li className="search-select-label">
                                    国内
                                </li>
                                <li className="search-select-label">
                                    国外
                                </li>
                            </ul>
                            <ul className="search-select-sub-detail search-select-more common-scroll-y">
                                {
                                    num2.map(item => {
                                        return <li className="search-select-label search-select-sub-label" key={item.id}>
                                            {item.city}
                                            <span className="search-select-area"> ({item.area})</span>
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                    </section>
                </div>
                <section>
                    <section>
                        <ul class="search-result-product">
                            <li class="">
                                <a href="###">
                                    <img src="https://p-product-pic.feekr.com/2019/0924/3bc8d9bc.jpg!750X422" class=" lazyloaded" />
                                    <h3>单凭美食就值得回头的酒店</h3>
                                    <h4>食在广州.住临珠江边的白色建筑.广州白天鹅宾馆3天2晚尊享休闲美食之旅</h4>
                                    <span>¥2888</span>
                                </a>
                            </li>
                        </ul>
                    </section>
                </section>
            </div>
        </div>
    }
}

export default NavSearch;