import React, { CSSProperties, Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import qs from "query-string";
import { paymentApi } from "../../api/payment";
import { helper } from "../../util/helper";
import { Constants } from "../../model/constant";
import NavigationHeader from "../../publicComponents/NavigationHeader";
import { QRCodeSVG } from "qrcode.react";
import { Spin } from "antd";
import useSelfNavigate from "../../hooks/useSelfNavigate";

const qrStyle: CSSProperties = {
    textAlign     : "center",
    minHeight     : "300px",
    paddingBottom : "30px",
    paddingTop    : "30px",
    background    : "#fff"
}

const tipTitleStyle:CSSProperties = {
    fontSize   : "20px",
    fontWeight : "700",
    lineHeight : "50px"
}

const Payment: React.FC = () => {

    const location = useLocation();

    const orderNo  = qs.parse(location.search).orderNumber;

    const [loading, setLoading] = useState<boolean>(false);

    const [ navigatePage ] = useSelfNavigate();

    const [qrURL, setQrURL] = useState<string>("");

    console.log("orderNo", orderNo);

    useEffect(() => {

        const dataInfo = {
            orderNo: orderNo
        }
        setLoading(true);
        paymentApi.getPayment(dataInfo).then(res => {
            setLoading(false);
            if (helper.successResponse(res)) {
                // 渲染二维码
                setQrURL(res.data.qrUrl);
            }
            if (helper.needToLogin(res)) {
                navigatePage("/login");
            }

        }).catch(err => {
            setLoading(false);
        });
        // 轮询接口状态(限定时间内支付)kai
        paymentApi.getPaymentStatus(dataInfo).then(res => {
            if (helper.successResponse(res)) {
                helper.successResponse("支付成功～");
                return;
            }
            console.log("res", res);
        });

    }, [orderNo, navigatePage]);

    return <Fragment>
        <div className="wrap">
            <NavigationHeader title={Constants.NavigationTextEnum.PAYMENT}/>
            <div className="qrContainer" style={qrStyle}>
                {
                    qrURL ?  <Spin spinning={loading}>
                        <Fragment>
                            <div style={tipTitleStyle}>请尽快支付，订单号为 {orderNo}</div>
                            <QRCodeSVG width={300} height={300} value={qrURL} />
                            <div>本项目仅仅用于学习，不会产生任何的实际金钱交易</div>
                        </Fragment> </Spin> : <Spin spinning={loading}> <div>支付宝预下单失败，请待会再试~</div></Spin>
                }

            </div>
        </div>
    </Fragment>
}

export default Payment;