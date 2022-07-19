import React, {createContext, CSSProperties, Fragment, useCallback, useEffect, useState} from "react";
import { Button, Checkbox, Image, InputNumber, Table } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { CartGoodsType } from "../../dataType/productInfoType";
import { helper } from "../../util/helper";
import type { ColumnsType } from "antd/lib/table";
import { cartApi } from "../../api/cart";
import { Constants } from "../../model/constant";
import NavigationHeader from "../../publicComponents/NavigationHeader";
import { DeleteOutlined } from "@ant-design/icons";
import { CheckboxChangeEvent } from "antd/es/checkbox";

interface DataType {
    id           : number,
    productId    : number,
    productStock : number,
    productName  : string,
    productPrice : number,
    quantity     : number,
    productTotalPrice : number
}

const baseURL = "http://img.happymmall.com/";

const tableWrapStyle: CSSProperties = {
    padding    : "20px",
    background : "#fff"
}

export const CartCountContext = createContext<number>(0);

const Cart: React.FC = () => {

    const columns: ColumnsType<DataType> | undefined = [
        {
            title : "商品信息",
            dataIndex : "productName",
            width: 480,
            key: "productName",
            ellipsis: true,
            render: (value: string, record: any, index: number) =>{
                return <Fragment>
                            <Image width={50} src={`${baseURL}${record.productMainImage}`}/>
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
        },
        {
            title : "操作",
            align: 'center',
            render(value, record, index) {
                return <Button type="link" onClick={() => deleteCurrentRow(record)}>删除</Button>
            }
        }
    ]

    const navigation = useNavigate();

    let [dataSource, setDataSource] = useState<Array<CartGoodsType> | undefined>([]);

    const [checked, setChecked] = useState<boolean>(false);

    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

    const getCartProductList = useCallback(() => {
        cartApi.getCartList().then((res)=>{
            if(helper.successResponse(res)){
                setDataSource(res.data.cartProductVoList);
                // 每次list数量的改变都去同志NavHeader去改变count的数量。
                getCartCount();
            }
            if (helper.needToLogin(res)) {
                navigation("/login");
            }
        });
    }, [navigation])


    useEffect (()=>{

        getCartProductList();

    },[getCartProductList]);

    const getCartCount = () => {
        cartApi.getBasketCount().then((res) => {
            navigation("/home/cart?total=" + res.data);
        });
    }

    // delete the current row
    const deleteCurrentRow = (item: any) => {
        const id  =  item.productId;
        if (id) {
            cartApi.deleteCurrentProduct(id).then(res => {
                if (helper.successResponse(res)) {
                    helper.showMessage("删除成功");
                    getCartProductList();
                }
            });
        }
    }

    const changeProductNum = (value: number,record:DataType)=>{
        const updateDataObj = {
            productId: record.productId,
            count: value
        };
        cartApi.updateCart(updateDataObj).then((res)=>{
            if(helper.successResponse(res)){
                getCartCount();
                setDataSource(res.data.cartProductVoList);
            }else{
                getCartProductList();
            }
        })
    };

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        // 直接调用选择当前行的恶接口
        setSelectedRowKeys(newSelectedRowKeys);
        if (newSelectedRowKeys.length) {
            cartApi.selectRowProduct(newSelectedRowKeys).then(res => {
                if (helper.successResponse(res)) {
                   helper.showMessage("选择成功～")
                }
            });
        }
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange
    };

    // select all
    const onChangeAllCart = (e: CheckboxChangeEvent) => {
        if (selectedRowKeys.length === Constants.ConditionStatusEnum.ZERO) {
            if (dataSource?.length) {
                const ids = dataSource.map(v => v.id);
                setSelectedRowKeys(ids);
            }
        } else {
            setSelectedRowKeys([]);
        }
    }

    const toggleChecked = () => {
        setChecked(!checked);
    }

    const deleteAllCarts = () => {
        if (!setSelectedRowKeys.length) {
            return;
        }
        // 根据key查找对应的productId；
        let ids = selectedRowKeys.map((v: any) => {
            return dataSource?.map((m: any) => m.id === v ? m.productId :  null);
        }).flat().filter(q => q).join();
        cartApi.deleteCurrentProduct(ids).then(res => {
            if (helper.successResponse(res)) {
                helper.showMessage("删除成功～");
                // refresh list
                getCartProductList();
            }
        });
    }

    const formatCartTableFooter = ()=>{
        return <Fragment>
            <Checkbox onClick={toggleChecked} checked={checked} onChange={onChangeAllCart}>全部选中</Checkbox>
            <Button type="text" icon={<DeleteOutlined/>} onClick={deleteAllCarts}>全部删除</Button>
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