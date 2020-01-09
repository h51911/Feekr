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
            img:[]
        }
    }
    async componentDidMount(){ 
      let {productId} =this.props.location.state
      let {channel}=this.props.location.state
      let {shopid}=this.props.location.state
      if(this.props.location.state.pvFrom){
        let {pvFrom}=this.props.location.state
        let data =await Goodlist.get({
          productId,
          channel,
          pvFrom,
          shopid
        })
        // console.log(data)
        // console.log(data.result.productThumb)
        let datalist=data.data.result
        let img=data.data.result.productThumb
        // console.log(datalist)
        this.setState({
          datalist,
          img
        })
      }else{
        let data =await Goodlist.get({
          productId,
          channel,
          shopid
        })
        let datalist=data.data.result
        let img=data.data.result.productThumb
        // console.log(datalist)
        this.setState({
          datalist,
          img
        })
      }
   
    }
    render(){
      let {datalist,img}=this.state
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
        
       
        </div>
    }
}

export default Meiwu;