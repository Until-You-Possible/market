
import React from "react";
import {Row, Col, Button} from "antd";
import "../css/navHeader.css"
import { ShoppingCartOutlined } from "@ant-design/icons";
interface IProps {

}

interface IState {

}

class HavHeader extends React.Component<IProps, IState> {
    render () {
        return <div className="headerWrap">
            <Row className="wrap">
                <Col span={12}>
                    <Button type="link" className="ml-n1">登陆</Button>
                    <Button type="link" className="ml-n1">注册</Button>
                </Col>
                <Col className="headerCartWrap" span={12}>
                    <Button type="link" icon={<ShoppingCartOutlined />}>购物车</Button>
                    <Button type="link">我的订单(0)</Button>
                    <Button type="link">我的信息</Button>
                    <Button type="link">关于我</Button>
                </Col>
            </Row>
        </div>
    }
}

export default HavHeader;