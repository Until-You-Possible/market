
import React from "react";
import Search from "antd/es/input/Search";
import {Col, Row} from "antd";

interface IProps {

}

interface IState {

}

class SearchComponent extends React.Component<IProps, IState> {

    onSearch () {
        console.log("search");
    }
    render () {
        return <div>

            <Row>
                <Col span={12} offset={6}>
                    <Search
                        placeholder="请输入商品名称"
                        allowClear
                        enterButton="搜索"
                        size="large"
                        onSearch={this.onSearch}
                    />
                </Col>
            </Row>
        </div>
    }
}

export default SearchComponent;