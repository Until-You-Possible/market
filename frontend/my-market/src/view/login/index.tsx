import React from "react";
import { Form, Input, Button } from 'antd';
import { userApi } from "../../api/user";
import { Link } from "react-router-dom";
import "../../css/login.css";
import { LoginItemList, userLoginInfo } from "../../dataType/userInfoType";
import { helper } from "../../util/helper";
import useSelfNavigate from "../../hooks/useSelfNavigate";



const Register: React.FC = () => {

    const [ navigatePage ] = useSelfNavigate();

    const onFinish = (values: userLoginInfo) => {
        userLogin(values);
    };

    const userLogin = (values: userLoginInfo) => {
        userApi.userLogin(values).then(res => {
            if (helper.successResponse(res)) {
                navigatePage("/home");
            }
        });
    }

    return <div className="registerWrap">

        <div className="registerTitle">用户登陆</div>
        <Form
            name="normal_login"
            size="large"
            className="login-form"
            initialValues={{ remember: false }}
            onFinish={onFinish}
        >
            {
                LoginItemList.map((item, index) => {
                    return    <div key={index}>
                        <Form.Item
                            name={item.name}
                            rules={item.rules}
                        >
                            <Input
                                prefix={item.component.prefix}
                                type={item.type ? item.type : "text"}
                                placeholder={item.component.placeholder}
                            />
                        </Form.Item>
                    </div>
                })
            }
            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    立即登陆
                </Button>
                <div className="passwordAndRegister">
                    <Link className="forgetPassword" to="/findPassword">忘记密码</Link>
                    <Link className="freeRegister" to="/register">免费注册</Link>
                </div>
            </Form.Item>
        </Form>
    </div>
}

export default Register