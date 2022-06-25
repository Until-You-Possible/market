import React from "react";
import { Form, Input, Button } from 'antd';
import "./index.css";
import { userApi } from "../../api/user";
import { Link, useNavigate } from "react-router-dom";
import { Constants } from "../../model/constant";
import { helper } from "../../util/helper";
import { CheckUserNameIsExists, registerItemList, registerUserInfo } from "../../dataType/userInfoType";



const Register: React.FC = () => {

    const navigate = useNavigate();

    const onFinish = (values: registerUserInfo) => {
        // 相关验证通过之后
        // 这里不在赘述了
        // 此方法也是仅仅处理表单相关的逻辑和业务
        // 注册的话就单独再起方法去写，整体相对清晰
        registerNewAccount(values);
    };

    const registerNewAccount = (values: registerUserInfo) => {
        userApi.register(values).then(res => {
            if (helper.successResponse(res)) {
                helper.showMessage("用户名可用～");
                setTimeout(() => {
                    navigate("/resultSuccess?successPageType=" + Constants.SuccessPageEnum.REGISTER);
                }, 1000);
            }
        });
    }

    // to check if username is exists
    const onBlurCheckName = (event: React.FocusEvent<HTMLInputElement>, type: string | undefined) => {
        if (type === Constants.ConstantStringEnum.USERNAME) {
            let info: CheckUserNameIsExists = {
                type: "username",
                str : event.target.value || ""
            }
            userApi.checkUsernameExists(info).then(res => {
                if (helper.successResponse(res)) {
                    helper.showMessage("用户名可用～");
                }
            });
        }
    }

    return <div className="registerWrap">

        <div className="registerTitle">新用户注册</div>

        <Form
            name="normal_login"
            size="large"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
        >
            {
                registerItemList.map((item,index) => {
                    return    <div key={index}>
                        <Form.Item
                            name={item.name}
                            rules={item.rules}
                        >
                            <Input
                                prefix={item.component.prefix}
                                type={item.type ? item.type : "text"}
                                onBlur={(event) => onBlurCheckName(event, item.type)}
                                placeholder={item.component.placeholder}
                            />
                        </Form.Item>
                    </div>
                })
            }
            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    立即注册
                </Button>
                <Link className="accountToLogin" to="/login">
                    已有账号？立即登陆
                </Link>
            </Form.Item>
        </Form>
    </div>
}

export default Register