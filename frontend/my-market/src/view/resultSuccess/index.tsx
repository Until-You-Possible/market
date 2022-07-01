import React, { useEffect } from "react";
import { Button } from "antd";
import styles from "../../css/registerSuccess.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import qs from "query-string";
import { Constants } from "../../model/constant";

const RegisterSuccess: React.FC = () => {

    const location = useLocation();

    const navigate = useNavigate();

    const currentType = qs.parse(location.search).successPageType;

    useEffect(() => {

        if (!currentType) {
            navigate("/home");
        }

    }, [currentType, navigate]);

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
        if (currentType === Constants.SuccessPageEnum.UPDATEPASSWORD) {
            return <h1>密码修改成功～请重新登陆</h1>
        }
    }

    const differentSuccessButton = (currentType: Array<string | null> | string | null) => {
        if (currentType === Constants.SuccessPageEnum.ADDBASKET) {
            return  <Link to="/cart">立即去购物车查看</Link>
        }
        return  <Link to="/login">立即去登陆</Link>

    }


    return <div className="wrap registerSuccessWrap">
        <div className={styles.registerSuccessTitle}>
            {
                differentSuccessPage(currentType)
            }
        </div>
        <Button className={styles.registerSuccessLoginButton}>
            {
                differentSuccessButton(currentType)
            }
        </Button>
    </div>
}

export default RegisterSuccess