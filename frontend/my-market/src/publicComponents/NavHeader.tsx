
import React, { useEffect, useState } from "react";
import {Row, Col, Button} from "antd";
import "../css/navHeader.css"
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { userApi } from "../api/user";
import {Constants} from "../model/constant";

const HavHeader:React.FC = () => {

    const userInfo = useState<string>("");

    // 尝试获取用户信息 (必须先登陆,在获取用户信息之前,检查用户的登陆状态)
    useEffect(() => {
        userApi.checkLoginStatus().then(res => {
            if (res.status === Constants.Status.SUCCESS) {
                userApi.getCurrentUserInfo().then(res => {
                    console.log("获取用户信息", res);
                });
            }
        });


    }, []);

    return <div className="headerWrap">
        <Row className="wrap">
            <Col span={12}>
                <Link to="/login">登陆</Link>
                <Link className="registerLink" to="/register">注册</Link>
            </Col>
            <Col className="headerCartWrap" span={12}>
                <Button type="link" icon={<ShoppingCartOutlined />}>购物车</Button>
                <Button type="link">我的订单(0)</Button>
                <Button type="link">个人中心</Button>
                <Button type="link">关于我</Button>
            </Col>
        </Row>
    </div>

}

export default HavHeader;