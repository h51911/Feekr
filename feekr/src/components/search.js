import React,{Component} from 'react';
import '../css/Search.css'
class Search extends Component{
    render(){console.log(this.props)
        return <div>
            <div className="top-search"> 
               
                <input type="text" placeholder="搜索目的地/攻略/旅行资讯"/>
             </div>
        </div>
    }
}

export default Search;