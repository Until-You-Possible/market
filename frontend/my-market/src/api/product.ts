// 关于product接口

import { http } from "../util/http";
import { ProductResultType } from "../dataType/product";



class ProductApi {
    // product list url
    private productListURL   : string = "/product/list.do";
    // product detail url
    private productDetailURL : string = "/product/detail.do";

    /**
     * get product list
     */
    async fetchProductList(params: { pageSize: number; orderBy: string; keyword: string; pageNum: number }): Promise<any> {
        return await http.get<ProductResultType>(this.productListURL, { params: params });
    }

    /**
     * get product detail
     * @param productId
     */
    async fetchProductDetail(productId: string): Promise<any> {
        return await http.get(this.productDetailURL);
    }

}


export const productApi = new ProductApi();