import React from "react";
import { Button } from "antd";
import "../../css/registerSuccess.css";
import { Link, useLocation } from "react-router-dom";
import qs from "query-string";
import { Constants } from "../../model/constant";

const RegisterSuccess: React.FC = () => {

    const location = useLocation();

    const currentType = qs.parse(location.search).successPageType;

    const differentSuccessPage = (currentType: Array<string | null> | string | null) => {
        if (currentType === Constants.SuccessPageEnum.RESETPASSWORD) {
            return <h1>恭喜您，密码修改成功</h1>
        }
        if (currentType === Constants.SuccessPageEnum.REGISTER) {
            return <h1>恭喜您，注册成功</h1>
        }
        if (currentType === Constants.SuccessPageEnum.ADDBASKET) {
            return <h1>恭喜您，添加购物车成功</h1>
        }
    }

    const differentSuccessButton = (currentType: Array<string | null> | string | null) => {
        if (currentType === Constants.SuccessPageEnum.ADDBASKET) {
            return  <Link to="/cart">立即去购物车查看</Link>
        }
        return  <Link to="/login">立即去登陆</Link>

    }


    return <div className="wrap registerSuccessWrap">
        <div className="registerSuccessTitle">
            {
                differentSuccessPage(currentType)
            }
        </div>
        <Button className="registerSuccessLoginButton">
            {
                differentSuccessButton(currentType)
            }
        </Button>
    </div>
}

export default RegisterSuccess