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
      sect:[]
    }
    this.changeNum1 = this.changeNum1.bind(this)
    this.changeNum = this.changeNum.bind(this)
  }
  async componentDidMount() {
    
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
      let sect=[]
      group.map((item,idx) => {
        if(idx==0){
          sect.push(true)
        }else{
          sect.push(false)
        }
        return sect
      })
      // console.log(aa)
      this.setState({
        datalist,
        img,
        feiyong,
        xuzhi,
        rule,
        likelistall,
        group,
        aa,
        sect
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
      let sect=[]
      group.map((item,idx) => {
        if(idx==0){
          sect.push(true)
        }else{
          sect.push(false)
        }
        return sect
      })
      group.map(item => {
        return aa.push(1)
      })
      // console.log(Num)
      // console.log(xuzhi)
      this.setState({
        datalist,
        img,
        feiyong,
        xuzhi,
        rule,
        likelistall,
        group,
        aa,
        sect
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
    let aa = this.state.aa
    let bb = aa.map((item, index) => {
      if (index == idx) {
        item++;
        if(item>=buyMax){
          item=buyMax
          cc.push(item)
        }else{
          cc.push(item)
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
  low = (idx) => {
    let cc = [];
    let aa = this.state.aa
    let bb = aa.map((item, index) => {
      if (index == idx) {
        item--
        if (item <= 1) {
          item = 1
          cc.push(item)
        } else {
          cc.push(item)
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
  changeNum(idx, event) {
    if (this.state.aa[idx] == '') {
      let aa = this.state.aa
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
        aa: cc
      })
    }
  }
  sellt=(idx)=>{
    console.log(111)
    let aa = this.state.sect
      // console.log(aa)
      let cc = [];
      let bb = aa.map((item, index) => {
        if (idx == index) {
          item = !item
          cc.push(item)
        } else {
          item=item
          cc.push(item)
        }
        return cc
      })
      this.setState({
        sect: cc
      })
  }
  render() {
    let { datalist, img, feiyong, xuzhi, rule, select, likelistall, group, aa,sect } = this.state
    // console.log(sect)
    return <div className="xiangqing">
      <div className="main" >
        <div style={this.state.sty ? { display: this.state.disp } : { display: this.state.disp }}>
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
          <ul className="product-detail-tab">
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
            <div id="detailPanelDesc" className="detail-panel-desc" style={select[1] ? { display: 'block' } : { display: 'none' }} >
              {datalist.productDetail}
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
            <li><div className="product-footer-home"><i className="iconfont icon-shouye-shouye"></i><p>首页</p></div></li>
            <li className="product-footer-dot"><i className="iconfont icon-cust"></i><p>客服</p></li> <li><i className="iconfont icon-star01"></i> <p>收藏</p></li>
            <li className="product-footer-buy product-footer-heavy" >立即预订</li>
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
                    <ul className="suite-flex suite-pick">
                      <li className="suite-select" onClick={this.sellt.bind(this,idx)}><i className="iconfont icon-shuruzhengque"  style={sect[idx]?{display:'block'}:{display:'none'}}></i></li>
                      <li className="suite-name">{item.groupName}
                      </li>
                      <li className="flex-shrink suite-price">
                        <p className={item.buyMax}><b>{`￥ ${item.groupPrice}`} </b></p>
                      </li>
                    </ul>
                    <div style={sect[idx]?{display:'block'}:{display:'none'}}>
                      <ul className="suite-flex suite-count" >
                        <li className="suite-count-text">购买数量:</li>
                        <li className="disable" onClick={this.low.bind(this, idx)} ref={(ele) => this.title = ele}>-</li>
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
        </div>

      </section>

    </div>
  }
}

export default Meiwu;