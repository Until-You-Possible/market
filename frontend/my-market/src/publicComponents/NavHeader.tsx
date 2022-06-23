
import React, { useEffect, useState } from "react";
import {Row, Col } from "antd";
import "../css/navHeader.css"
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { userApi } from "../api/user";
import { cartApi } from "../api/cart";
import {helper} from "../util/helper";

const HavHeader:React.FC = () => {

    const [userInfo, setUserInfo] = useState<string>("");

    const [cartNumber, setCartNumber] = useState<number>(0)

    useEffect(() => {

        //检查登录状态
        userApi.checkLoginStatus().then((res) => {
            if (helper.successResponse(res)) {
                // 获取用户信息
                userApi.getCurrentUserInfo().then(res => {
                    setUserInfo(res.data.username)
                });
            }
        });

        // 获取购物车数量
        cartApi.getBasketCount().then((res) => {
            setCartNumber(res.data);
        });


    }, []);

    // 退出
    const logOut = () => {
         userApi.logOut().then((res) => {
             if (helper.successResponse(res)) {
                 helper.showMessage("已经退出，欢迎下次再来～");
                 setUserInfo("");
             }
        });
    }

    return <div className="headerWrap">
        <Row className="wrap">
            {
                userInfo ?
                    <Col span={12} className="userInfoWrapperHeader">
                        <div>欢迎 { userInfo }</div>
                        <div className="uiMarginLeft" onClick={logOut}>退出</div>
                    </Col>
                :
                    <Col span={12} className="userInfoWrapperHeader">
                        <Link to="/login">登陆</Link>
                        <Link className="registerLink" to="/register">注册</Link>
                    </Col>
            }
            <Col className="headerCartWrap" span={12}>
                <div><ShoppingCartOutlined style={{marginRight: "4px"}} />购物车({cartNumber})</div>
                <div className="uiMarginLeft">我的订单</div>
                <div className="uiMarginLeft userInfoWrapperHeader">
                    <Link to="/home/personalInfo">个人中心</Link>
                </div>
                <div className="uiMarginLeft">关于我</div>
            </Col>
        </Row>
    </div>

}

export default HavHeader;