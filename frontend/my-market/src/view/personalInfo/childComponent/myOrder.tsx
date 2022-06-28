import React, { CSSProperties, Fragment, useEffect, useState } from "react";
import { Button, Card, Col, Image, Row, Spin, Table } from "antd";
import { orderApi } from "../../../api/order";
import { helper } from "../../../util/helper";
import { ColumnsType } from "antd/lib/table";
import "../../../css/order.css";
import { useNavigate } from "react-router-dom";
import {OrderOverAllDataType} from "../../../dataType/orderInfoType";


const orderInfoStyle: CSSProperties = {
    background : "#eee",
    padding    : "16px"
}

const spanStyleTitle: CSSProperties = {
    marginLeft: "10px"
}

const mainImageStyleTitle: CSSProperties = {
    border:  "2px solid #eee"
}

const baseURL = "http://img.happymmall.com/";


const secondRowStyle: CSSProperties = {
    marginTop: "16px"
}

interface DataType  {
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

const MyOrder: React.FC = () => {

    const [loading, setLoading] = useState<boolean>(false);

    const navigate = useNavigate();

    // 订单信息
    const [orderMessage, setOrderMessage] = useState<OrderOverAllDataType | undefined>();

    useEffect(() => {
        //获取订单信息
        setLoading(true);
        const params = {
            pageNum  : 1,
            pageSize : 10
        }

        orderApi.getOrderList(params).then(res => {
            setLoading(false);
            if (helper.successResponse(res)) {
                setOrderMessage(res.data.list[0]);
            }
        });

    }, []);

    const checkOrderDetail = () => {
        const orderNumber = orderMessage?.orderNo;
        navigate("/home/orderDetail?orderNumber=" + orderNumber);
    }

    return <Fragment>
        <div>
            <Card title="我的订单" bordered={false}>
                <Spin spinning={loading}>
                    <div style={orderInfoStyle}>
                        <Row>
                            <Col span={8}>
                                订单号:{ orderMessage?.orderNo }
                            </Col>
                            <Col span={8}>{ orderMessage?.createTime }
                            </Col>
                            <Col span={8}>
                                收件人:{ orderMessage?.receiverName }
                            </Col>

                        </Row>
                        <Row style={secondRowStyle}>
                            <Col span={8}>
                                订单状态: {orderMessage?.statusDesc}
                            </Col>
                            <Col span={8}>
                                订单总价: {orderMessage?.payment}
                            </Col>
                            <Col span={8}>
                                <Button type="primary" onClick={checkOrderDetail}>查看详情</Button>
                            </Col>
                        </Row>
                    </div>
                    <div className="orderListWrapper">
                        <Table columns={orderColumns}
                               dataSource={orderMessage?.orderItemVoList}
                               rowKey={(item) => item.orderNo }
                               pagination={false}
                        />
                    </div>
                </Spin>
            </Card>
        </div>
    </Fragment>
}

export default MyOrder;