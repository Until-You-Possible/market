
import React, { useEffect, useState } from "react";
import { Breadcrumb, Radio } from "antd";
import { Constants } from "../../model/constant";
import { Link, useLocation } from "react-router-dom";
import { ListDataType, SearchKeywordType} from "../../dataType/product";
import { productApi } from "../../api/product";
import { helper } from "../../util/helper";
import qs from "query-string";


const ProductList: React.FC = () => {

    const [currentButton, setCurrentButton] = useState<string>(Constants.productListOrder.RECOMMEND);

    const location = useLocation();


    const onChoose  = (value: string) => {
        setCurrentButton(value);
        if (value === Constants.productListOrder.RECOMMEND) {
            getListData(Constants.SearchOrderBy.DEFAULT);
        } else {
            getListData(Constants.SearchOrderBy.PRICEASE);
        }
    }


    const [productData, setProductData] = useState<Array<ListDataType>>([])

    let keyword = qs.parse(location.search).keyword;

    useEffect(() => {
        if (keyword) {
            getListData(Constants.SearchOrderBy.DEFAULT);
        }
    }, [keyword]);

    const getListData = (orderType: string) => {
        const params: SearchKeywordType = {
            pageNum  : 1,
            pageSize : 10,
            orderBy  : orderType,
            keyword  : keyword
        }
        productApi.fetchProductList(params).then(res => {
            if (helper.successResponse(res)) {
                setProductData(res.data.list);
            }
        });
    }



    return <div className="wrap productListWrap">
        <div className="breadcrumbContainer">
            <Breadcrumb>
                <Breadcrumb.Item>
                    <Link to="/home">首页</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                   商品列表
                </Breadcrumb.Item>
            </Breadcrumb>
        </div>
        <div className="buttonWrapProductList">
            <Radio.Group buttonStyle="solid" value={currentButton} onChange={e => onChoose(e.target.value)}>
                <Radio.Button value={Constants.productListOrder.RECOMMEND}>智能推荐</Radio.Button>
                <Radio.Button value={Constants.productListOrder.PRICE}>价格</Radio.Button>
            </Radio.Group>
        </div>
        <div className="listContainer">
            {
                productData && productData.map((item, index) => {
                    return <div className="listItem" key={index}>
                        <img className="itemImage" src={item.imageHost + item.mainImage} alt="图片"/>
                        <div className="priceContainer">
                            ¥{item.price}
                        </div>
                        <div className="nameContainer">
                            <div>{item.name}</div>
                            <div>{item.subtitle}</div>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
}

export default ProductList