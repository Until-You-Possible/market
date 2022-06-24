import React, { Fragment, useEffect, useState } from "react";
import { Image, Table, InputNumber } from "antd";
import { Link } from "react-router-dom";
import { CartGoodsType } from "../../dataType/product";
import { helper } from "../../util/helper";
import type { ColumnsType } from "antd/lib/table";
import { cartApi } from "../../api/cart";

interface DataType {
    id: number,
    productId: number,
    productStock: number,
    productName: string,
    productPrice: number,
    quantity: number,
    productTotalPrice: number
}

const baseURL = "http://img.happymmall.com/";



const columns: ColumnsType<DataType> | undefined = [
    {
        title : "商品信息",
        dataIndex : "productName",
        key: "productName",
        render: (value: string,record:any,index:number) =>{
            return <Fragment>
                        <Image width={80} src={`${baseURL}${record.productMainImage}`}/>
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
        key : "quantity",
        render(value, record, index) {
            return <InputNumber className="input-number" min={0} max={record.productStock} key={record.productId} 
            onChange={((value)=>{changeProductNum(value,record)})} defaultValue={value} />
        },
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

    const changeProductNum = (value: number,record:DataType)=>{
        const updateDataObj = {
            productId: record.productId,
            count: value
        };
        cartApi.updateCart(updateDataObj);
    };

    const onSelectChange = (newSelectedRowKeys: React.Key[]) =>{
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange
    };
    return  <div className=" wrap productWrap">
                <div>
                    <Table rowSelection={rowSelection}
                           dataSource={dataSource}
                           rowKey={(item) => item.id}
                           columns={columns} />
                </div>
            </div>
}


export default Cart;