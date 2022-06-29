
import React, {Fragment, useCallback, useEffect, useState} from "react";
import NavigationHeader from "../../publicComponents/NavigationHeader";
import { Constants } from "../../model/constant";
import { Image } from "antd";
import { productApi } from "../../api/product";
import {useLocation } from "react-router-dom";
import qs from "query-string";
import { helper } from "../../util/helper";
import {CartProductType, DetailInformationType} from "../../dataType/productInfoType";
import { cartApi } from "../../api/cart";
import useSelfNavigate from "../../hooks/useSelfNavigate";

const ProductDetail: React.FC = () => {

    const location = useLocation();

    const [ navigatePage ] = useSelfNavigate();

    const paramsId = qs.parse(location.search).productId as string;

    let [currentChooseIndex, setCurrentChooseIndex] = useState<number>(0);

    const [detailInfo, setDetailInfo] = useState<DetailInformationType>({
        categoryId       : 0,
        createTime       : "",
        detail           : "",
        id               : 0,
        imageHost        : "",
        mainImage        : "",
        name             : "",
        parentCategoryId : 0,
        price            : 0,
        status           : 0,
        stock            : 0,
        subImages        : "",
        subtitle         : "",
        updateTime       : ""
    });

    const fetchDetailData = useCallback(() => {
        productApi.fetchProductDetail(paramsId).then(res => {
            if (helper.successResponse(res)) {
                setDetailInfo(res.data);
                setCurrentMaimImage(res.data.imageHost + res.data.mainImage);
            }
        });
    }, [paramsId]);

    // 获取detail的基本信息
    useEffect(() => {
        fetchDetailData();
    }, [fetchDetailData]);

    let [currentCount, setCurrentCount] = useState<number>(0);

    let [currentMainImage, setCurrentMaimImage] = useState<string>("")

    const plusCount = () => {
        setCurrentCount(++currentCount);
        // 如果库存为0
        if (detailInfo.stock === 0) {
            setCurrentCount(0);
            helper.showMessage("没有多余的库存啦～");
            return;
        }
        // 如果大于库存
        if (currentCount > detailInfo.stock) {
            setCurrentCount(detailInfo.stock);
            helper.showMessage("没这么多库存啦～");
            return;
        }
    }

    const minusCount = () => {
        if (currentCount <= 0) {
            setCurrentCount(0);
            return;
        }
        setCurrentCount(--currentCount);
    }

    const showCurrentImage = (item: string, index: number) => {
        setCurrentChooseIndex(index);
        let showURL = detailInfo.imageHost + item;
        setCurrentMaimImage(showURL);
    }

    const subImageList = (urls: string) => {
        if (urls.length > 0) {
            let urlsArray = urls.split(",");
            return urlsArray.map((item, index) => {
                return <Image key={index} preview={false}
                              onMouseEnter={() => showCurrentImage(item, index)}
                              onClick={() => showCurrentImage(item, index)}
                              className={["mainImage ", currentChooseIndex === index ? "chooseBorderStyle" : ""].join("")}
                              src={detailInfo.imageHost + item} />
            });
        }
        return <div>这里是图片～</div>
    }

    // 添加购物车逻辑
    const addBasketButton = () => {
        let currentStock = detailInfo.stock;
        if (currentStock === 0) {
            helper.showMessage("添加购物车的数量不能为0", Constants.AlertMessageEnum.WARN);
            return;
        }
        if (currentCount === 0) {
            helper.showMessage("请选择需要添加的数量(不能为0)", Constants.AlertMessageEnum.WARN);
            return;
        }

        let infoProduct: CartProductType = {
            productId : detailInfo.id,
            count     : currentCount
        }

        cartApi.addBasket(infoProduct).then(res => {
            if (helper.successResponse(res)) {
                navigatePage("/resultSuccess?successPageType=" + Constants.SuccessPageEnum.ADDBASKET);
            }
            if (helper.needToLogin(res)) {
                navigatePage("/login");
            }
        })
    }

    return <Fragment>
        <div className="wrap productDetailContainer">
            <NavigationHeader title={Constants.NavigationTextEnum.DETAIL} />
            <div className="detailWrap">
                <div className="imageContainer">
                    <Image width="100%" preview={false}  className="mainImage" src={currentMainImage} />
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
                        <div className="btnAddCart" onClick={addBasketButton}>加入购物车</div>
                    </div>
                </div>
            </div>
            <div className="detailContentBottom">
                <div className="detailInfoTitle">商品详情</div>
                <div className="informationDetailProduct" dangerouslySetInnerHTML={{__html: detailInfo.detail}}>
                </div>
            </div>
        </div>
    </Fragment>
}

export default ProductDetail