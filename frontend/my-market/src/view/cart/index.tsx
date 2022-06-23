import React, { Fragment, useEffect, useState } from "react";
import { Pagination, Radio, Image, Empty, Table } from "antd";
import { Constants } from "../../model/constant";
import { useLocation, useNavigate, Link} from "react-router-dom";
import { CartGoodsType, ListDataType, SearchKeywordType} from "../../dataType/product";
import { productApi } from "../../api/product";
import { helper } from "../../util/helper";
import qs from "query-string";
import NavigationHeader from "../../publicComponents/NavigationHeader";
import type { ColumnsType } from "antd/lib/table";
import { cartApi } from "../../api/cart";
import { text } from "stream/consumers";
interface DataType {
    id: number,
    productName: string,
    productPrice: number,
    quantity: number,
    productTotalPrice: number
}
const columns: ColumnsType<DataType> | undefined = [
    {
        title : "商品信息",
        dataIndex : "productName",
        key: "productName",
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        render: (value: string,record:any,index:number) =>{
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            console.log(record)
            return <Fragment>
                        <Image width={80} src={`http://img.happymmall.com/${record.productMainImage}`}></Image>
                        <Link className="registerLink" to={`/home/productDetail?productId=${record.productId}`}>{value}</Link>
                    </Fragment> 

        }
    },
    {
        title : "单价",
        dataIndex : "productPrice",
        key : "productPrice"
    },
    {
        title : "数量",
        dataIndex : "quantity",
        key : "quantity"
    },
    {
        title : "合计",
        dataIndex : "productTotalPrice",
        key : "productTotalPrice"
    }
]

const Cart: React.FC = () => {
    let [dataSource, setDataSource] = useState<Array<CartGoodsType> | undefined>([]);
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    useEffect (()=>{
        cartApi.getCartList().then((res)=>{
            if(helper.successResponse(res)){
                setDataSource(res.data.cartProductVoList);
            }
        });
    },[]);
    const onSelectChange = (newSelectedRowKeys: React.Key[]) =>{
        setSelectedRowKeys(newSelectedRowKeys);
    };
    

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange
    };
    return  <div className=" wrap productWrap">
                <div>
                    <Table rowSelection={rowSelection} dataSource={dataSource} rowKey={(item)=>item.id} columns={columns} />
                </div>
            </div>
}


export default Cart;