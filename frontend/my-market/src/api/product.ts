// 关于product接口

import { http } from "../util/http";

export type Product = {
    status : string,
    data   : object
}

class ProductApi {
    // product list url
    private productListURL   : string = "/product/list.do";
    // product detail url
    private productDetailURL : string = "/product/detail.do";

    /**
     * get product list
     */
    async fetchProductList(params: string): Promise<any> {
        return await http.get<Product>(this.productListURL, { params: params });
    }

    /**
     * get product detail
     * @param productId
     */
    async fetchProductDetail(productId: string): Promise<any> {
        return await http.get<Product>(this.productDetailURL);
    }

}


export const productApi = new ProductApi();