import React, { CSSProperties, Fragment, useState } from "react";
import { Constants } from "../../model/constant";
import "../../css/personalInfo.css";
import NavigationHeader from "../../publicComponents/NavigationHeader";
import { Tabs } from "antd";
import PersonMessage from "./childComponent/personMessage";
import MyOrder from "../myOrder";
import UpdatePassword from "./childComponent/updatePassword";

type TabPosition = 'left' | 'right' | 'top' | 'bottom';
const { TabPane } = Tabs;

const tabBarStyleCss:CSSProperties = {
    width     : "180px",
    textAlign : "center"
}

type tabDataType = {
    tabName : string,
    key     : string,
    content : any
}



const PersonalInfo: React.FC = () => {

    const [mode] = useState<TabPosition>('left');

    let tabArray = useState<Array<tabDataType>>([
        {
            tabName: "个人中心",
            key: "1",
            content: <PersonMessage />
        },
        {
            tabName: "我的订单",
            key: "2",
            content: <MyOrder />
        },
        {
            tabName: "修改密码",
            key: "3",
            content: <UpdatePassword />
        }
    ]);

    return <Fragment>
        <div className="wrap personalContainer">
            <NavigationHeader title={Constants.NavigationTextEnum.PERSONAL} />
            <div>
                <Tabs tabBarStyle={tabBarStyleCss} type="card" defaultActiveKey="1" tabPosition={mode} style={{ height: 420 }}>
                    {
                        tabArray[0].map(item => {
                            return (
                                <TabPane tab={item.tabName} key={item.key} >
                                    {item.content}
                                </TabPane>
                            )
                        })
                    }
                </Tabs>
            </div>
        </div>
    </Fragment>
}

export default PersonalInfo