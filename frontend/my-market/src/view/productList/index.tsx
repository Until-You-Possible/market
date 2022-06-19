
import React, { useEffect, useState } from "react";
import { Breadcrumb, Pagination, Radio, Image, Empty, Spin } from "antd";
import { Constants } from "../../model/constant";
import { Link, useLocation } from "react-router-dom";
import { ListDataType, SearchKeywordType} from "../../dataType/product";
import { productApi } from "../../api/product";
import { helper } from "../../util/helper";
import qs from "query-string";


const ProductList: React.FC = () => {

    const [currentButton, setCurrentButton] = useState<string>(Constants.productListOrder.RECOMMEND);

    const [currentPage, setCurrentPage] = useState<number>(1)

    const [total, setTotal] = useState<number>(0);

    const [loading, setLoading] = useState<boolean>(false);

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
        // 重置列表函数
        resetListParams()
    }, [keyword]);

    const getListData = (orderType?: string, pageNum?:number) => {
        const params: SearchKeywordType = {
            pageNum  : pageNum || 1,
            pageSize : 10,
            orderBy  : orderType || Constants.SearchOrderBy.DEFAULT,
            keyword  : keyword
        }
        setLoading(false);
        setTimeout(() => {
            productApi.fetchProductList(params).then(res => {
                setLoading(true);
                if (helper.successResponse(res)) {
                    setTotal(res.data.total);
                    setProductData(res.data.list);
                }
            });
        }, 2000)
    }

    const paginationFunc = (page: number) => {
        setCurrentPage(page);
        getListData(Constants.SearchOrderBy.DEFAULT, page);
    }

    // 如果图片加在失败了 给定一张默认的图片 fallback给定默认字符串即可
    const imageError = (event: any) => {
        console.log("图片加在失败");
    }

    const resetListParams = () => {
        setTotal(0);
        setCurrentButton(Constants.productListOrder.RECOMMEND);
        setCurrentPage(1);
    }

    // 列表的渲染
    const renderProductList = () => {
        if (productData.length) {
            return productData.map((item, index) => {
                return <div className="listItem" key={index}>
                    <div className="itemImage">
                        <Image onError={imageError} fallback={require("../../img/failImage.jpeg")} src={item.imageHost + item.mainImage} alt="图片"/>
                    </div>
                    <div className="priceContainer">
                        ¥{item.price}
                    </div>
                    <div className="nameContainer">
                        <div>{item.name}</div>
                        <div>{item.subtitle}</div>
                    </div>
                </div>
            });
        }
        if (!productData.length && loading) {
            return <Empty description="暂无查询数据" />
        }
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
        <Spin spinning={!loading}>
            <div className="listContainer">
                {
                    renderProductList()
                }
            </div>
        </Spin>
        <div className="paginationWrap">
            {
                productData.length ? <Pagination onChange={paginationFunc} defaultCurrent={currentPage} total={total} /> : null
            }
        </div>

    </div>
}

export default ProductList