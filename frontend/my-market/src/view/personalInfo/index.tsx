import React, {CSSProperties, Fragment, useState} from "react";
import { Constants } from "../../model/constant";
import "../../css/personalInfo.css";
import NavigationHeader from "../../publicComponents/NavigationHeader";
import { Tabs } from "antd";

type TabPosition = 'left' | 'right' | 'top' | 'bottom';
const { TabPane } = Tabs;

const tabBarStyleCss:CSSProperties = {
    width     : "180px",
    textAlign : "center"
}

const PersonalInfo: React.FC = () => {

    const [mode] = useState<TabPosition>('left');

    return <Fragment>
        <div className="wrap personalContainer">
            <NavigationHeader title={Constants.NavigationTextEnum.PERSONAL} />
            <div>
                <Tabs tabBarStyle={tabBarStyleCss} type="card" defaultActiveKey="1" tabPosition={mode} style={{ height: 420 }}>
                    <TabPane tab={"个人中心"} key={"1"} >
                        个人中心
                    </TabPane>
                    <TabPane tab={"我的订单"} key={"2"} >
                        我的订单
                    </TabPane>
                    <TabPane tab={"修改密码"} key={"3"} >
                        修改密码
                    </TabPane>
                </Tabs>
            </div>
        </div>
    </Fragment>
}

export default PersonalInfo