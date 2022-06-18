
import React from "react";
import Search from "antd/es/input/Search";
import { Col, Row } from "antd";
import { useNavigate } from "react-router-dom";

const SearchComponent:React.FC = () =>  {

    const navigation = useNavigate();

    const onSearch = (value: string) => {
        if (value) {
            navigation("/home/productList?keyword=" + value);
        }
    }

    return <div>
        <Row>
            <Col span={12} offset={6}>
                <Search
                    placeholder="请输入商品名称/例如/手机/电脑"
                    allowClear
                    enterButton="搜索"
                    size="large"
                    onSearch={onSearch}
                />
            </Col>
        </Row>
    </div>
}

export default SearchComponent;