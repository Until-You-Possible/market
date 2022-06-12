import React from "react";
import NavHeader from "../../publicComponents/NavHeader";
import SearchComponent from "../../publicComponents/SearchComponent";
import Category from "../../publicComponents/Category";
import FooterComponent from "../../publicComponents/FooterComponent";
import Products from "../../publicComponents/Products";

function Home() {
    return (
        <div className="homeContainer">
            <NavHeader />
            <SearchComponent />
            <Category />
            <Products />
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