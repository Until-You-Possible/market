import {ListDataType} from "./productInfoType";

export {}


export type OrderListResultType = {
    endRow           : number,
    firstPage        : number,
    hasNextPage      : boolean,
    hasPreviousPage  : boolean,
    isFirstPage      : boolean,
    isLastPage       : boolean,
    lastPage         : number,
    list             : Array<any>,
    navigatePages    : number,
    navigatepageNums : Array<number>,
    nextPage         : number,
    orderBy          : any,
    pageNum          : number,
    pageSize         : number,
    pages            : number,
    size             : number,
    startRow         : number,
    total            : number
}

export type OrderItemVOType = {
    createTime       : string | null,
    currentUnitPrice : string |  null,
    orderNo          : number,
    productId        : null,
    productImage     : string,
    productName      : string,
    quantity         : number,
    totalPrice       : number
}

export type OrderOverAllDataType = {
    closeTime       : string | null,
    createTime      : string,
    endTime         : string,
    imageHost       : string,
    orderItemVoList : Array<any>,
    orderNo         : string,
    payment         : string,
    paymentTime     : string,
    paymentType     : number,
    paymentTypeDesc : string,
    postage         : number,
    receiverName    : string,
    sendTime        : string,
    shippingId      : number,
    shippingVo      : any,
    status          : number,
    statusDesc      : string
}