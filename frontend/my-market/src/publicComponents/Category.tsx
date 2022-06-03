import React, {useEffect, useState} from 'react';
import {Button, Carousel, Col, Row, Space} from "antd";
import "../css/category.css";

const contentStyle: React.CSSProperties = {
    color: '#fff',
    lineHeight: '322px',
    textAlign: 'center',
    background: '#364d79',
}

const Category: React.FC = () => {
        const [size] = useState(2);

        useEffect( () => {
            const fetchData = async () => {
                // const productList = await productApi.fetchProductList();
                // console.log("productList", productList);
            }
            fetchData().then(r => console.log(r));

        }, [])

        return <div className="wrap categoryWrap">
            <Row className="categoryRow">
                <Col span={6}>
                    <Row className="goodWrapper">
                        <Col span={24}>
                            <Space size={size}>
                                <Button type="link">手机</Button>
                                <Button type="link">数码</Button>
                            </Space>
                        </Col>
                        <Col span={24}>
                            <Button type="link">电脑</Button>
                            <Button type="link">办公配件</Button>
                        </Col>
                        <Col span={24}>
                            <Space size={size}>
                                <Button type="link">电视</Button>
                                <Button type="link">空调</Button>
                                <Button type="link">冰箱</Button>
                                <Button type="link">洗衣机</Button>
                            </Space>
                        </Col>
                        <Col span={24}>
                            <Space size={size}>
                                <Button type="link">厨卫家电</Button>
                                <Button type="link">小家电</Button>
                            </Space>
                        </Col>
                        <Col span={24}>
                            <Space size={size}>
                                <Button type="link">家具</Button>
                                <Button type="link">家装</Button>
                            </Space>
                        </Col>
                        <Col span={24}>
                            <Space size={size}>
                                <Button type="link">个护化妆</Button>
                                <Button type="link">清洁</Button>
                                <Button type="link">纸品</Button>
                            </Space>
                        </Col>
                        <Col span={24}>
                            <Space size={size}>
                                <Button type="link">母婴</Button>
                                <Button type="link">玩具</Button>
                                <Button type="link">童装童鞋</Button>
                            </Space>
                        </Col>
                        <Col span={24}>
                            <Space size={size}>
                                <Button type="link">鞋靴</Button>
                                <Button type="link">箱包</Button>
                                <Button type="link">钟表</Button>
                                <Button type="link">珠宝</Button>
                            </Space>
                        </Col>
                        <Col span={24}>
                            <Space size={size}>
                                <Button type="link">户外运动</Button>
                                <Button type="link">足球</Button>
                                <Button type="link">汽车生活</Button>
                            </Space>
                        </Col>
                        <Col span={24}>
                            <Space size={size}>
                                <Button type="link">图书</Button>
                                <Button type="link">音响</Button>
                                <Button type="link">电子书</Button>
                            </Space>
                        </Col>
                    </Row>
                </Col>
                <Col span={18}>
                    <Carousel autoplay>
                        <div>
                            <h3 style={contentStyle}>1</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>2</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>3</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>4</h3>
                        </div>
                    </Carousel>
                </Col>
            </Row>
        </div>

}

export default Category;