import React from "react";
import { Button } from "antd";
import "../../css/registerSuccess.css";
import {Link} from "react-router-dom";

const RegisterSuccess: React.FC = () => {
    return <div className="wrap registerSuccessWrap">
        <div className="registerSuccessTitle">
            <h1>恭喜您，注册成功</h1>
        </div>
        <Button className="registerSuccessLoginButton">
            <Link to="/login">立即去登陆</Link>
        </Button>
    </div>
}

export default RegisterSuccess