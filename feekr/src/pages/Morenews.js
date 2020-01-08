

import React from 'react';
function Title(props){
    let data=props
    // console.log(data.data.t1)
    let t1=data.data.t1
    let t2=data.data.t2
return  <header className="back-title" style={{borderBottom:"none"}}>
<span >最新旅行资讯</span>
<a href="" className="iconfont icon-fanhui" ></a>
</header>
}


export default Title;