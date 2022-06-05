// 整理一些本项目中常 使用的一些方法

import { Constants } from "../model/constant";
import { message } from "antd";


class Helper {

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
}


export const helper = new Helper();