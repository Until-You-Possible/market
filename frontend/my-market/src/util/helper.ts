// 整理一些本项目中常 使用的一些方法

import { Constants } from "../model/constant";
import { message } from "antd";
import { NavigateFunction, useNavigate} from "react-router-dom";


class Helper {

    // private navigate: NavigateFunction = useNavigate();

    // 基本的提示信息
    // type message.success/error/warn/info/loading/
    // 默认 success
    public showMessage(content: string, type?: string, duration?: number | 3) {
        switch (type) {
            case Constants.AlertMessage.SUCCESS:
                message.success(content, duration).then( r => r);
                break;
            case Constants.AlertMessage.ERROR:
                message.success(content, duration).then( r => r);
                break;
            case Constants.AlertMessage.WARN:
                message.warn(content, duration).then( r => r);
                break;
            case Constants.AlertMessage.WARNING:
                message.warning(content, duration).then( r => r);
                break;
            case Constants.AlertMessage.LOADING:
                message.loading(content, duration).then( r => r);
                break;
            default:
                message.success(content, duration).then( r => r);
        }
    }

    // 整个项目因为各种情况需要返回首页去登陆，重定向等情况
    public redirectLogin() {
        // this.navigate("/login");
    }
}


export const helper = new Helper();