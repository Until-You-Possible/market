import React, {useEffect, useState} from 'react';
import { Button, Carousel, Col, Row, Space } from "antd";
import "../css/category.css";
import slideList from "../mockData/sliders.json";
import imgURL1 from "../img/banner/banner1.jpg";
import imgURL2 from "../img/banner/banner2.jpg";
import imgURL3 from "../img/banner/banner3.jpg";
import imgURL4 from "../img/banner/banner4.jpg";
import imgURL5 from "../img/banner/banner5.jpg";



const Category: React.FC = () => {

        const [size] = useState<number>(2);

        useEffect( () => {
            console.log("imgURL1", imgURL1)
        }, []);

        const judgeSlideImage = (index: number) => {
            if (index === 1) {
                return imgURL1;
            }
            if (index === 2) {
                return imgURL2;
            }
            if (index === 3) {
                return imgURL3;
            }
            if (index === 4) {
                return imgURL4;
            }
            if (index === 5) {
                return imgURL5;
            }
        }

        return <div className="wrap categoryWrap">
            <Row gutter={[18,0]} className="categoryRow">
                <Col span={6} className="goodWrapper">
                    <Row>
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
                        {
                            slideList.arrayList && slideList.arrayList.map((response, index) => {
                                return <div key={response.category}>
                                    {
                                        <img src={judgeSlideImage(index+1)} alt=""/>
                                    }
                                </div>
                            })
                        }
                    </Carousel>
                </Col>
            </Row>
        </div>

}

export default Category;