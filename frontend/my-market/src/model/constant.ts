// 整理常用的常量

export namespace Constants {
    export enum Status {
        SUCCESS    = 0,
        FAIL       = 1,
        FETCHING   = 2,
        NEED_LOGIN = 10
    }
    export enum ConstantString {
        USERNAME = "username",
        PASSWORD = "password"
    }
    export enum AlertMessage {
        SUCCESS = "success",
        ERROR   = "error",
        INFO    = "info",
        WARNING = "warning",
        WARN    = "warn",
        LOADING = "loading",
    }
    export enum SuccessPageType {
        RESETPASSWORD = "resetPasswordSuccess",
        REGISTER      = "registerSuccess",
        ADDBASKET     = "addBasketSuccess"
    }
    export enum SearchOrderBy {
        DEFAULT  = "default",
        PRICEASE = "price_ase"
    }
    export enum productListOrder {
        PRICE     = "price",
        RECOMMEND = "recommend"
    }
    export enum ProductInfoType {
        PRODUCTLIST   = "productList",
        PRODUCTDETAIL = "productDetail",
        CART          = "cart",
        NODATA        = "暂无查询数据"
    }
    export enum ConditionStatus {
        ZERO        = 0,
        NEGATIVEONE = -1,
        POSTIVENOE  = 1
    }
    export enum NavigationText {
        HOME   = "首页",
        LIST   = "商品列表",
        DETAIL = "商品详情"
    }
}