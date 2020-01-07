import React, { Component } from 'react';
import Search from '../components/search';

import { Carousel } from 'antd';

import '../css/Dujia.css';

class Dujia extends Component {
    render() {
        return <div>
            <Search />
            <Carousel>
                <div className="slick-slide"><img src="https://banner01.feekr.com/2019/12/25/0524295e032acda5c37.jpg!750X360"></img></div>
                {/* <div><img src="https://banner01.feekr.com/2019/12/25/0524295e032acda5c37.jpg!750X360"></img></div>
                <div><img src="https://banner01.feekr.com/2019/12/25/0524295e032acda5c37.jpg!750X360"></img></div> */}
            </Carousel>
        </div>
    }
}

export default Dujia;