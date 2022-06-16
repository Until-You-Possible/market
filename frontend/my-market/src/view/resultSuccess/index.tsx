import React, {useEffect, useState} from "react";
import { Button } from "antd";
import "../../css/registerSuccess.css";
import { Link, useLocation } from "react-router-dom";
import qs from "query-string";
import { Constants } from "../../model/constant";

const RegisterSuccess: React.FC = () => {

    const location = useLocation();

    const currentType = qs.parse(location.search).successPageType;

    const differentSuccessPage = (currentType: Array<string | null> | string | null) => {
        if (currentType === Constants.SuccessPageType.RESETPASSWORD) {
            return <h1>恭喜您，密码修改成功</h1>
        }
        if (currentType === Constants.SuccessPageType.REGISTER) {
            return <h1>恭喜您，注册成功</h1>
        }
    }


    return <div className="wrap registerSuccessWrap">
        <div className="registerSuccessTitle">
            {
                differentSuccessPage(currentType)
            }
        </div>
        <Button className="registerSuccessLoginButton">
            <Link to="/login">立即去登陆</Link>
        </Button>
    </div>
}

export default RegisterSuccess