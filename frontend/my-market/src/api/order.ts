// 订单相关接口


import { InterfaceDataType } from "../dataType/publicDataType";
import { http } from "../util/http";

class Order {

    // 获取商品列表
    private goodsListURL    : string = "/order/get_order_cart_product.do";
    // 提交订单
    private submitOrderURL    : string = "/order/create.do";
    // 获取订单列表
    private orderListURL   : string = "/order/list.do";
    // 获取订单详情
    private orderDetailURL : string = "/order/detail.do";
    // 取消订单
    private cancelOrderURL    : string = "/order/cancel.do";

    /**
     * 获取订单列表
     * @param params
     */
    public getOrderList(params: any): Promise<InterfaceDataType> {
        return http.get(this.orderListURL, { params: params});
    }

    /**
     * 获取订单详情
     * @param orderNo
     */
    public getOrderDetail(orderNo: { orderNo: Array<string | null> | string }): Promise<InterfaceDataType> {
        return http.get(this.orderDetailURL,{ params: orderNo})
    }

    /**
     *
     * @param paramsObject
     */
    public postCancelOrder(paramsObject: any): Promise<InterfaceDataType> {
        return http.post(this.cancelOrderURL, paramsObject);
    }

}

export const orderApi = new Order();