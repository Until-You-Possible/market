import React, { CSSProperties, Fragment, useEffect, useState } from "react";
import { Constants } from "../../model/constant";
import NavigationHeader from "../../publicComponents/NavigationHeader";
import { Button, Card, Image, Popconfirm, Space, Spin, Table } from "antd";
import { orderApi } from "../../api/order";
import {useLocation, useNavigate} from "react-router-dom";
import qs from "query-string";
import { helper } from "../../util/helper";
import { OrderOverAllDataType } from "../../dataType/orderInfoType";
import { ColumnsType } from "antd/lib/table";

const goodsInfoStyle: CSSProperties = {
    marginTop: "10px"
}
const spanStyleTitle: CSSProperties = {
    marginLeft: "10px"
}

const mainImageStyleTitle: CSSProperties = {
    border:  "2px solid #eee"
}

const baseURL = "http://img.happymmall.com/";

export interface DataType  {
    key          : React.Key,
    createTime   : string,
    currentUnitPrice : number,
    orderNo      : number,
    productId    : number,
    productImage : string,
    productName  : string,
    quantity     : number,
    totalPrice   : number
}

const orderColumns: ColumnsType<DataType> = [
    {
        title: "商品信息",
        dataIndex: "productName",
        ellipsis: true,
        width: 500,
        render: (value: string,record:any,index:number) =>{
            return <Fragment>
                <Image style={mainImageStyleTitle} width={50} src={`${baseURL}${record.productImage}`}/>
                <span style={spanStyleTitle}>{value}</span>
            </Fragment>

        }
    },
    {
        title: "单价",
        align: 'center',
        dataIndex: "currentUnitPrice"
    },
    {
        title: "数量",
        align: 'center',
        dataIndex: "quantity"
    },
    {
        title: "合计",
        align: 'center',
        dataIndex: "totalPrice"
    }
]

const OrderDetail: React.FC = () => {

    const location = useLocation();

    const orderNo = qs.parse(location.search).orderNumber

    const [loading, setLoading] = useState<boolean>(true);

    const [orderDetailInfo, setOrderDetailInfo] = useState<OrderOverAllDataType>();

    const navigate = useNavigate();

    useEffect(() => {

        if (orderNo) {
            setTimeout(() => {
                orderApi.getOrderDetail({ orderNo }).then(res => {
                    setLoading(false);
                    if(helper.successResponse(res)) {
                        setOrderDetailInfo(res.data);
                    }
                    if (helper.needToLogin(res)) {
                        navigate("/home");
                    }
                });
            }, 1500);
        }

    }, [orderNo, navigate]);

    const footerFunc = (item: OrderOverAllDataType | undefined) => {
        return <Fragment>
            订单总价：<span className="totalPriceOrder">¥{item?.payment}</span>
        </Fragment>
    }

    // 取消订单
    const confirmCancelOrder = (): void => {
        const paramsObject = {
            orderNo: orderNo
        }
        orderApi.postCancelOrder(paramsObject).then(res => {
            // 需要二次确认
            if (helper.successResponse(res)) {
                helper.showMessage("订单已经取消成功～");
            }
        });
    }

    const goPayment = () => {
        navigate("/home/payment?orderNumber=" + orderNo);
    }

    return <Fragment>
        <div className="wrap orderDetailContainer">
            <NavigationHeader title={Constants.NavigationTextEnum.ORDERDETAIL}/>
            <Spin spinning={loading}>
                <Card title="订单信息" bordered={false}>
                    <div className="basicInfoShow">
                        <span className="titleSpan">订单号：</span>
                        <span>{orderDetailInfo?.orderNo}</span>
                    </div>
                    <div className="basicInfoShow">
                        <span className="titleSpan">创建日期：</span>
                        <span>{orderDetailInfo?.createTime}</span>
                    </div>
                    <div className="basicInfoShow">
                        <span className="titleSpan">收件人：</span>
                        <span>{orderDetailInfo?.shippingVo.receiverName}</span>
                        <span>{orderDetailInfo?.shippingVo.receiverCity}</span>
                        <span>{orderDetailInfo?.shippingVo.receiverAddress}</span>
                    </div>
                    <div className="basicInfoShow">
                        <span className="titleSpan">订单状态：</span>
                        <span>{orderDetailInfo?.statusDesc}</span>
                   </div>
                    <div className="basicInfoShow">
                        <span className="titleSpan">支付方式：</span>
                        <span>{orderDetailInfo?.paymentTypeDesc}</span>
                   </div>
                    <div>
                        <Space size={'small'}>
                            <Button type="primary" onClick={goPayment}>去支付</Button>
                            <Popconfirm
                                title="确认要取消这个订单吗?"
                                onConfirm={confirmCancelOrder}
                                okText="确认取消"
                                cancelText="再想想"
                            >
                                <Button type="primary">取消订单</Button>
                            </Popconfirm>
                        </Space>
                    </div>
                </Card>

                <Card style={goodsInfoStyle} title="商品清单" bordered={false}>
                    <Table columns={orderColumns}
                           dataSource={orderDetailInfo?.orderItemVoList}
                           footer={(item) => footerFunc(orderDetailInfo)}
                           pagination={false}
                    />
                </Card>

            </Spin>

        </div>
    </Fragment>
}

export default OrderDetail;