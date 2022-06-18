// 整理常用的常量

export namespace Constants {
    export enum Status {
        SUCCESS  = 0,
        FAIL     = 1,
        FETCHING = 2
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
        REGISTER      = "registerSuccess"
    }
    export enum SearchOrderBy {
        DEFAULT  = "default",
        PRICEASE = "price_ase"
    }
    export enum productListOrder {
        PRICE     = "price",
        RECOMMEND = "recommend"
    }
}