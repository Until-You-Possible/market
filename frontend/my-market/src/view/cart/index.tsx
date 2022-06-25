import React, {CSSProperties, Fragment, useEffect, useState} from "react";
import { Button, Checkbox, Image, InputNumber, Table } from "antd";
import { Link} from "react-router-dom";
import { CartGoodsType } from "../../dataType/productInfoType";
import { helper } from "../../util/helper";
import type { ColumnsType } from "antd/lib/table";
import { cartApi } from "../../api/cart";
import { Constants } from "../../model/constant";
import NavigationHeader from "../../publicComponents/NavigationHeader";
import { DeleteOutlined } from "@ant-design/icons";

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

const tableWrapStyle: CSSProperties = {
    padding: "20px",
    background: "#fff"
}


const Cart: React.FC = () => {

    const columns: ColumnsType<DataType> | undefined = [
        {
            title : "商品信息",
            dataIndex : "productName",
            width: 480,
            key: "productName",
            ellipsis: true,
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
            key : "productPrice",
            align: 'center'
        },
        {
            title : "数量",
            dataIndex : "quantity",
            key : "quantity",
            align: 'center',
            render(value, record, index) {
                return <InputNumber className="input-number" min={0} max={record.productStock} key={record.productId}
                onChange={((value)=>{changeProductNum(value,record)})} defaultValue={value} />
            },
        },
        {
            title : "合计",
            align: 'center',
            dataIndex : "productTotalPrice",
            key : "productTotalPrice"
        }
    ]

    let [dataSource, setDataSource] = useState<Array<CartGoodsType> | undefined>([]);

    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

    useEffect (()=>{
        getCartProductList();
    },[]);

    const getCartProductList = ()=>{
        cartApi.getCartList().then((res)=>{
            if(helper.successResponse(res)){
                setDataSource(res.data.cartProductVoList);
            }
        });
    };

    const changeProductNum = (value: number,record:DataType)=>{
        const updateDataObj = {
            productId: record.productId,
            count: value
        };
        cartApi.updateCart(updateDataObj).then((res)=>{
            if(helper.successResponse(res)){
                setDataSource(res.data.cartProductVoList);
            }else{
                getCartProductList();
            }
        })
    };

    const onSelectChange = (newSelectedRowKeys: React.Key[]) =>{
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange
    };

    const onChangeAllCart = () =>{
        console.log(1);
    }

    const formatCartTableFooter = ()=>{
        return <Fragment>
            <Checkbox onChange={onChangeAllCart}>全部选中</Checkbox>
            <Button type="text" icon={<DeleteOutlined/>}>全部删除</Button>
        </Fragment>;
    };
    return  <div className=" wrap productWrap">
                <NavigationHeader title={Constants.NavigationTextEnum.CART} />
                <div style={tableWrapStyle}>
                    <Table rowSelection={rowSelection}
                           dataSource={dataSource}
                           rowKey={(item) => item.id}
                           columns={columns}
                           footer={()=>formatCartTableFooter()}
                           />
                </div>
            </div>
}


export default Cart;