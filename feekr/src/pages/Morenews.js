import React, { Component } from 'react';
import '../css/Morenews.css'
import Zixun from '../api/Zixun';
import '../utils/base.css'
class Morenews extends Component {
   
    constructor() {
        super();
        this.state = {
            menu: [],
            scrollHeight: 0,
            hasMore: true
        }
        this.changeMenu = this.changeMenu.bind(this)
    }
    changeMenu(cur) {
        // console.log(cur)

        this.props.history.push(cur)
        this.setState({
            selectedKeys: [this.props.history.location.pathname]
        })
    }
    handleScroll = (event) => {
        //滚动条高度
        let scrollTop = document.documentElement.scrollTop;  //滚动条滚动高度
        // console.log(scrollTop)
        if (scrollTop == 383) {
            setTimeout(async () => {
                let res = await Zixun.get({
                    page: 2,
                    count: 10
                })
                let data = res.data.result.list
                // console.log(data)
                this.setState({
                    menu: this.state.menu.concat(data),
                })
            }, 500);
        } else if (scrollTop == 1333) {

            setTimeout(async () => {
                let res = await Zixun.get({
                    page: 3,
                    count: 10
                })
                let data = res.data.result.list
                // console.log(data)
                this.setState({
                    menu: this.state.menu.concat(data),
                })
            }, 500);
        } else if (scrollTop == 2283) {

            setTimeout(async () => {
                let res = await Zixun.get({
                    page: 4,
                    count: 10
                })
                let data = res.data.result.list
                // console.log(data)
                this.setState({
                    menu: this.state.menu.concat(data),
                })
            }, 500);
        }
    }
    async componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        let res = await Zixun.get({
            page: 1,
            count: 10
        })
        let data = res.data.result.list
        console.log(data)
        this.setState({
            menu: data,
        })
    }
    render() {
        let { menu } = this.state
        return (
            <div className="home-wrap" onScroll={this.handleScroll}>
                <header className="back-title" style={{ borderBottom: "none" }}>
                    <span >最新旅行资讯</span>
                    <a onClick={this.changeMenu.bind(this, '/Home')} className="iconfont icon-fanhui" ></a>
                </header>
                <section className="list-container news-container">
                    <div className="list">

                        {
                            menu.map(item => {
                                return <a className="flex-wrap" key={item.id} href="###">
                                    <img className="news-cover" src={item.cover} />
                                    <div className="flex-item news-item">
                                        <p className="news-title font-md">{item.title} </p>
                                        <p className="p2"><span>{`${item.viewCount}人阅读`}</span><span className="separate">/</span><span>{item.time} </span></p>
                                    </div>
                                </a>
                            })
                        }

                    </div>
                </section>
            </div>
        )
    }
}


export default Morenews;