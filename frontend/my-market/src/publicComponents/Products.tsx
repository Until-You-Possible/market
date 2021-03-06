import React from "react";
import { Col, Row } from "antd";
import "../css/products.css";
import productJson from "../mockData/productFloor.json";
import useSelfNavigate from "../hooks/useSelfNavigate";

const Products:React.FC = () =>   {

    const [ navigatePage ] = useSelfNavigate();

    const goToDetail = (id: string) => {
        navigatePage("/home/productList?categoryId=" +  id);
    }

    return (
        <div className=" wrap productWrap">
             <div>
                 {
                     productJson && productJson.map((items, index) =>
                         <div key={index}>
                             <div className="titleName">{items.title}</div>
                             {
                                 <Row gutter={[12,0]}>
                                     {
                                         items.list.map((item, idx) =>
                                             <Col className="gutter-row" span={5} key={idx}>
                                                 <div className="styleSingle" onClick={() => goToDetail(item.categoryId)}>
                                                     <span className="floorText">{item.title}</span>
                                                     <img className="productListItem" src={require(`/src/img/floor${item.path}`)} alt={item.title}/>
                                                 </div>
                                             </Col>
                                         )
                                     }
                                 </Row>
                             }
                         </div>
                     )
                 }
             </div>
        </div>
    )
}

export default Products;