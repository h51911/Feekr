import React, { Component } from 'react';

// import { Route, Switch } from 'react-router-dom'

import Search from '../components/search';

// import { Carousel } from 'antd';
//按需加载
import Carousel from 'antd/es/carousel'
import '../utils/base.css'
import '../utils/icon.css'
import '../css/Dujia.css';

import Like from '../api/Like';
import Weixin from '../components/Weixin';
import Nav from '../commom/Nav';

class Dujia extends Component {

    constructor(props) {
        super(props);

        this.state = {
            navlist: [{
                nav_id: "4194304",
                nav_img: "https://res01.feekr.com/ecommerce/minapp/banner/icon-guonei-n.png",
                nav_name: "国内酒店"
            },
            {
                nav_id: "16",
                nav_img: "https://res01.feekr.com/ecommerce/minapp/banner/icon-guowai-n.png ",
                nav_name: "海外酒店"
            },
            {
                nav_id: "256",
                nav_img: "https://res01.feekr.com/ecommerce/minapp/banner/icon-pingpai-n.png ",
                nav_name: "品牌酒店"
            },
            {
                nav_id: "1",
                nav_img: "https://res01.feekr.com/ecommerce/minapp/banner/icon-wanle-n.png",
                nav_name: "玩乐体验"
            },
            {
                nav_id: "1048576",
                nav_img: "https://res01.feekr.com/ecommerce/minapp/banner/icon-zhoubian-n.png",
                nav_name: "周边游"
            },
            {
                nav_id: "131072",
                nav_img: "https://res01.feekr.com/ecommerce/minapp/banner/icon-xiaotuan-n.png",
                nav_name: "精品小团"
            },
            {
                nav_id: "2097152",
                nav_img: "https://res01.feekr.com/ecommerce/minapp/banner/icon-sijia-n.png",
                nav_name: "私家定制"
            },
            ],
            num: [],
        }
        this.changeMenu = this.changeMenu.bind(this);
    }

    changeMenu(cur) {
        console.log(cur)
        this.props.history.push(cur)
    }

    async componentDidMount() {
        let res = await Like.get({
            page: 1,
            shopid: 'FK',
        })
        // console.log(res);

        let res2 = await Like.get({
            page: 2,
            shopid: 'FK',
        })
        // console.log(res2);

        let res3 = await Like.get({
            page: 3,
            shopid: 'FK',
        })
        // console.log(res3);

        let data = res.data.result.list;
        let data2 = res2.data.result.list;
        let data3 = res3.data.result.list;
        let alldata = data.concat(data2, data3);
        // console.log(data);

        this.setState({
            num: alldata,
        })
        // console.log(this.state);
    }

