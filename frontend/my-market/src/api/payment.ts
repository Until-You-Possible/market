import {InterfaceDataType} from "../dataType/publicDataType";
import {http} from "../util/http";

class Payment {

    // 支付信息
    private paymentURL       : string = "/order/pay.do";

    // 支付状态
    private paymentStatusURL : string = "/order/query_order_pay_status.do";

    /**
     * 获取订单支付信息
     * @param orderInfo
     */
    public getPayment (orderInfo: any): Promise<InterfaceDataType> {
        return http.post(this.paymentURL, orderInfo)
    }

    /**
     * 获取订单状态
     * @param orderInfo
     */
    public getPaymentStatus (orderInfo: any): Promise<InterfaceDataType> {
        return http.post(this.paymentStatusURL, orderInfo)
    }


}


export const paymentApi = new Payment();