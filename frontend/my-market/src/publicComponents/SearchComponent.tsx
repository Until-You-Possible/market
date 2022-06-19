
import React, {useContext, useEffect, useState} from "react";
import Search from "antd/es/input/Search";
import { Col, Row } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { Context } from "../view/home";
import qs from "query-string";

const SearchComponent:React.FC = (props) =>  {

    const navigation = useNavigate();

    const contextValue = useContext(Context);


    const onSearch = (value: string) => {
        if (value) {
            navigation("/home/productList?keyword=" + value);
        }
    }

    // 也可以使用URL的参数解析出来，此次使用组件之间数据的传递方式
    // const location = useLocation();
    // const currentKeyword = qs.parse(location.search).keyword as string;

    console.log("contextValue", contextValue);

    useEffect(() => {

    }, []);

    return <div>
        <Row>
            <Col span={12} offset={6}>
                <Search
                    key={contextValue}
                    placeholder="请输入商品名称/例如/手机/电脑"
                    allowClear
                    defaultValue={contextValue}
                    enterButton="搜索"
                    size="large"
                    onSearch={onSearch}
                />
            </Col>
        </Row>
    </div>
}

export default SearchComponent;