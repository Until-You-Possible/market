import React, { Fragment, useEffect } from "react";
import { useLocation } from "react-router-dom";
import qs from "query-string";
import { paymentApi } from "../../api/payment";
import { helper } from "../../util/helper";

const Payment: React.FC = () => {

    const location = useLocation();

    const orderNo  = qs.parse(location.search).orderNumber;

    console.log("orderNo", orderNo);

    useEffect(() => {

        const dataInfo = {
            orderNo: orderNo
        }

        paymentApi.getPayment(dataInfo).then(res => {
            if (helper.successResponse(res)) {
                // 渲染二维码
            }
            console.log("res", res);
        });
        // 轮询接口状态(限定直接被支付)

    }, [orderNo]);

    return <Fragment>
        <div className="wrap">

        </div>
    </Fragment>
}

export default Payment;