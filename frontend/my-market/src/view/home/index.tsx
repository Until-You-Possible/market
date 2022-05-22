import React from "react";
import NavHeader from "../../publickComponents/NavHeader";
import SearchComponent from "../../publickComponents/SearchComponent";
import Category from "../../publickComponents/Category";
import FooterComponent from "../../publickComponents/FooterComponent";

function Home() {
    return (
        <div className="homeContainer">
            <NavHeader />
            <SearchComponent />
            <Category />
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