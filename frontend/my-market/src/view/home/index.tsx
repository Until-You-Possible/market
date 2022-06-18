import React from "react";
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

function Home() {

    const location = useLocation();

    const showDifferentComp = (location: any) => {
        if (location.pathname.includes("productList")) {
            return null
        }
        return <div>
            <Category />
            <Products />
        </div>
    }

    return (
        <div className="homeContainer">
            <NavHeader />
            <SearchComponent />
            {
                showDifferentComp(location)
            }
            <Routes>
                <Route path="/productList" element={<ProductList/>}/>
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