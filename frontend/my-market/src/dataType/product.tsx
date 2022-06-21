// 定义产品相关的数据类型

import { ParsedQuery } from "query-string";
import exp from "constants";

export {}

export interface SearchKeywordType {
    pageNum  : number,
    pageSize : number,
    orderBy  : string | undefined,
    keyword  :  string | (string | null)[] | null
}


export interface ProductResultType  {
    status : string,
    data   : ProductListResultType
}

export interface ProductListResultType {
    endRow           : number,
    firstPage        : number,
    hasNextPage      : boolean,
    hasPreviousPage  : boolean,
    isFirstPage      : boolean,
    isLastPage       : boolean,
    lastPage         : number,
    list             : Array<ListDataType>,
    navigatePages    : number,
    navigatepageNums : Array<number>,
    nextPage         : number,
    orderBy          : any,
    pageNum          : number,
    pageSize         : number,
    pages            : number,
    size             : number,
    startRow         : number,
    total            : number
}

export interface ListDataType {
    categoryId : number,
    id         : number,
    imageHost  : string,
    mainImage  : string,
    name       : string,
    price      : number,
    status     : number,
    subtitle   : string
}

export interface searchTermType {
    searchTerm : string
}

export interface PageTile {
    title: string
}

export interface detailInformationType {
    item?            : string;
    categoryId       : number,
    createTime       : string | null,
    detail           : string,
    id               : number,
    imageHost        : string,
    mainImage        : string,
    name             : string,
    parentCategoryId : number,
    price            : number,
    status           : number,
    stock            : number,
    subImages        : string,
    subtitle         : string,
    updateTime       : string

}