
class Payment {

    private getPaymentURL    : string = "/order/pay.do";

    private getPaymentStatus : string = "/order/query_order_pay_status.do";

}


export const paymentApi = new Payment();