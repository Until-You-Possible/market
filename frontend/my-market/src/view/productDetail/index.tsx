
import React, {Fragment, useEffect, useState} from "react";
import NavigationHeader from "../../publicComponents/NavigationHeader";
import { Constants } from "../../model/constant";
import { Image } from "antd";
import {productApi} from "../../api/product";
import {useLocation} from "react-router-dom";
import qs from "query-string";
import {helper} from "../../util/helper";
import { detailInformationType } from "../../dataType/product";

const ProductDetail: React.FC = () => {

    const location = useLocation();

    const paramsId = qs.parse(location.search).productId as string;

    const [detailInfo, setDetailInfo] = useState<detailInformationType>({
        categoryId: 0,
        createTime: "",
        detail: "",
        id: 0,
        imageHost: "",
        mainImage: "",
        name: "",
        parentCategoryId: 0,
        price: 0,
        status: 0,
        stock: 0,
        subImages: "",
        subtitle: "",
        updateTime: ""
    });

    // 获取detail的基本信息
    useEffect(() => {
        productApi.fetchProductDetail(paramsId).then(res => {
            if (helper.successResponse(res)) {
                setDetailInfo(res.data);
            }
        });
    }, []);

    let [currentCount, setCurrentCount] = useState<number>(0);

    const plusCount = () => {
        setCurrentCount(++currentCount);
        // 如果库存为0
        if (detailInfo.stock === 0) {
            setCurrentCount(0);
            return;
        }
        // 如果大于库存
        if (currentCount > detailInfo.stock) {
            setCurrentCount(detailInfo.stock);
            helper.showMessage("没这么多库存啦～")
        }
    }

    const minusCount = () => {
        if (currentCount <= 0) {
            setCurrentCount(0);
            return;
        }
        setCurrentCount(--currentCount);
    }

    const subImageList = (urls: string) => {
        if (urls.length > 0) {
            let urlsArray = urls.split(",");
            return urlsArray.map((item, index) => {
                return <Image key={index} preview={false}  className="mainImage" src={detailInfo.imageHost + item} />
            });
        }
        return <div>图片</div>
    }

    return <Fragment>
        <div className="wrap productDetailContainer">
            <NavigationHeader title={Constants.NavigationText.DETAIL} />
            <div className="detailWrap">
                <div className="imageContainer">
                    <Image preview={false}  className="mainImage" src={detailInfo.imageHost + detailInfo.mainImage} />
                    <div className="thumbnailWrap">
                        <div className="nailItem">
                            {
                                subImageList(detailInfo.subImages)
                            }
                        </div>
                    </div>
                </div>
                <div className="productInfoWrap">
                    <div className="name">
                        {detailInfo.name}
                    </div>
                    <div className="subTitle">
                        {detailInfo.subtitle}
                    </div>
                    <div className="priceCon">
                        <span className="label">价格：</span>
                        <span className="price">¥{detailInfo.price}</span>
                    </div>
                    <div className="quantityCon">
                        库存： {detailInfo.stock}
                    </div>
                    <div className="chooseCountContainer">
                        <div className="label">数量：</div>
                        <div className="currentCount">{currentCount}</div>
                        <div className="addOrMinusCount">
                            <span className="plus btnChangeCount" onClick={plusCount}>+</span>
                            <span className="minus btnChangeCount" onClick={minusCount}>-</span>
                        </div>
                    </div>
                    <div className="addBasketButton">
                        <div className="btnAddCart">加入购物车</div>
                    </div>
                </div>
                <div className="detailContentBottom">

                </div>
            </div>
        </div>
    </Fragment>
}

export default ProductDetail