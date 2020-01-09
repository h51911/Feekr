import React, { Component } from 'react';
import '../css/Theme.scss'
import { Tabs, TabPane } from 'antd';
class Theme extends Component {
    render() {
        // const { TabPane } = Tabs;
        // function callback(key) {
        //     console.log(key);
        // }
        return <div>
            <div className="guide-wrap guide-theme-list-wrap">
                {/* <Tabs defaultActiveKey="5" onChange={callback} >
                    <TabPane tab="美景" key="1" >
                    </TabPane>
                    <TabPane tab="美食" key="5">
                    </TabPane>
                    <TabPane tab="美物" key="3">
                    </TabPane>
                    <TabPane tab="美宿" key="4">
                    </TabPane>
                </Tabs> */}
                <div className="notice-tab">
                    <a href="/guide/theme_list?id=6169&amp;category=1&amp;pv_from=guide_theme" className="tab" style={{ width: "21%" }} data-id="1">
                        美景
                    </a>
                    <span>|</span>
                    <a href="/guide/theme_list?id=6169&amp;category=2&amp;pv_from=guide_theme" className="tab" style={{ width: "21%" }} data-id="2">
                        美食
                    </a>
                    <span>|</span>
                    <a href="/guide/theme_list?id=6169&amp;category=3&amp;pv_from=guide_theme" className="tab cur" style={{ width: "21%" }} data-id="3">
                        美宿
                    </a>
                    <span>|</span>
                    <a href="/guide/theme_list?id=6169&amp;category=4&amp;pv_from=guide_theme" className="tab" style={{ width: "21%" }} data-id="4">
                        美物
                    </a>
                </div>
                <div className="guide-theme-list-container theme-mode body-space">
                    <div className="list-wrap">
                        <a className="theme-item theme-item-city" href="/guide/theme_detail?id=lZdx&amp;pv_from=guide_theme" data-target="ajax">
                            <div className="thumb-wrap">
                                <img data-original="https://play01.feekr.com/2017/01/12/2010142569981bc866f1c0514bd581a34081e7.jpg!640X270" className="" src="https://play01.feekr.com/2017/01/12/2010142569981bc866f1c0514bd581a34081e7.jpg!640X270" />
                            </div>
                            <div className="theme-desc">
                                <div className="content">重庆六大文艺小众玩乐地</div>

                                <div className="style-tag">
                                    <span className="series font-md regular-font">6大推荐</span>
                                </div>

                            </div>
                            <div className="cover"></div>
                        </a>

                        <a className="theme-item theme-item-city" href="/guide/theme_detail?id=lZdq&amp;pv_from=guide_theme" data-target="ajax">
                            <div className="thumb-wrap">
                                <img data-original="https://play01.feekr.com/2017/01/13/0641451b05fc8bf2744784944ec1edcca2ca78.jpg!640X270" className="" src="https://play01.feekr.com/2017/01/13/0641451b05fc8bf2744784944ec1edcca2ca78.jpg!640X270" />
                            </div>
                            <div className="theme-desc">
                                <div className="content">来重庆，这六大景点最适合拍照</div>

                                <div className="style-tag">
                                    <span className="series font-md regular-font">6大推荐</span>
                                </div>

                            </div>
                            <div className="cover"></div>
                        </a>
                    </div>
                    <div className="loading-notice"></div>
                </div>
            </div>
        </div>
    }
}

export default Theme;