import React, { CSSProperties, Fragment, useEffect, useState } from "react";
import { Button, Card, Col, Image, Row, Spin, Table } from "antd";
import { orderApi } from "../../../api/order";
import { helper } from "../../../util/helper";
import { ColumnsType } from "antd/lib/table";
import "../../../css/order.css";
import { OrderOverAllDataType } from "../../../dataType/orderInfoType";
import useSelfNavigate from "../../../hooks/useSelfNavigate";


const orderInfoStyle: CSSProperties = {
    background : "#eee",
    padding    : "16px"
}

const orderBlockInfo: CSSProperties = {
    marginBottom : "20px",
    border       : "1px solid #eee"
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

    const [ navigatePage ] = useSelfNavigate();

    // 订单信息
    let [orderMessage, setOrderMessage] = useState<Array<OrderOverAllDataType>>([]);

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
                setOrderMessage(res.data.list);
            }
            if (helper.needToLogin(res)) {
                navigatePage("/home");
            }
        });

    }, [navigatePage]);

    const checkOrderDetail = (event: React.MouseEvent<HTMLElement>, item: any) => {
        const orderNumber = item.orderNo;
        navigatePage("/home/orderDetail?orderNumber=" + orderNumber);
    }

    return <Fragment>
        <div>
            <Card title="我的订单" bordered={false}>
                <Spin spinning={loading}>
                    {
                        orderMessage && orderMessage.map((item, index) => {
                            return <div key={index} style={orderBlockInfo}>
                                <div style={orderInfoStyle}>
                                    <Row>
                                        <Col span={8}>
                                            订单号:{ item.orderNo }
                                        </Col>
                                        <Col span={8}>{ item.createTime }
                                        </Col>
                                        <Col span={8}>
                                            收件人:{ item.receiverName }
                                        </Col>

                                    </Row>
                                    <Row style={secondRowStyle}>
                                        <Col span={8}>
                                            订单状态: {item.statusDesc}
                                        </Col>
                                        <Col span={8}>
                                            订单总价: {item.payment}
                                        </Col>
                                        <Col span={8}>
                                            <Button type="primary" onClick={(event) => checkOrderDetail(event, item)}>查看详情</Button>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="orderListWrapper">
                                    <Table columns={orderColumns}
                                           dataSource={item.orderItemVoList}
                                           rowKey={(item) => item.productId }
                                           pagination={false}
                                    />
                                </div>
                            </div>

                        })
                    }
                </Spin>
            </Card>
        </div>
    </Fragment>
}

export default MyOrder;