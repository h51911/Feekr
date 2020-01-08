import React from 'react';
function Title(props){
    let data=props
    // console.log(data.data.t1)
    let t1=data.data.t1
    let t2=data.data.t2
return<section className="title"> <span className="header-line"></span> <span className="font-llg header-title">{t1}</span> <span className="sub-title">{t2}</span>
    </section>
}


export default Title;