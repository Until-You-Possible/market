// 关于product接口

import { http } from "../util/http";
import {ProductResultType, SearchKeywordType} from "../dataType/product";



class ProductApi {
    // product list url
    private productListURL   : string = "/product/list.do";
    // product detail url
    private productDetailURL : string = "/product/detail.do";

    /**
     * get product list
     */
    async fetchProductList(params: SearchKeywordType): Promise<any> {
        return await http.get<ProductResultType>(this.productListURL, { params: params });
    }

    /**
     * get product detail
     * @param id
     */
    async fetchProductDetail(id: string): Promise<any> {
        return await http.get(this.productDetailURL, {params: { productId: id }});
    }

}


export const productApi = new ProductApi();