    render() {
        let { navlist, num } = this.state;
        return <div className="Dujia">
            <Search />
            <Carousel autoplay>
                <div className="banner">
                    <img src="https://banner01.feekr.com/2020/01/02/0454155e0dafb7aed57.jpg!750X360" alt="" />
                </div>
                <div className="banner">
                    <img src="https://banner01.feekr.com/2019/12/19/0353305dfb2c7a280ab.jpg!750X360" alt="" />
                </div>
                <div className="banner">
                    <img src="https://banner01.feekr.com/2020/01/07/0616065e145a6656249.jpg!750X360" alt="" />
                </div>
                <div className="banner">
                    <img src="https://banner01.feekr.com/2019/12/25/0524295e032acda5c37.jpg!750X360" alt="" />
                </div>
                <div className="banner">
                    <img src="https://banner01.feekr.com/2019/12/19/0530125dfb43244cd77.jpg!750X360" alt="" />
                </div>
                <div className="banner">
                    <img src="https://banner01.feekr.com/2019/12/03/0418035de61a3bee6e5.png!750X360" alt="" />
                </div>
                <div className="banner">
                    <img src="https://banner01.feekr.com/2019/12/25/0523235e032a8b79c85.jpg!750X360" alt="" />
                </div>
            </Carousel> ,
            < ul className="search-nav" >
                {
                    navlist.map((item, index) => {
                        return <li className="nav-detail" key={item.nav_id} onClick={this.changeMenu.bind(this, `navsearch/${item.nav_id}`)}>
                            <img src={item.nav_img} className="nav-icon" alt="" />
                            <p className="type">{item.nav_name}</p>
                        </li>
                    })
                }
                <li className="nav-detail" onClick={this.changeMenu.bind(this, `home`)}>
                    <img src='https://res01.feekr.com/ecommerce/minapp/banner/icon-gonglv-n.png' className="nav-icon" alt="" />
                    <p className="type">攻略推荐</p>
                </li>
            </ul >
            <div className="home-hot home-common-base">
                <div className="common-search-entry">
                    <div className="common-search-entry-header">
                        <span className="common-search-entry-header-name">新品&amp;独家</span>
                        <p className="common-search-entry-header-line"></p>
                        <div className="common-search-entry-header-more" onClick={this.changeMenu.bind(this, `navsearch/4194304`)}>更多</div>
                    </div>
                    <div className="common-search-entry-nav">
                        <div className="common-goods common-search-entry-item" onClick={this.changeMenu.bind(this, `xiangqing/25954`)}>
                            <img src="https://p-product-pic.feekr.com/2017/0620/598c0a60.jpg!200X200"
                                className="common-goods-img lazyloaded" alt="" />
                            <h3 className="common-goods-content one-line-ellipsis">春节寒假捡漏 | 上海出发大阪5天4晚超值机酒自由行
                            </h3>
                            <p className="common-goods-price">
                                <span className="common-goods-num">¥2999&nbsp;</span>起
                                <span className="common-goods-unit">
                                    <span className="common-goods-bold">/</span>晚
                                </span>
                            </p>
                        </div>
                        <div className="common-goods common-search-entry-item" onClick={this.changeMenu.bind(this, `xiangqing/38408`)}>
                            <img src="https://p-product-pic.feekr.com/2020/0103/5155513f.png!200X200"
                                className="common-goods-img lazyloaded" alt="" />
                            <h3 className="common-goods-content one-line-ellipsis">海南富力湾英迪格酒店 开业预售仅¥966起 | 限量升级海景房+自助午餐或水上活动2选1+餐饮代金券</h3>
                            <p className="common-goods-price" >
                                <span className="common-goods-num">¥
                                    966&nbsp;</span>起<span className="common-goods-unit"><span
                                    className="common-goods-bold">/</span>晚</span>
                            </p>
                        </div>
                        <div className="common-goods common-search-entry-item" onClick={this.changeMenu.bind(this, `xiangqing/38265`)}>
                            <img src="https://p-product-pic.feekr.com/2020/0103/c2834da1.jpg!200X200"
                                className="common-goods-img lazyloaded" alt="" />
                            <h3 className="common-goods-content one-line-ellipsis">上海宝龙丽笙酒店周末节假日专享| 家庭草莓采摘套餐</h3>
                            <p className="common-goods-price"><span className="common-goods-num">¥
                                    688&nbsp;</span>起<span className="common-goods-unit"><span
                                    className="common-goods-bold">/</span>晚</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="common-search-entry">
                    <div className="common-search-entry-header">
                        <span className="common-search-entry-header-name">本周特卖</span>
                        <p className="common-search-entry-header-line"></p>
                        <div className="common-search-entry-header-more">更多</div>
                    </div>
                    <div className="common-search-entry-nav">
                        <div className="common-goods common-search-entry-item" onClick={this.changeMenu.bind(this, `xiangqing/38532`)}>
                            <img src="https://p-product-pic.feekr.com/2018/0316/8ca9b600.jpg!200X200"
                                className="common-goods-img lazyloaded" alt="" />
                            <h3 className="common-goods-content one-line-ellipsis">【499元起】杭州景澜·云台印象酒店丨节假日周末不涨价</h3>
                            <p className="common-goods-price">
                                <span className="common-goods-num">¥
                            499&nbsp;</span>起<span className="common-goods-unit"><span
                                    className="common-goods-bold">/</span>晚</span>
                            </p>
                        </div>
                        <div className="common-goods common-search-entry-item" onClick={this.changeMenu.bind(this, `xiangqing/38375`)}>
                            <img src="https://p-product-pic.feekr.com/2015/11/04/0452505639c762f09bb.jpg!200X200"
                                className="common-goods-img lazyloaded" alt="" />
                            <h3 className="common-goods-content one-line-ellipsis">【春节有房】千岛湖滨江希尔顿骑行套餐|含鱼头代金券+卡丁车代金券SPA</h3>
                            <p className="common-goods-price">
                                <span className="common-goods-num">¥
                            699&nbsp;</span>起<span className="common-goods-unit"><span
                                    className="common-goods-bold">/2</span>晚</span>
                            </p>
                        </div>
                        <div className="common-goods common-search-entry-item" onClick={this.changeMenu.bind(this, `xiangqing/38203`)}>
                            <img
                                src="https://p-product-pic.feekr.com/2019/1227/c7210aa5.png!200X200"
                                className="common-goods-img lazyloaded" alt="" />
                            <h3 className="common-goods-content one-line-ellipsis">三亚海棠湾JW万豪全新开业 春节尊享 | 2大2小早餐+玩乐礼包+免税店折扣+连住2晚享升级及下午茶</h3>
                            <p className="common-goods-price">
                                <span className="common-goods-num">¥
                            1248&nbsp;</span>起<span className="common-goods-unit"><span
                                    className="common-goods-bold">/2</span>晚</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="theme-entry home-common-base">
                <div className="common-header">
                    <span className="commonent-header-line"></span>
                    <span className="commonent-header-type">主题推荐</span>
                    <span className="commonent-header-add">给出最新的出游主题</span>
                </div>
                <ul>
                    <li className="theme-entry-item">
                        <div className="theme-entry-link">
                            <img src="https://p-product-theme.feekr.com/2020/01/01/1153235e0c17b309340.jpg!750X300"
                                className="theme-entry-img lazyloaded" alt="" />
                            <p className="theme-entry-content">你好2020-春节预售超低价</p>
                        </div>
                    </li>
                    <li className="theme-entry-item">
                        <div className="theme-entry-link">
                            <img src="https://p-product-theme.feekr.com/2019/10/22/0233285daea2b8aa81b.jpg!750X300"
                                className="theme-entry-img lazyloaded" alt="" />
                            <p className="theme-entry-content">三亚嘉佩乐·全网独家钜惠 5款套餐随心选</p>
                        </div>
                    </li>
                    <li className="theme-entry-item">
                        <div className="theme-entry-link">
                            <img src="https://p-product-theme.feekr.com/2019/10/15/1142245da540209d59f.jpg!750X300"
                                className="theme-entry-img lazyloaded" alt="" />
                            <p className="theme-entry-content">“静”泡温泉，“动”去滑雪</p>
                        </div>
                    </li>
                    <li className="theme-entry-item">
                        <div className="theme-entry-link">
                            <img src="https://p-product-theme.feekr.com/2018/11/07/0440135be2a4ed51bd7.jpg!750X300"
                                className="theme-entry-img lazyloaded" alt="" />
                            <p className="theme-entry-content">周末出游·江浙沪</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="story-entry home-common-base">
                <div className="common-header">
                    <span className="commonent-header-line"></span>
                    <span className="commonent-header-type">攻略资讯</span>
                    <span className="commonent-header-add">推荐城市深度游攻略</span>
                    <div className="story-entry-more base-color">更多</div>
                </div>
                <ul className="story-entry-item-box">
                    <li className="story-entry-item">
                        <div className="story-entry-link">
                            <img src="https://newscover.feekr.com/2019/04/30/171928ed92443fc8400a21547a788a85874ca1.jpg!600X400"
                                className="story-entry-pic lazyloaded" alt="" />
                            <div>
                                <h3 className="story-entry-describe three-line-ellipsis">从奢侈品帝国到顶级酒店，宝格丽的生活方式就是让人死心塌地被“圈粉”</h3>
                                <p className="story-entry-labes">宝格丽 北京</p>
                            </div>
                        </div>
                    </li>
                    <li className="story-entry-item">
                        <div className="story-entry-link">
                            <img src="https://newscover.feekr.com/2019/04/30/1723330ee2b94d38ed74f51583d8a258f32196.jpg!600X400"
                                className="story-entry-pic lazyloaded" alt="" />
                            <div>
                                <h3 className="story-entry-describe three-line-ellipsis">《向往的生活》回归！这片超好吃的秘境又要火了</h3>
                                <p className="story-entry-labes">向往的生活 湘西</p>
                            </div>
                        </div>
                    </li>
                    <li className="story-entry-item">
                        <div className="story-entry-link">
                            <img src="https://newscover.feekr.com/2019/04/18/064528a01cf5e4e9b95ce206deb80c159dec30.jpg!600X400"
                                className="story-entry-pic lazyloaded" alt="" />
                            <div>
                                <h3 className="story-entry-describe three-line-ellipsis">黄渤退出《极挑》后首亮相，竟是来种草来自世界尽头的狂野与浪漫!</h3>
                                <p className="story-entry-labes">非洲</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="like">
                <div className="maybe-like home-common-base">
                    <div className="common-header">
                        <span className="commonent-header-line"></span>
                        <span className="commonent-header-type">猜你喜欢</span>
                        <span className="commonent-header-add">这些也许是你喜欢的</span>
                    </div>
                    <div className="maybe-like-box">
                        {
                            num.map(item => {
                                return <div className="common-goods maybe-like-item" key={item.id} onClick={this.changeMenu.bind(this, `xiangqing/$`)}>
                                    <img src={item.cover}
                                        className="common-goods-img lazyloaded" alt="" />
                                    <h3 className="common-goods-content one-line-ellipsis">{item.productName}</h3>
                                    <p className="common-goods-price">
                                        <span className="common-goods-num">{item.currentPrice}&nbsp;</span>起
                                   <span className="common-goods-unit">
                                            <span className="common-goods-bold">/{item.unitCount}</span>{item.unit}
                                        </span>
                                    </p>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
            <Weixin></Weixin>
            <Nav path={this.props.location.pathname} />
        </div >
    }
}

export default Dujia;