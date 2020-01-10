import React,{Component} from 'react';
import { Carousel } from 'antd';
import 'antd/dist/antd.css'
import '../css/xiangqing.css'
import '../utils/base.css'
import '../utils/icon.css'
import Goodlist from '../api/Goodlist';
class Meiwu extends Component{
    constructor(props){
      
        super(props);
        
        this.state={
            dots:false,
            datalist:{},
            img:[],
            feiyong:[],
            xuzhi:[],
            rule:[],
            select:[true,false,false],
            likelistall:[]
        }
    }
    async componentDidMount(){ 
      // console.log(this.props.location.pathname.split('/').length)
      let productId =this.props.location.pathname.split('/')[2]
      // console.log(productId)
      let channel=this.props.location.pathname.split('/')[3]
        // console.log(channel)
      let shopid='FK'
     
      if(this.props.location.pathname.split('/').length==6){
        let pvFrom=this.props.location.pathname.split('/')[4]
        let data =await Goodlist.get({
          productId,
          channel,
          pvFrom,
          shopid
        })
       
        // console.log(data)
        // console.log(data.result.productThumb)
        /*
           https://wapi.feekr.com/shop/product/detail?productId=33654&channel=5e14685e51172f8b2423a6be160a87c6&shopid=FK
           https://wapi.feekr.com/shop/product/like?productCategoryId=272&count=4&shopid=FK


          https://wapi.feekr.com/shop/product/detail?productId=37758&channel=48312&pvFrom=feekr_faxian_tehui&shopid=FK
          https://wapi.feekr.com/shop/product/like?productCategoryId=8388608&count=4&shopid=FK
        */
        
        let datalist=data.data.result
        let productCategoryId=datalist.productCategory
        let count='4'
         //获取猜你喜欢数据
        let likelist =await Goodlist.getlike({
          productCategoryId,
          count,
          shopid
        })
        let likelistall=likelist.data.result.list
        // console.log(likelistall)
        let feiyong=datalist.productContain.split('【').slice(1)
        // console.log(feiyong)
        let img=data.data.result.productThumb
        let xuzhi=datalist.usage.split('；')
        let rule=datalist.usage.split('；')
        // console.log(xuzhi)
        // console.log(datalist)
        this.setState({
          datalist,
          img,
          feiyong,
          xuzhi,
          rule,
          likelistall
        })
      }else{
        let data =await Goodlist.get({
          productId,
          channel,
          shopid
        })
        let datalist=data.data.result
 
        let productCategoryId=datalist.productCategory
        let count='4'
        //获取猜你喜欢数据
        let likelist =await Goodlist.getlike({
          productCategoryId,
          count,
          shopid
        })
        
        let likelistall=likelist.data.result.list
        // console.log(likelistall)
        let feiyong=datalist.productContain.split('【').slice(1)
        // console.log(feiyong)
        let img=data.data.result.productThumb
        // console.log(datalist)
        let xuzhi=datalist.usage.split('；')
        let rule=datalist.usage.split('；')
        // console.log(xuzhi)
        this.setState({
          datalist,
          img,
          feiyong,
          xuzhi,
          rule,
          likelistall
        })
      }
    }
    change=(aa)=>{
      if(aa=='1'){
        this.setState({
          select:[true,false,false]
        })
      }else if(aa=='2'){
        this.setState({
          select:[false,true,false]
        })
      }else if(aa=='3'){
        this.setState({
          select:[false,false,true]
        })
      }
    }
    changeMenu2=(cur)=>{
      // console.log(this.props)
      // this.props.history.push('/'+cur)
      this.props.history.go('/'+cur)
      // https://wapi.feekr.com/shop/product/detail?productId=35865&pvFrom=wap_product_like&shopid=FK
    }
    render(){
      let {datalist,img,feiyong,xuzhi,rule,select,likelistall}=this.state
      
        return <div className="xiangqing">
            
      
        <Carousel dots={this.state.dots}>
          {
             img.map(item => {
              return<img key={item} src={item} alt=""/>
          })
          }
          
        </Carousel>
          <div className="product-detail-head">
            <h5 className="product-detail-art">{datalist.productName} </h5> 
            <h3 className="product-detail-name">{datalist.productDesc} </h3> 
            <p className="product-detail-price" ><b>{`￥${datalist.productPrice}`} </b><span> 起/晚</span></p>
          </div>
          <div className="product-detail-menu"><span>选择套餐/有效期</span> <i className="iconfont icon-jiantou"></i></div>
          <section className="product-guide"><img src={datalist.head} alt={datalist.user}/> <p>{`旅游体验师 - ${datalist.user}`} </p> <h4>为你推荐</h4> <h5>{datalist.recom} </h5></section>
          <ul className="product-detail-tab">
            <li onClick={this.change.bind(this,'1')} style={select[0]?{color: 'rgb(26, 188, 156)',
              borderBottomColor: 'rgb(26, 188, 156)'}:null}>费用包含</li> 
            <li onClick={this.change.bind(this,'2')} style={select[1]?{color: 'rgb(26, 188, 156)',
              borderBottomColor: 'rgb(26, 188, 156)'}:null}>产品详情</li> 
            <li onClick={this.change.bind(this,'3')} style={select[2]?{color: 'rgb(26, 188, 156)',
              borderBottomColor: 'rgb(26, 188, 156)'}:null}>购买须知</li> 
          </ul>
         <section className="product-detail-desc">
         <div className="product-detail-contain" style={select[0]?{display:'block'}:{display:'none'}}>
          {
            feiyong.map(item => {
              return <p key={item}>
                {`【${item}`}
              </p>
          })
          }
         </div>
          <div id="detailPanelDesc" className="detail-panel-desc" style={select[1]?{display:'block'}:{display:'none'}} >
            {datalist.productDetail}
          </div>
          <div className="buy-notice" style={select[2]?{display:'block'}:{display:'none'}} >
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
                rule.map((item,idx) => {
                  return <p key={`${idx+1}.${item}`}>
                    {`${idx+1}.${item}`}
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
                      <div  className="common-goods recommend-item"onClick={this.changeMenu2.bind(this,`xiangqing/${item.productId}`)} key={item.productId} >
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
       
    }
}

export default Meiwu;