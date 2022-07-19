
import React, { useContext } from "react";
import { Col, Row } from "antd";
import { Context } from "../view/home";
import Search from "antd/lib/input/Search";
import useSelfNavigate from "../hooks/useSelfNavigate";

const SearchComponent:React.FC = (props) =>  {

    const contextValue = useContext(Context);

    const [ navigatePage ] = useSelfNavigate();

    const onSearch = (value: string) => {
        if (value) {
            navigatePage("/home/productList?keyword=" + value);
        }
    }

    // 也可以使用URL的参数解析出来，此次使用组件之间数据的传递方式
    // const location = useLocation();
    // const currentKeyword = qs.parse(location.search).keyword as string;

    // context传递value
    // console.log("contextValue", contextValue);

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