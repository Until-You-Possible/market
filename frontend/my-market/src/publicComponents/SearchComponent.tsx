
import React from "react";
import Search from "antd/es/input/Search";
import {Col, Row} from "antd";

const SearchComponent:React.FC = () =>  {

    function onSearch() {

    }
    return <div>
        <Row>
            <Col span={12} offset={6}>
                <Search
                    placeholder="请输入商品名称"
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