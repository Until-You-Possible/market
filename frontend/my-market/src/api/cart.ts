// cart 相关接口


import {http} from "../util/http";
import { CartResult } from "../view/home/homeType";

class Cart {


    private getCartCount  : string = "/cart/get_cart_product_count.do";

    private addCart       : string = "/cart/add.do";

    private getCartList   : string = "/cart/list.do";

    private selectCart    : string = "/cart/select.do";

    private unSelectCart  : string = "/cart/un_select_all.do";

    private updateCart    : string = "/cart/update.do";

    private deleteCart    : string = "/cart/delete_product.do";


    async getBasketCount (): Promise<CartResult> {
        return http.post(this.getCartCount);
    }


}


export const cartApi = new Cart();