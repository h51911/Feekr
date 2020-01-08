import React, { Component } from 'react';


import { Carousel } from 'antd';

class Banner extends Component {
    constructor() {
        super();
    }
    render() {
        return <Carousel autoplay>
            <img className="banner" src="https://banner01.feekr.com/2020/01/02/0454155e0dafb7aed57.jpg!750X360" />
            <img className="banner" src="https://banner01.feekr.com/2019/12/19/0353305dfb2c7a280ab.jpg!750X360" />
            <img className="banner" src="https://banner01.feekr.com/2019/12/19/0353305dfb2c7a280ab.jpg!750X360" />
            <img className="banner" src="https://banner01.feekr.com/2020/01/02/0454155e0dafb7aed57.jpg!750X360" />
        </Carousel>
    }
}

export default Banner;
