import React,{Component} from 'react';
import { Carousel, Row, Col } from 'antd';
import api from '../api/index'
// console.log(api)
class Goods extends Component{
    constructor(){
        super();
        this.state={
            datalist:[]
        }
    }
    
    async componentDidMount(){
        let{id}=this.props.match.params;
        let {data}=await api.get({
            act:'goods',
            op:'goods_detail',
            goods_id:id
        })

        console.log(data.datas)
        let data1=data.datas
        this.setState({
           datalist:{
               goods_image:data.datas.goods_image
           }
        })
    }
    render(){
        return <div>
            Goods
        </div>
    }
}

export default Goods;