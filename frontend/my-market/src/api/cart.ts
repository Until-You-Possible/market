// cart 相关接口


import { http } from "../util/http";
import { CartResult } from "../view/home/homeType";
import { CartProductType } from "../dataType/product";

class Cart {


    private getCartCount  : string = "/cart/get_cart_product_count.do";

    private addCart       : string = "/cart/add.do";

    private getCartList   : string = "/cart/list.do";

    private selectCart    : string = "/cart/select.do";

    private unSelectCart  : string = "/cart/un_select_all.do";

    private updateCart    : string = "/cart/update.do";

    private deleteCart    : string = "/cart/delete_product.do";


    /**
     * 获取购物车数量
     */
    async getBasketCount (): Promise<CartResult> {
        return await http.post(this.getCartCount);
    }

    /**
     * 添加到购物车
     * @param productInfo
     */
    async addBasket (productInfo: CartProductType): Promise<any> {
        return await http.post(this.addCart, productInfo);
    }


}


export const cartApi = new Cart();