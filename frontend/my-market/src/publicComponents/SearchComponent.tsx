
import React from "react";
import Search from "antd/es/input/Search";
import { Col, Row } from "antd";
import { productApi } from "../api/product";
import { SearchKeywordType } from "../dataType/product";
import { Constants } from "../model/constant";
import { helper } from "../util/helper";

const SearchComponent:React.FC = () =>  {

    const onSearch = (value: string) => {
        if (value) {
            const params: SearchKeywordType = {
                pageNum  : 1,
                pageSize : 10,
                orderBy  : Constants.SearchOrderBy.DEFAULT,
                keyword  : value
            }
            productApi.fetchProductList(params).then(res => {
                if (helper.successResponse(res)) {
                    console.log("res list", res.data);
                }
            });
        }
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