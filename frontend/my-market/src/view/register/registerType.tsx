
import React from "react";
import {
    LockOutlined,
    MailOutlined,
    PhoneOutlined,
    QuestionCircleOutlined,
    QuestionOutlined,
    UserOutlined
} from "@ant-design/icons";

// rules type
interface RuleObject {
    required: boolean,
    message : string
}

// list type
interface RegisterInfo {
    name       : string,
    rules      : RuleObject[],
    component  : any,
    type?      : string
}

export const registerItemList:RegisterInfo[]  = [
    {
        name: "username",
        rules: [
            {
                required: true,
                message: "请输入用户名"
            }
        ],
        component: {
            type: "INPUT",
            prefix: <UserOutlined className="site-form-item-icon" />,
            placeholder: "请输入用户名"
        }
    },
    {
        name: "password",
        rules: [
            {
                required: true,
                message: "请输入密码"
            }
        ],
        component: {
            type: "INPUT",
            prefix: <LockOutlined className="site-form-item-icon" />,
            placeholder: "请输入密码"
        },
        type: "password"
    },
    {
        name: "password_confirm",
        rules: [
            {
                required: true,
                message: "请再次输入密码"
            }
        ],
        component: {
            type: "INPUT",
            prefix: <UserOutlined className="site-form-item-icon" />,
            placeholder: "请再次输入密码"
        },
        type: "password"
    },
    {
        name: "phone",
        rules: [
            {
                required: true,
                message: "输入电话"
            }
        ],
        component: {
            type: "INPUT",
            prefix: <PhoneOutlined className="site-form-item-icon" />,
            placeholder: "输入电话"
        }
    },
    {
        name: "email",
        rules: [
            {
                required: true,
                message: "输入邮箱"
            }
        ],
        component: {
            type: "INPUT",
            prefix: <MailOutlined className="site-form-item-icon" />,
            placeholder: "输入邮箱"
        }
    },
    {
        name: "question",
        rules: [
            {
                required: true,
                message: "输入密码提示问题"
            }
        ],
        component: {
            type: "INPUT",
            prefix: <QuestionCircleOutlined className="site-form-item-icon" />,
            placeholder: "输入密码提示问题"
        }
    },
    {
        name: "answer",
        rules: [
            {
                required: true,
                message: "输入密码提示答案"
            }
        ],
        component: {
            type: "INPUT",
            prefix: <QuestionOutlined className="site-form-item-icon" />,
            placeholder: "输入密码提示答案"
        }
    }
]

// register info type

export interface registerUserInfo {
    username         : string,
    password         : string,
    password_confirm : string,
    phone            : number,
    email            : string,
    question         : string,
    answer           : string
}