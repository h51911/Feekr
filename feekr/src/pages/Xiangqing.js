import React,{Component} from 'react';
import { Carousel } from 'antd';
import '../css/xiangqing.css'
class Meiwu extends Component{
    constructor(props){
      
        super(props);
        console.log(this.props)
        this.state={
            dots:false
        }
    }
    render(){
        return <div className="xiangqing">
            
      
        <Carousel dots={this.state.dots}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
        </Carousel>
      
        </div>
    }
}

export default Meiwu;