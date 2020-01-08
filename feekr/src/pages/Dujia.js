import React, { Component } from 'react';

import Search from '../components/search';

import { Carousel } from 'antd';

import '../utils/base.css'
import '../utils/icon.css'
import '../css/Dujia.css';

import Like from '../api/Like';
import Weixin from '../components/Weixin';

class Dujia extends Component {

    constructor() {
        super();

        this.state = {
            navlist: [{
                nav_id: "1",
                nav_img: "https://res01.feekr.com/ecommerce/minapp/banner/icon-guonei-n.png",
                nav_name: "国内酒店"
            },
            {
                nav_id: "2",
                nav_img: "https://res01.feekr.com/ecommerce/minapp/banner/icon-guowai-n.png ",
                nav_name: "海外酒店"
            },
            {
                nav_id: "3",
                nav_img: "https://res01.feekr.com/ecommerce/minapp/banner/icon-pingpai-n.png ",
                nav_name: "品牌酒店"
            },
            {
                nav_id: "4",
                nav_img: "https://res01.feekr.com/ecommerce/minapp/banner/icon-wanle-n.png",
                nav_name: "玩乐体验"
            },
            {
                nav_id: "5",
                nav_img: "https://res01.feekr.com/ecommerce/minapp/banner/icon-zhoubian-n.png",
                nav_name: "周边游"
            },
            {
                nav_id: "6",
                nav_img: "https://res01.feekr.com/ecommerce/minapp/banner/icon-xiaotuan-n.png",
                nav_name: "精品小团"
            },
            {
                nav_id: "7",
                nav_img: "https://res01.feekr.com/ecommerce/minapp/banner/icon-sijia-n.png",
                nav_name: "私家定制"
            },
            {
                nav_id: "8",
                nav_img: "https://res01.feekr.com/ecommerce/minapp/banner/icon-gonglv-n.png",
                nav_name: "攻略推荐"
            },
            ],
            num: [],
        }
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
            <Carousel className="autoplay">
                <img src="https://banner01.feekr.com/2019/12/25/0524295e032acda5c37.jpg!750X360" />
            </Carousel>
            <ul className="search-nav">
                {
                    navlist.map((item, index) => {
                        return <li className="nav-detail" key={item.nav_id}>
                            <img src={item.nav_img} className="nav-icon" />
                            <p className="type">{item.nav_name}</p>
                        </li>
                    })
                }
            </ul>
            <div className="home-hot home-common-base">
                <div className="common-search-entry">
                    <div className="common-search-entry-header">
                        <span className="common-search-entry-header-name">新品&amp;独家</span>
                        <p className="common-search-entry-header-line"></p>
                        <a href="###" className="common-search-entry-header-more">更多</a>
                    </div>
                    <div className="common-search-entry-nav">
                        <a href="###" className="common-goods common-search-entry-item">
                            <img src="https://p-product-pic.feekr.com/2019/1230/393395ce.jpg!200X200"
                                className="common-goods-img lazyloaded" />
                            <h3 className="common-goods-content one-line-ellipsis">三亚海棠湾阳光壹酒店 · 1 Hotel 重磅开业预售 |
                                含双早，开业前5天享开业礼遇下午茶+晚餐
                            </h3>
                            <p className="common-goods-price">
                                <span className="common-goods-num">¥1499&nbsp;</span>起
                                <span className="common-goods-unit">
                                    <span className="common-goods-bold">/</span>晚
                                </span>
                            </p>
                        </a>
                        <a href="###" className="common-goods common-search-entry-item">
                            <img src="https://p-product-pic.feekr.com/2019/1129/c57f4c8f.jpg!200X200"
                                className="common-goods-img lazyloaded" />
                            <h3 className="common-goods-content one-line-ellipsis">新店开业丨杭州桐庐康莱德酒店丨含SPA套餐</h3>
                            <p className="common-goods-price" >
                                <span className="common-goods-num">¥
                                    2199&nbsp;</span>起<span className="common-goods-unit"><span
                                    className="common-goods-bold">/</span>晚</span>
                            </p>
                        </a>
                        <a href="###" className="common-goods common-search-entry-item">
                            <img src="https://p-product-pic.feekr.com/2019/0724/af754474.jpg!200X200"
                                className="common-goods-img lazyloaded" />
                            <h3 className="common-goods-content one-line-ellipsis">长白山脚下雪季特惠|长白山铂尔曼度假酒店周末不涨价|含双早+机场接送</h3>
                            <p className="common-goods-price"><span className="common-goods-num">¥
                                    539&nbsp;</span>起<span className="common-goods-unit"><span
                                    className="common-goods-bold">/</span>晚</span>
                            </p>
                        </a>
                    </div>
                </div>
                <div className="common-search-entry">
                    <div className="common-search-entry-header">
                        <span className="common-search-entry-header-name">本周特卖</span>
                        <p className="common-search-entry-header-line"></p>
                        <a href="###" className="common-search-entry-header-more">更多</a>
                    </div>
                    <div className="common-search-entry-nav">
                        <a href="###" className="common-goods common-search-entry-item">
                            <img src="https://p-product-pic.feekr.com/2015/11/04/0452505639c762f09bb.jpg!200X200"
                                className="common-goods-img lazyloaded" />
                            <h3 className="common-goods-content one-line-ellipsis">【春节有房】千岛湖滨江希尔顿骑行套餐|含鱼头代金券+卡丁车代金券</h3>
                            <p className="common-goods-price">
                                <span className="common-goods-num">¥
                            699&nbsp;</span>起<span className="common-goods-unit"><span
                                    className="common-goods-bold">/</span>晚</span>
                            </p>
                        </a>
                        <a href="###" className="common-goods common-search-entry-item">
                            <img src="https://p-product-pic.feekr.com/2019/0626/90ba98a4.jpg!200X200"
                                className="common-goods-img lazyloaded" />
                            <h3 className="common-goods-content one-line-ellipsis">阿丽拉安吉山景别墅住二付一限量200套 2晚特惠套餐|享巴厘岛式SPA</h3>
                            <p className="common-goods-price">
                                <span className="common-goods-num">¥
                            2999&nbsp;</span>起<span className="common-goods-unit"><span
                                    className="common-goods-bold">/2</span>晚</span>
                            </p>
                        </a>
                        <a href="###" className="common-goods common-search-entry-item">
                            <img
                                src="https://p-product-pic.feekr.com/2019/0128/7bb7742c.jpg!200X200"
                                className="common-goods-img lazyloaded" />
                            <h3 className="common-goods-content one-line-ellipsis">春节专享限量发售•黄山齐云山祥富瑞度假酒店2晚套餐 |
                        含早+正餐+新春活动+畅玩齐云山&amp;自由家营地</h3>
                            <p className="common-goods-price">
                                <span className="common-goods-num">¥
                            1299&nbsp;</span>起<span className="common-goods-unit"><span
                                    className="common-goods-bold">/2</span>晚</span>
                            </p>
                        </a>
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
                        <a href="###" className="theme-entry-link">
                            <img src="https://p-product-theme.feekr.com/2020/01/01/1153235e0c17b309340.jpg!750X300"
                                className="theme-entry-img lazyloaded" />
                            <p className="theme-entry-content">你好2020-春节预售超低价</p>
                        </a>
                    </li>
                    <li className="theme-entry-item">
                        <a href="###" className="theme-entry-link">
                            <img src="https://p-product-theme.feekr.com/2019/10/22/0233285daea2b8aa81b.jpg!750X300"
                                className="theme-entry-img lazyloaded" />
                            <p className="theme-entry-content">三亚嘉佩乐·全网独家钜惠 5款套餐随心选</p>
                        </a>
                    </li>
                    <li className="theme-entry-item">
                        <a href="###" className="theme-entry-link">
                            <img src="https://p-product-theme.feekr.com/2019/10/15/1142245da540209d59f.jpg!750X300"
                                className="theme-entry-img lazyloaded" />
                            <p className="theme-entry-content">“静”泡温泉，“动”去滑雪</p>
                        </a>
                    </li>
                    <li className="theme-entry-item">
                        <a href="###" className="theme-entry-link">
                            <img src="https://p-product-theme.feekr.com/2018/11/07/0440135be2a4ed51bd7.jpg!750X300"
                                className="theme-entry-img lazyloaded" />
                            <p className="theme-entry-content">周末出游·江浙沪</p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="story-entry home-common-base">
                <div className="common-header">
                    <span className="commonent-header-line"></span>
                    <span className="commonent-header-type">攻略资讯</span>
                    <span className="commonent-header-add">推荐城市深度游攻略</span>
                    <a href="###" className="story-entry-more base-color">更多</a>
                </div>
                <ul className="story-entry-item-box">
                    <li className="story-entry-item">
                        <a href="###" className="story-entry-link">
                            <img src="https://newscover.feekr.com/2019/04/30/171928ed92443fc8400a21547a788a85874ca1.jpg!600X400"
                                className="story-entry-pic lazyloaded" />
                            <div>
                                <h3 className="story-entry-describe three-line-ellipsis">从奢侈品帝国到顶级酒店，宝格丽的生活方式就是让人死心塌地被“圈粉”</h3>
                                <p className="story-entry-labes">宝格丽 北京</p>
                            </div>
                        </a>
                    </li>
                    <li className="story-entry-item">
                        <a href="###" className="story-entry-link">
                            <img src="https://newscover.feekr.com/2019/04/30/1723330ee2b94d38ed74f51583d8a258f32196.jpg!600X400"
                                className="story-entry-pic lazyloaded" />
                            <div>
                                <h3 className="story-entry-describe three-line-ellipsis">《向往的生活》回归！这片超好吃的秘境又要火了</h3>
                                <p className="story-entry-labes">向往的生活 湘西</p>
                            </div>
                        </a>
                    </li>
                    <li className="story-entry-item">
                        <a href="###" className="story-entry-link">
                            <img src="https://newscover.feekr.com/2019/04/18/064528a01cf5e4e9b95ce206deb80c159dec30.jpg!600X400"
                                className="story-entry-pic lazyloaded" />
                            <div>
                                <h3 className="story-entry-describe three-line-ellipsis">黄渤退出《极挑》后首亮相，竟是来种草来自世界尽头的狂野与浪漫!</h3>
                                <p className="story-entry-labes">非洲</p>
                            </div>
                        </a>
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
                                return <a href="###" className="common-goods maybe-like-item" key={item.id}>
                                    <img src={item.cover}
                                        className="common-goods-img lazyloaded" />
                                    <h3 className="common-goods-content one-line-ellipsis">{item.productName}</h3>
                                    <p className="common-goods-price">
                                        <span className="common-goods-num">{item.currentPrice}&nbsp;</span>起
                                   <span className="common-goods-unit">
                                            <span className="common-goods-bold">/{item.unitCount}</span>{item.unit}
                                        </span>
                                    </p>
                                </a>
                            })
                        }
                    </div>
                </div>
            </div>
            <Weixin></Weixin>
        </div>
    }
}

export default Dujia;