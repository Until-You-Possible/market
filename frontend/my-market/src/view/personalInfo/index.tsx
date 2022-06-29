import React, {CSSProperties, Fragment, useEffect, useState} from "react";
import { Constants } from "../../model/constant";
import "../../css/personalInfo.css";
import NavigationHeader from "../../publicComponents/NavigationHeader";
import { Tabs } from "antd";
import PersonMessage from "./childComponent/personMessage";
import MyOrder from "./childComponent/myOrder";
import UpdatePassword from "./childComponent/updatePassword";
import { useLocation } from "react-router-dom";
import qs from "query-string";

type TabPosition = 'left' | 'right' | 'top' | 'bottom';
const { TabPane } = Tabs;

const tabBarStyleCss:CSSProperties = {
    width     : "180px",
    textAlign : "center"
}

type tabDataType = {
    tabName : string,
    key     : string,
    content : React.ReactNode
}



const PersonalInfo: React.FC = () => {

    const [ mode ] = useState<TabPosition>('left');

    const [ initTab, setInitTab ] = useState<string | undefined>("1");

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

    const location = useLocation();

    const tabIndex = qs.parse(location.search).tabIndex as string;

    useEffect(() => {

        if (tabIndex) {
            setInitTab(tabIndex);
        } else {
            setInitTab(String(Constants.PersonInfoTabEnum.INDIVIDUAL));
        }

    }, [tabIndex]);

    const onTabClickInfo = (key: string) => {
        setInitTab(key);
    }

    return <Fragment>s
        <div className="wrap personalContainer">
            <NavigationHeader title={Constants.NavigationTextEnum.PERSONAL} />
            <div>
                <Tabs tabBarStyle={tabBarStyleCss}
                      type="card"
                      activeKey={initTab}
                      onTabClick={onTabClickInfo}
                      defaultActiveKey={String(Constants.PersonInfoTabEnum.INDIVIDUAL)}
                      tabPosition={mode}
                      style={{ height: 420 }}>
                    {
                        tabArray[0].map(item => {
                            return (
                                <TabPane tab={item.tabName}
                                         key={item.key} >
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