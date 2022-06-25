export {}


export type orderOverAllDataType = {
    closeTime       : string,
    createTime      : string,
    endTime         : string,
    imageHost       : string,
    orderItemVoList : Array<any>,
    orderNo         : string,
    payment         :string,
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