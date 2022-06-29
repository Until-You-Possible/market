import React, {createContext, Fragment, useEffect, useState } from "react";
import NavHeader from "../../publicComponents/NavHeader";
import SearchComponent from "../../publicComponents/SearchComponent";
import Category from "../../publicComponents/Category";
import FooterComponent from "../../publicComponents/FooterComponent";
import Products from "../../publicComponents/Products";
import {
    Route,
    Routes,
    useLocation
} from "react-router-dom";

import ProductList from "../productList";
import ProductDetail from "../productDetail";
import { Constants } from "../../model/constant";
import Cart from "../cart";
import PersonalInfo from "../personalInfo";
import OrderDetail from "../orderDetail";
import Payment from "../payment";
import OrderList from "../orderList";

export const Context = createContext<string>("");


function Home() {

    const location = useLocation();

    const [categoryKey, setCategoryKey] = useState<string>("");

    const showDifferentComp = (location: any) => {
        let listExist = [
            Constants.ProductInfoEnum.PRODUCTLIST,
            Constants.ProductInfoEnum.CART,
            Constants.ProductInfoEnum.ORDERDETAIL,
            Constants.ProductInfoEnum.PAYMENT,
            Constants.ProductInfoEnum.PERSONALINFO,
            Constants.ProductInfoEnum.ORDERLIST,
            Constants.ProductInfoEnum.PRODUCTDETAIL
        ];
        let isExist = listExist.filter(v => location.pathname.includes(v));
        if (isExist.length > Constants.ConditionStatusEnum.ZERO) {
            return null;
        }
        return <Fragment>
            <div>
                <Category getSearchKeyword={getChildrenKeyword} />
                <Products />
            </div>
        </Fragment>
    }

    useEffect(() => {

    }, []);

    const getChildrenKeyword = (key: string): void => {
        setCategoryKey(key);
    }

    return (
        <div className="homeContainer">
            <NavHeader />
            <Context.Provider value={categoryKey}>
                <SearchComponent />
            </Context.Provider>
            {
                showDifferentComp(location)
            }
            <Routes>
                <Route path="/productList" element={<ProductList/>}/>
                <Route path="/productDetail" element={<ProductDetail/>}/>
                <Route path="/cart" element={<Cart />}/>
                <Route path="/personalInfo" element={<PersonalInfo />}/>
                <Route path="/orderDetail" element={<OrderDetail />}/>
                <Route path="/payment" element={<Payment />}/>
                <Route path="/orderList" element={<OrderList />}/>
            </Routes>
            <FooterComponent />
        </div>
    )
}

export default Home

// 登陆注册的头部
// 搜索组件
// 左侧菜单组件
// 右边轮播
// 中间物品分类组件
// 底部组件