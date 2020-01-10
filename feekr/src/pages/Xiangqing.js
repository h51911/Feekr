import React,{Component} from 'react';
import { Carousel } from 'antd';
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
            feiyong:[]
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
        
        let datalist=data.data.result
        let feiyong=datalist.productContain.split('【')
        console.log(feiyong)
        let img=data.data.result.productThumb
        // console.log(datalist)
        this.setState({
          datalist,
          img,
          feiyong
        })
      }else{
        let data =await Goodlist.get({
          productId,
          channel,
          shopid
        })
        let datalist=data.data.result
        let feiyong=datalist.productContain.split('【').slice(1)
        console.log(feiyong)
        let img=data.data.result.productThumb
        // console.log(datalist)
        this.setState({
          datalist,
          img,
          feiyong
        })
      }
   
    }
    render(){
      let {datalist,img,feiyong}=this.state
      
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
          <section className="product-guide"><img src=""alt=""/> <p>{`旅游体验师 - ${datalist.user}`} </p> <h4>为你推荐</h4> <h5>{datalist.recom} </h5></section>
          <ul className="product-detail-tab">
            <li>费用包含</li> 
            <li>产品详情</li> 
            <li>购买须知</li> 
          </ul>
         <section className="product-detail-desc">
         <div className="product-detail-contain">
          {
            feiyong.map(item => {
              return <p>
                {`【${item}`}
              </p>
          })
          }
         </div>
         {/* <section class="product-detail-desc">

         </section> */}
         </section>
        </div>
       
    }
}

export default Meiwu;