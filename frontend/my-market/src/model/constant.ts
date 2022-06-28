// 整理常用的常量

export namespace Constants {
    export enum StatusEnum {
        SUCCESS    = 0,
        FAIL       = 1,
        FETCHING   = 2,
        NEED_LOGIN = 10
    }
    export enum ConstantStringEnum {
        USERNAME = "username",
        PASSWORD = "password"
    }
    export enum AlertMessageEnum {
        SUCCESS = "success",
        ERROR   = "error",
        INFO    = "info",
        WARNING = "warning",
        WARN    = "warn",
        LOADING = "loading",
    }
    export enum SuccessPageEnum {
        RESETPASSWORD  = "resetPasswordSuccess",
        REGISTER       = "registerSuccess",
        ADDBASKET     = "addBasketSuccess",
        UPDATEPASSWORD = "updatePasswordSuccess"
    }
    export enum SearchOrderByEnum {
        DEFAULT  = "default",
        PRICEASE = "price_ase"
    }
    export enum productListOrderEnum {
        PRICE     = "price",
        RECOMMEND = "recommend"
    }
    export enum ProductInfoEnum {
        PRODUCTLIST   = "productList",
        PRODUCTDETAIL = "productDetail",
        CART          = "cart",
        PERSONALINFO  = "personalInfo",
        ORDERDETAIL   = "orderDetail",
        PAYMENT       = "payment",
        ORDERLIST     = "orderList",
        NODATA        = "暂无查询数据"
    }
    export enum ConditionStatusEnum {
        ZERO        = 0,
        NEGATIVEONE = -1,
        POSTIVENOE  = 1
    }
    export enum NavigationTextEnum {
        HOME        = "首页",
        LIST        = "商品列表",
        DETAIL      = "商品详情",
        CART        = "购物车",
        PERSONAL    = "个人中心",
        ORDERDETAIL = "订单详情",
        PAYMENT     = "订单支付"
    }
}