import { LockOutlined, UserOutlined } from "@ant-design/icons";
import React from "react";

interface RuleObject {
    required: boolean,
    message : string
}



interface LoginInfo {
    name       : string,
    rules      : RuleObject[],
    component  : any,
    type?      : string
}

export const LoginItemList:LoginInfo[]  = [
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
    }
];

// login
export interface userLoginInfo  {
    username: string,
    password: string
}

// check username if it is exists

export interface CheckUserNameIsExists {
    type: string,
    str : string
}

// logout response

export interface LogOutType {
    status: number
}


