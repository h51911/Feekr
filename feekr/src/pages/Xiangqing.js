import React, { Component } from 'react';
import { Carousel } from 'antd';
import 'antd/dist/antd.css'
import '../css/xiangqing.css'
import '../utils/base.css'
// import '../utils/icon.css'
import '../utils/icon2.css'
import Goodlist from '../api/Goodlist';
class Meiwu extends Component {
  constructor(props) {

    super(props);

    this.state = {
      dots: false,
      datalist: {},
      img: [],
      feiyong: [],
      xuzhi: [],
      rule: [],
      select: [true, false, false],
      likelistall: [],
      group: [],
      sty: true,
      disp: 'block',
      aa: [],
      sect: [],
      low: true,
      flex: false,
      allprice: 0
    }
    this.changeNum1 = this.changeNum1.bind(this)
    this.changeNum = this.changeNum.bind(this)
  }
  async componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    let productId = this.props.location.pathname.split('/')[2]

    let channel = this.props.location.pathname.split('/')[3]
    // console.log(channel)
    let shopid = 'FK'

    if (this.props.location.pathname.split('/').length == 6) {
      let pvFrom = this.props.location.pathname.split('/')[4]
      let data = await Goodlist.get({
        productId,
        channel,
        pvFrom,
        shopid
      })

      let datalist = data.data.result
      let productCategoryId = datalist.productCategory
      let count = '4'
      //获取猜你喜欢数据
      let likelist = await Goodlist.getlike({
        productCategoryId,
        count,
        shopid
      })
      let likelistall = likelist.data.result.list

      let feiyong = datalist.productContain.split('【').slice(1)
      let group = datalist.group
      let img = data.data.result.productThumb
      let xuzhi = datalist.usage.split('；')
      let rule = datalist.usage.split('；')
      let aa = []

      group.map(item => {
        return aa.push(1)
      })
      let sect = []
      group.map((item, idx) => {
        if (idx == 0) {
          sect.push(true)
        } else {
          sect.push(false)
        }
        return sect
      })
      // console.log(group)
      let allprice = group[0].groupPrice
      this.setState({
        datalist,
        img,
        feiyong,
        xuzhi,
        rule,
        likelistall,
        group,
        aa,
        sect,
        allprice
      })
    } else {
      let data = await Goodlist.get({
        productId,
        channel,
        shopid
      })
      let datalist = data.data.result

      let productCategoryId = datalist.productCategory
      let count = '4'
      //获取喜欢数据
      let likelist = await Goodlist.getlike({
        productCategoryId,
        count,
        shopid
      })
      let group = datalist.group
      let likelistall = likelist.data.result.list

      let feiyong = datalist.productContain.split('【').slice(1)

      let img = data.data.result.productThumb

      let xuzhi = datalist.usage.split('；')
      let rule = datalist.usage.split('；')
      let aa = []
      let sect = []
      group.map((item, idx) => {
        if (idx == 0) {
          sect.push(true)
        } else {
          sect.push(false)
        }
        return sect
      })
      group.map(item => {
        return aa.push(1)
      })
      // console.log(group)
      let allprice = group[0].groupPrice
      this.setState({
        datalist,
        img,
        feiyong,
        xuzhi,
        rule,
        likelistall,
        group,
        aa,
        sect,
        allprice
      })
    }
  }
  change = (aa) => {
    if (aa == '1') {
      this.setState({
        select: [true, false, false]
      })
    } else if (aa == '2') {
      this.setState({
        select: [false, true, false]
      })
    } else if (aa == '3') {
      this.setState({
        select: [false, false, true]
      })
    }
  }
  changeMenu2 = (cur) => {

    this.props.history.go('/' + cur)

  }
  menu = () => {
    this.setState({
      sty: !this.state.sty,
    })
    if (this.state.sty) {
      setTimeout(() => {
        this.setState({
          disp: 'none'

        })
      }, 500);
    } else {
      this.setState({
        disp: 'block'

      })
    }
  }
  changeNum1(obj, event) {

    let { idx, buyMax } = obj
    let aa = this.state.aa

    let cc = [];
    let bb = aa.map((item, index) => {


      if (idx == index) {
        if (event.target.value.trim() == '') {
          item = ''
          cc.push(item)
        } else {
          if (event.target.value.trim() >= buyMax) {
            item = buyMax
            cc.push(item)
          } else if (event.target.value.trim() < buyMax) {
            item = event.target.value.trim()
            cc.push(item)
          }

        }

      } else {
        cc.push(item)
      }
      return cc
    })
    this.setState({
      aa: cc
    })
  }
  add = (obj) => {
    let { idx, buyMax } = obj
    let cc = [];
    let { aa, group, sect } = this.state
    let bb = aa.map((item, index) => {
      if (index == idx) {
        item++;
        this.setState({
          low: false
        })
        if (item >= buyMax) {
          item = buyMax
          cc.push(item)
        } else {
          cc.push(item)
        }
      } else {
        cc.push(item)
      }
      return cc
    })
    let price = 0
    // console.log(cc)
    for (let i = 0; i < sect.length; i++) {
      if (sect[i]) {
        price = price + group[i].groupPrice * cc[i]
      }
    }
    this.setState({
      aa: cc,
      allprice: price
    })
  }
  low = (idx) => {
    let cc = [];
    let { aa, group, sect } = this.state

    let bb = aa.map((item, index) => {
      if (index == idx) {
        item--
        if (item <= 1) {
          item = 1
          cc.push(item)
          this.setState({
            low: true
          })
        } else {
          cc.push(item)
          this.setState({
            low: false
          })
        }

      } else {
        cc.push(item)
      }
      return cc
    })
    // let pic=0
    // group.map((item,idx)=>{
    //   return pic+=item.groupPrice*cc[idx]
    // })
    let price = 0
    console.log(sect)
    for (let i = 0; i < sect.length; i++) {
      if (sect[i]) {
        price = price + group[i].groupPrice * aa[i]
      }
    }
    this.setState({
      aa: cc,
      allprice: price
    })
  }
  changeNum(idx, event) {
    let { aa, group, sect } = this.state
    if (this.state.aa[idx] == '') {

      // console.log(aa)
      let cc = [];
      let bb = aa.map((item, index) => {
        if (idx == index) {
          item = 1
          cc.push(item)
        } else {
          cc.push(item)
        }
        return cc
      })

      this.setState({
        aa: cc,
        // allprice:price
      })

    }
  }
  sellt = (idx) => {
    // console.log(111)
    let { sect, group, aa } = this.state
    console.log(aa)
    let cc = [];
    let bb = sect.map((item, index) => {
      if (idx == index) {
        item = !item
        cc.push(item)
      } else {
        item = item
        cc.push(item)
      }
      return cc
    })
    let price = 0

    for (let i = 0; i < cc.length; i++) {
      if (cc[i]) {
        price = price + group[i].groupPrice * aa[i]
      }
    }

    this.setState({
      sect: cc,
      allprice: price
    })
  }
  goHome = () => {
    this.props.history.push('/home')
  }
  handleScroll = (event) => {
    //滚动条高度
    let scrollTop = document.documentElement.scrollTop;  //滚动条滚动高度
    // console.log(scrollTop)
    if (scrollTop >= 680) {
      this.setState({
        flex: true
      })
    } else {
      this.setState({
        flex: false
      })
    }

  }
  render() {
    let { datalist, img, feiyong, xuzhi, rule, select, likelistall, group, aa, sect, low, flex, allprice } = this.state
    // console.log(sect)
    return <div className="xiangqing" onScroll={this.handleScroll}>
      <div className="main" style={this.state.sty ? { display: this.state.disp } : { display: this.state.disp }} >
        <div >
          <Carousel dots={this.state.dots}>
            {
              img.map(item => {
                return <img key={item} src={item} alt="" />
              })
            }

          </Carousel>
          <div className="product-detail-head">
            <h5 className="product-detail-art">{datalist.productName} </h5>
            <h3 className="product-detail-name">{datalist.productDesc} </h3>
            <p className="product-detail-price" ><b>{`￥${datalist.productPrice}`} </b><span> 起/晚</span></p>
          </div>
          <div className="product-detail-menu" onClick={this.menu}><span>选择套餐/有效期</span> <i className="iconfont icon-jiantou"></i></div>
          <section className="product-guide"><img src={datalist.head} alt={datalist.user} /> <p>{`旅游体验师 - ${datalist.user}`} </p> <h4>为你推荐</h4> <h5>{datalist.recom} </h5></section>
          <ul className="product-detail-tab" style={flex ? { position: 'fixed', top: '0', left: '0', marginTop: 0, width: '100%' } : null}>
            <li onClick={this.change.bind(this, '1')} style={select[0] ? {
              color: 'rgb(26, 188, 156)',
              borderBottomColor: 'rgb(26, 188, 156)'
            } : null}>费用包含</li>
            <li onClick={this.change.bind(this, '2')} style={select[1] ? {
              color: 'rgb(26, 188, 156)',
              borderBottomColor: 'rgb(26, 188, 156)'
            } : null}>产品详情</li>
            <li onClick={this.change.bind(this, '3')} style={select[2] ? {
              color: 'rgb(26, 188, 156)',
              borderBottomColor: 'rgb(26, 188, 156)'
            } : null}>购买须知</li>
          </ul>
          <section className="product-detail-desc">
            <div className="product-detail-contain" style={select[0] ? { display: 'block' } : { display: 'none' }}>
              {
                feiyong.map(item => {
                  return <p key={item}>
                    {`【${item}`}
                  </p>
                })
              }
            </div>
            <div id="detailPanelDesc" className="detail-panel-desc" style={select[1] ? { display: 'block' } : { display: 'none' }} dangerouslySetInnerHTML={{ __html: datalist.productDetail }} >
            </div>
            <div className="buy-notice" style={select[2] ? { display: 'block' } : { display: 'none' }} >
              <p className="buy-notice-head"><b>使用说明 </b></p>
              <div className="buy-notice-usage">
                {
                  xuzhi.map(item => {
                    return <p key={item}>
                      {item}
                    </p>
                  })
                }
              </div>
              <p className="buy-notice-head buy-notice-head-rule"><b>改退规则</b></p>
              <div className="buy-notice-rule">
                {
                  rule.map((item, idx) => {
                    return <p key={`${idx + 1}.${item}`}>
                      {`${idx + 1}.${item}`}
                    </p>
                  })
                }
              </div>
            </div>
          </section>
          <div className="product-detail-wxcs"><h4>客服微信</h4> <p>【注】关于产品有任何咨询需求，都可添加客服微信：feekr_cs3（国内度假），feekr5566（出境度假）</p></div>
          <div className="product-detail-guess">
            <div className="recommend">
              <p className="product-detail-guess-title">猜你喜欢</p>
              <ul className="recommend-goods">
                {
                  likelistall.map(item => {
                    return <li key={item.productId}>
                      <div className="common-goods recommend-item" onClick={this.changeMenu2.bind(this, `xiangqing/${item.productId}`)} key={item.productId} >
                        <img src={item.productCover} className="common-goods-img lazyloaded" />
                        <h3 className="common-goods-content one-line-ellipsis">{item.productName} </h3>
                        <p className="common-goods-price" >
                          <span className="common-goods-num">{`¥ ${item.productPrice}  `}</span>起
                          <span className="common-goods-unit"><span className="common-goods-bold">{`/${item.productUnitCount}`}</span>{item.productUnit} </span></p>
                      </div>
                    </li>
                  })

                }
              </ul>
            </div>
          </div>
        </div>

        <footer className="product-footer common-layout-fix" >
          <ul className="product-footer-nav">
            <li><div className="product-footer-home" onClick={this.goHome} ><i className="iconfont icon-shouye-shouye"></i><p>首页</p></div></li>
            <li className="product-footer-dot"><i className="iconfont icon-cust"></i><p>客服</p></li> <li><i className="iconfont icon-star01"></i> <p>收藏</p></li>
            <li className="product-footer-buy product-footer-heavy" onClick={this.menu} >立即预订</li>
          </ul>
        </footer>
      </div>
      <section className="common-mask common-layout-fix combo-mask" style={this.state.sty ? { top: "100%" } : { top: "0" }} >
        <div className="combo-main" >
          <div className="combo-head">
            <p className="combo-name">{datalist.productName} </p> <i onClick={this.menu} className="iconfont icon-guanbi combo-head-icon"></i>
          </div>
          <ul className="combo-suite common-scroll-y">
            {
              group.map((item, idx) => {
                return <li className="combo-item" key={item.groupId}>
                  <div className="suite">
                    <ul className="suite-flex suite-pick" onClick={this.sellt.bind(this, idx)}>
                      <li className="suite-select"><i className="iconfont icon-shuruzhengque" style={sect[idx] ? { display: 'block' } : { display: 'none' }}></i></li>
                      <li className="suite-name">{item.groupName}
                      </li>
                      <li className="flex-shrink suite-price">
                        <p className={item.buyMax}><b>{`￥ ${item.groupPrice}`} </b></p>
                      </li>
                    </ul>
                    <div style={sect[idx] ? { display: 'block' } : { display: 'none' }}>
                      <ul className="suite-flex suite-count" >
                        <li className="suite-count-text">购买数量:</li>
                        <li className={low ? "disable" : ''} onClick={this.low.bind(this, idx)} ref={(ele) => this.title = ele}>-</li>
                        <li><input type="text" value={aa[idx]} ref={(ele) => this.title = ele} onChange={this.changeNum1.bind(this, { idx, buyMax: item.buyMax })} onBlur={this.changeNum.bind(this, idx)} className="suite-input" /></li>
                        <li className="" onClick={this.add.bind(this, { idx, buyMax: item.buyMax })} ref={(ele) => this.title = ele}>+</li>
                      </ul>
                      <p className="suite-detail" >{item.groupDesc}
                      </p>
                    </div>
                  </div>
                </li>
              })
            }


          </ul>
          <footer className="pipe-confirm common-layout-fix" ><div className="price-wrap"><span className="base-color font-16">{`￥ ${allprice}`} </span></div> <button className="base-bg">下一步，填写信息</button></footer>
        </div>

      </section>

    </div>
  }
}

export default Meiwu;