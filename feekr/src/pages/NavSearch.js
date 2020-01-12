import React, { Component } from 'react';

import '../utils/base.css';
import '../utils/icon.css';
import '../css/NavSearch.css';
import Classify from '../api/Classify';

class NavSearch extends Component {
    constructor(props) {
        super(props);
        // console.log(this.props)
        let str = this.props.match.params.id
        // console.log(str)
        // console.log(ste)
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
            num4: [],
            currentIndex: '',
            currentInde2: '',
            style: str,
            scrollY: 0,
            dataname: '分类',
            citys: '',
            dataname2: '目的地',
            sort: '',
            dataname3: '排序',
        }
        // console.log(this.state.page)
        this.changeTitle = this.changeTitle.bind(this);
        this.additem = this.additem.bind(this);
        this.changelist = this.changelist.bind(this);
        this.changelists = this.changelists.bind(this);
        this.changelistsx = this.changelistsx.bind(this);
        this.changedata = this.changedata.bind(this);
    }
    changedata(idx) {
        let { name, id } = idx;
        let currentInde2 = name;
        let currentIndex = '';
        let display2 = 'none';
        this.setState({
            currentIndex,
            currentInde2,
            display2
        });
        let style = id;
        // console.log(name)
        let dataname = name;
        // let url = 'navsearch/id'
        this.props.history.push(`${style}`);
        this.setState({
            style,
            dataname,
            display2: 'block'
        });
    }
    changename(idx) {
        let { id, name } = idx;
        let currentInde2 = name;
        let currentIndex = 2;
        this.setState({
            currentIndex,
            currentInde2
        });
        let citys = id;
        // console.log(idx);
        // console.log(name, id)
        let dataname2 = name;
        // let style = this.state.style;
        this.props.history.go(`${citys}`);
        // console.log(dataname2)
        this.setState({
            citys,
            dataname2,
            display3: 'none'
        });
    }
    changesort(idx) {
        let { name, id } = idx;
        let currentInde2 = name;
        let currentIndex = 3;
        this.setState({
            currentIndex,
            currentInde2
        });
        let sort = id;
        // console.log(name, id)
        let dataname3 = name;
        // let sort = this.state.sort;
        this.props.history.go(`${sort}`);
        this.setState({
            sort,
            dataname3,
            display4: 'none'
        });
    }
    async componentDidMount() {

        window.addEventListener('scroll', this.handleScroll);
        let res = await Classify.gets({
            shopid: 'FK'
        })

        let res2 = await Classify.datas({
            style: this.state.style,
            page: 1,
            shopid: 'FK',
            city: this.state.citys,
            // sort: this.state.sort
        })
        // console.log(res2);
        let wite = res.data.result.style;
        // console.log(wite);
        wite.forEach(item => {
            if (item.id == this.state.style) {
                this.setState({
                    dataname: item.name
                })
            }
            // console.log(item.id);
            // console.log(this.state.style)
        });
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
    }

    async componentDidUpdate(prsa, afscfas) {
        // console.log(this.state.style);
        if (this.state.style != afscfas.style) {
            // console.log(666)
            let res2 = await Classify.datas({
                style: this.state.style,
                page: 1,
                shopid: 'FK',
                city: this.state.citys,
                sort: ''
            })
            let list = res2.data.result.list;
            let style = this.state.style;
            this.setState({
                num4: list,
                style,
            })
        }
        if (this.state.citys != afscfas.citys) {
            // console.log(666)
            let res2 = await Classify.datas({
                style: this.state.style,
                page: 1,
                shopid: 'FK',
                city: this.state.citys,
                sort: ''
            })
            // console.log(252);
            let list = res2.data.result.list;
            let style = this.state.style;
            this.setState({
                num4: list,
                style,
            })
        }
        if (this.state.sort != afscfas.sort) {
            let res2 = await Classify.datas({
                style: this.state.style,
                page: 1,
                shopid: 'FK',
                city: this.state.city,
                sort: this.state.sort
            })
            // console.log(252);
            let list = res2.data.result.list;
            let style = this.state.style;
            this.setState({
                num4: list,
                style,
            })
        }
    }

    handleScroll = () => {
        //滚动条高度
        let scrollTop = document.documentElement.scrollTop;  //滚动条滚动高度
        this.state.scrollY = scrollTop;
        // console.log(scrollTop);
        if (scrollTop === 6023) {
            // console.log(scrollTop);
            setTimeout(async () => {
                let res2 = await Classify.datas({
                    style: this.state.style,
                    page: 2,
                    shopid: 'FK'
                })
                let list = res2.data.result.list;
                this.setState({
                    num4: this.state.num4.concat(list),
                })
            }, 100);
        }
        else if (scrollTop === 12422) {
            // console.log(scrollTop);
            setTimeout(async () => {
                let res2 = await Classify.datas({
                    style: this.state.style,
                    page: 3,
                    shopid: 'FK'
                })
                let list = res2.data.result.list;
                // console.log(data)
                this.setState({
                    num4: this.state.num4.concat(list),
                })
            }, 100);
        }
        else if (scrollTop === 18515) {
            // console.log(scrollTop);
            setTimeout(async () => {
                let res2 = await Classify.datas({
                    style: this.state.style,
                    page: 4,
                    shopid: 'FK'
                })
                let list = res2.data.result.list;
                // console.log(data)
                this.setState({
                    num4: this.state.num4.concat(list),
                })
            }, 100);
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
        this.state.isok = !this.state.isok;
        this.state.isok2 = false;
        this.state.isok3 = false;
        if (this.state.isok) {
            this.setState({
                display2: 'block',
                display3: 'none',
                display4: 'none',
            })
            this.state.currentIndex = 1
            this.state.currentInde2 = 6
        } else {
            this.setState({
                display2: 'none',
                display3: 'none',
                display4: 'none',
            })
            this.state.currentIndex = 5
        }
        // console.log(this.state.currentIndex)
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
            this.state.currentIndex = 2
        } else {
            this.setState({
                display2: 'none',
                display3: 'none',
                display4: 'none'
            })
            this.state.currentIndex = ''
        }
    }
    changelistsx() {
        // this.setState({
        //     isok: !isok
        // })
        // console.log(33333)
        this.state.isok3 = !this.state.isok3;
        this.state.isok = false;
        this.state.isok2 = false;
        if (this.state.isok3) {
            this.setState({
                display4: 'block',
                display2: 'none',
                display3: 'none',
            })
            this.state.currentIndex = 3
        } else {
            this.setState({
                display2: 'none',
                display3: 'none',
                display4: 'none'
            })
            this.state.currentIndex = ''
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
        // console.log(this.state.currentInde2);
        // console.log(this.state.citys);
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
                                <button className={this.state.currentIndex == 1 ? 'active' : 'search-select-items'} onClick={this.changelist.bind(this, '1')}>
                                    {this.state.dataname}
                                    <i className="iconfont icon-arrowup"></i>
                                </button>
                                <button className={this.state.currentIndex == 2 ? 'active' : 'search-select-items'} onClick={this.changelists.bind(this, '2')}>{this.state.dataname2}
                                    <i className="iconfont icon-arrowup"></i>
                                </button>
                                <button className={this.state.currentIndex == 3 ? 'active' : 'search-select-items search-select-no-border'} onClick={this.changelistsx.bind(this, '3')}>{this.state.dataname3}
                                    <i className="iconfont icon-arrowup"></i>
                                </button>
                            </div>
                            <ul className="search-select-detail search-select-more common-scroll-y" style={{ display: this.state.display2 }}>
                                <li onClick={this.changedata.bind(this, { id: 4194304, name: '全部分类' })} className={this.state.currentInde2 == 6 ? 'active2' : 'search-select-label base-color'}  >
                                    全部分类
                            </li>
                                {
                                    num.map((item, index) => {
                                        return <li className={this.state.currentInde2 == item.name ? 'active2' : 'search-select-label base-color'} key={item.id} onClick={this.changedata.bind(this, { id: item.id, name: item.name })}>
                                            {item.name}
                                        </li>
                                    })
                                }
                            </ul>
                            <ul className="search-select-detail search-select-more common-scroll-y" style={{ display: this.state.display4 }}  >
                                {
                                    num3.map(item => {
                                        return <li className={this.state.currentInde2 == item.name ? 'active2' : 'search-select-label'} key={item.id} onClick={this.changesort.bind(this, { id: item.id, name: item.name })}>
                                            {item.name}
                                        </li>
                                    })
                                }
                            </ul>
                            <div className="search-select-detail search-select-sub-box" style={{ display: this.state.display3 }}>
                                {/* <ul className="search-select-sub">
                                    <li className={this.state.currentIndex == 2 ? 'active2' : 'search-select-label base-color'}>
                                        全部
                                </li>
                                    <li className={this.state.currentIndex == 2 ? 'active2' : 'search-select-label'}>
                                        国内
                                </li>
                                    <li className={this.state.currentIndex == 2 ? 'active2' : 'search-select-label'}>
                                        国外
                                </li>
                                </ul> */}
                                <ul className="search-select-sub-detail search-select-more common-scroll-y">
                                    {
                                        num2.map(item => {
                                            return <li className={this.state.currentInde2 == item.city ? 'active2' : 'search-select-label search-select-sub-label'} key={item.id} onClick={this.changename.bind(this, { id: item.id, name: item.city })}>
                                                {item.city}
                                                < span className="search-select-area">({item.area})</span>
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
                                                <span>￥{item.productPrice}</span>
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