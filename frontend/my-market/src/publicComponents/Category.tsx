import React, {useEffect, useState} from 'react';
import {Button, Carousel, Col, Row, Space} from "antd";
import "../css/category.css";
import slideList from "../mockData/sliders.json";
import categoriesList from "../mockData/category.json";
import { useNavigate } from "react-router-dom";

interface PropsSearch {
    getSearchKeyword: (key: string) => void
}
const Category: React.FC<PropsSearch> = (props) => {

        const [size] = useState<number>(2);

        const navigate = useNavigate();

        useEffect( () => {

        }, []);

        const onCategory = (event: any, keyword: any) => {
            navigate("/home/productList?keyword=" + keyword);
            // 将keyword传递到home
            props.getSearchKeyword(keyword);
        }

        const judgeSlideImage = (index: number) => {
            return require(`../img/banner/banner${index}.jpg`);
            
        }

        return <div className="wrap categoryWrap">
            <Row gutter={[18,0]} className="categoryRow">
                <Col span={6} className="goodWrapper">
                    <Row>
                        {
                            categoriesList.categories.map((items, index) =>
                                <Col span={24} key={index}>
                                    <Space size={size}>
                                        {
                                            items.map((item, idx) =>
                                                <Button key={idx}
                                                        type="link"
                                                        onClick={(event) => onCategory(event, item.text)}>
                                                    {item.text}
                                                </Button>
                                            )
                                        }
                                    </Space>
                                </Col>
                            )
                        }
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