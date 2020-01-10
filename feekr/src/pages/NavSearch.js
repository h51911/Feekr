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
            display2: 'none',
            display3: 'none',
            display4: 'none',
            isok: false,
            isok2: false,
            isok3: false,
            num: [],
            num2: [],
            num3: [],
            num4: []
        }

        this.changeTitle = this.changeTitle.bind(this);
        this.additem = this.additem.bind(this);
        this.changelist = this.changelist.bind(this);
        this.changelists = this.changelists.bind(this);
        this.changelistsx = this.changelistsx.bind(this);
    }

    async componentDidMount() {
        let res = await Classify.gets({
            shopid: 'FK'
        })
        // console.log(res);

        let res2 = await Classify.datas({
            page: 1,
            shopid: 'FK'
        })
        // console.log(res2);
        let data = res.data.result.style;
        let data2 = res.data.result.city;
        let data3 = res.data.result.sort;
        let list = res2.data.result.list;
        // console.log(data2);

        this.setState({
            num: data,
            num2: data2,
            num3: data3,
            num4: list
        })
        // console.log(this.state);
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = (event) => {
        //滚动条高度
        let scrollTop = document.documentElement.scrollTop;  //滚动条滚动高度
        console.log(scrollTop);
        if (scrollTop == 5000) {
            setTimeout(async () => {
                let res2 = await Classify.datas({
                    page: 2,
                    shopid: 'FK'
                })
                let list = res2.data.result.list;
                console.log(list)
                this.setState({
                    num4: this.state.num4.concat(list),
                })
            }, 500);
        } else if (scrollTop == 10000) {

            setTimeout(async () => {
                let res2 = await Classify.datas({
                    page: 3,
                    shopid: 'FK'
                })
                let list = res2.data.result.list;
                // console.log(data)
                this.setState({
                    num4: this.state.num4.concat(list),
                })
            }, 500);
        } else if (scrollTop == 15000) {

            setTimeout(async () => {
                let res2 = await Classify.datas({
                    page: 4,
                    shopid: 'FK'
                })
                let list = res2.data.result.list;
                // console.log(data)
                this.setState({
                    num4: this.state.num4.concat(list),
                })
            }, 500);
        }
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

    changelist() {
        // this.setState({
        //     isok: !isok
        // })
        this.state.isok = !this.state.isok;
        this.state.isok2 = false;
        this.state.isok3 = false;
        if (this.state.isok) {
            this.setState({
                display2: 'block',
                display3: 'none',
                display4: 'none',
            })
        } else {
            this.setState({
                display2: 'none',
                display3: 'none',
                display4: 'none',
            })
        }
    }
    changelists() {
        // this.setState({
        //     isok: !isok
        // })
        this.state.isok2 = !this.state.isok2;
        this.state.isok = false;
        this.state.isok3 = false;
        if (this.state.isok2) {
            this.setState({
                display3: 'block',
                display2: 'none',
                display4: 'none'
            })
        } else {
            this.setState({
                display2: 'none',
                display3: 'none',
                display4: 'none'
            })
        }
    }
    changelistsx() {
        // this.setState({
        //     isok: !isok
        // })
        console.log(33333)
        this.state.isok3 = !this.state.isok3;
        this.state.isok = false;
        this.state.isok2 = false;
        if (this.state.isok3) {
            this.setState({
                display4: 'block',
                display2: 'none',
                display3: 'none',
            })
        } else {
            this.setState({
                display2: 'none',
                display3: 'none',
                display4: 'none'
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
        let { num, num2, num3, num4 } = this.state;

        return <>
            <div onScroll={this.handleScroll}>
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
                                <button className="search-select-items" onClick={this.changelist}>分类
                                <i className="iconfont icon-arrowup"></i>
                                </button>
                                <button className="search-select-items" onClick={this.changelists}>目的地
                                <i className="iconfont icon-arrowup"></i>
                                </button>
                                <button className="search-select-items search-select-no-border" onClick={this.changelistsx}>排序
                                <i className="iconfont icon-arrowup"></i>
                                </button>
                            </div>
                            <ul className="search-select-detail search-select-more common-scroll-y" style={{ display: this.state.display2 }}>
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
                            <ul className="search-select-detail search-select-more common-scroll-y" style={{ display: this.state.display4 }}>
                                {
                                    num3.map(item => {
                                        return <li className="search-select-label" key={item.id}>
                                            {item.name}
                                        </li>
                                    })
                                }
                            </ul>
                            <div className="search-select-detail search-select-sub-box" style={{ display: this.state.display3 }}>
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
                            <ul className="search-result-product">
                                {
                                    num4.map(item => {
                                        return <li key={item.productId}>
                                            <a href="###">
                                                <img src={item.productCover} className=" lazyloaded" />
                                                <h3>{item.productDesc}</h3>
                                                <h4>{item.productName}</h4>
                                                <span>{item.productPrice}</span>
                                            </a>
                                        </li>
                                    })
                                }
                            </ul>
                        </section>
                    </section>
                </div>
            </div>
        </>
    }
}

export default NavSearch;