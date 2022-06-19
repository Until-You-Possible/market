import React, {useEffect, useState} from 'react';
import {Button, Carousel, Col, Row, Space} from "antd";
import "../css/category.css";
import slideList from "../mockData/sliders.json";
import imgURL1 from "../img/banner/banner1.jpg";
import imgURL2 from "../img/banner/banner2.jpg";
import imgURL3 from "../img/banner/banner3.jpg";
import imgURL4 from "../img/banner/banner4.jpg";
import imgURL5 from "../img/banner/banner5.jpg";

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