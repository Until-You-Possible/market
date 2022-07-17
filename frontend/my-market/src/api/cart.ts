// cart 相关接口


import { http } from "../util/http";
import { CartProductType } from "../dataType/productInfoType";
import { InterfaceDataType } from "../dataType/publicDataType";

class Cart {


    private cartCountURL     : string = "/cart/get_cart_product_count.do";

    private addCartURL          : string = "/cart/add.do";

    private cartListURL         : string = "/cart/list.do";

    private selectRowURL        : string = "/cart/select.do";

    private unSelectRowURL      : string = "/cart/un_select.do"

    private unSelectAllURL      : string = "/cart/un_select_all.do";

    private selectAllURL        : string = "/cart/select_all.do";

    private updateCartURL       : string = "/cart/update.do";

    private deleteCartURL       : string = "/cart/delete_product.do";


    /**
     * 全选
     */
    public selectALl (): Promise<InterfaceDataType>  {
        return http.post(this.selectAllURL);
    }

    /**
     * 取消全选
     */
    public unSelectALl (): Promise<InterfaceDataType>  {
        return http.post(this.unSelectAllURL);
    }


    /**
     * 获取购物车数量
     */
    public getBasketCount (): Promise<InterfaceDataType> {
        return http.post(this.cartCountURL);
    }

    /**
     * 添加到购物车
     * @param productInfo
     */
    public addBasket (productInfo: CartProductType): Promise<InterfaceDataType> {
        return http.post(this.addCartURL, productInfo);
    }

    /**
     * 获取购物车列表
     */
    getCartList (): Promise<InterfaceDataType> {
        return  http.get(this.cartListURL);
    }

    /**
     * 更新购物车列表
    */
    updateCart (data:any): Promise<InterfaceDataType> {
        return http.post(this.updateCartURL,data);
    }

    /**
     * 选择购物车商品
     * @param productInfo
     */
    selectRowProduct (productInfo: any): Promise<InterfaceDataType> {
        return http.post(this.selectRowURL, productInfo);
    }

    /**
     * 取消选择的商品
     * @param productInfo
     */
    unSelectRowProduct (productInfo: any): Promise<InterfaceDataType> {
        return http.post(this.unSelectRowURL, productInfo);
    }

    /**
     * 删除指定商品
     * @param id
     */
    deleteCurrentProduct (id: string): Promise<InterfaceDataType> {
        return http.get(this.deleteCartURL, {params: { productIds: id }});
    }


}


export const cartApi = new Cart();