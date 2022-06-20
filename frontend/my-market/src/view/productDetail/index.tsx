
import React, { Fragment } from "react";
import NavigationHeader from "../../publicComponents/NavigationHeader";
import { Constants } from "../../model/constant";
import { Image } from "antd";

const ProductDetail: React.FC = () => {
    return <Fragment>
        <div className="wrap productDetailContainer">
            <NavigationHeader title={Constants.NavigationText.DETAIL} />
            <div className="detailWrap">
                <div className="imageContainer">
                    <Image preview={false}  className="mainImage" src="http://img.happymmall.com/4d0e604e-834d-49e8-9050-e443bf20b06f.jpg" />
                    <div className="thumbnailWrap">
                        <div className="nailItem">
                            <Image preview={false} src="http://img.happymmall.com/4d0e604e-834d-49e8-9050-e443bf20b06f.jpg" />
                        </div>
                    </div>
                </div>
                <div className="productInfoWrap">
                    <div className="name">
                        Apple iPhone 11 Pro (A2217) 256GB 暗夜绿色 移动联通电信4G手机 双卡双待
                    </div>
                    <div className="subTitle">
                        移动联通电信4G手机 双卡双待
                    </div>
                    <div className="priceCon">
                        <span className="label">价格：</span>
                        <span className="price">¥4567</span>
                    </div>
                    <div className="quantityCon">
                        库存： 35
                    </div>
                    <div className="addBasketButton">
                        <div className="btnAddCart">加入购物车</div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
}

export default ProductDetail