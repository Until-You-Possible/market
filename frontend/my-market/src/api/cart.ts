// cart 相关接口


import { http } from "../util/http";
import { CartProductType } from "../dataType/productInfoType";
import { InterfaceDataType } from "../dataType/publicDataType";

class Cart {


    private getCartCount  : string = "/cart/get_cart_product_count.do";

    private addCart       : string = "/cart/add.do";

    private cartList   : string = "/cart/list.do";

    private selectCart    : string = "/cart/select.do";

    private unSelectCart  : string = "/cart/un_select_all.do";

    private updateCartURL    : string = "/cart/update.do";

    private deleteCart    : string = "/cart/delete_product.do";


    /**
     * 获取购物车数量
     */
    public getBasketCount (): Promise<InterfaceDataType> {
        return http.post(this.getCartCount);
    }

    /**
     * 添加到购物车
     * @param productInfo
     */
    public addBasket (productInfo: CartProductType): Promise<InterfaceDataType> {
        return http.post(this.addCart, productInfo);
    }

    /**
     * 获取购物车列表
     */
    getCartList (): Promise<InterfaceDataType> {
        return  http.get(this.cartList);
    }

    /**
     * 更新购物车列表
    */
    updateCart (data:any): Promise<InterfaceDataType> {
        return http.post(this.updateCartURL,data);
    }


}


export const cartApi = new Cart();