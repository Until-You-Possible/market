// 整理一些本项目中常 使用的一些方法

import { Constants } from "../model/constant";
import { message } from "antd";


class Helper {

    // 基本的提示信息
    // type message.success/error/warn/info/loading/
    // 默认 success
    public showMessage(content: string, type?: string, duration?: number | 3) {
        switch (type) {
            case Constants.AlertMessageEnum.SUCCESS:
                message.success(content, duration).then( r => r);
                break;
            case Constants.AlertMessageEnum.ERROR:
                message.success(content, duration).then( r => r);
                break;
            case Constants.AlertMessageEnum.WARN:
                message.warn(content, duration).then( r => r);
                break;
            case Constants.AlertMessageEnum.WARNING:
                message.warning(content, duration).then( r => r);
                break;
            case Constants.AlertMessageEnum.LOADING:
                message.loading(content, duration).then( r => r);
                break;
            default:
                message.success(content, duration).then( r => r);
        }
    }

    // 成功状态
    public successResponse(response: any) {
        return response.status === Constants.StatusEnum.SUCCESS
    }
    // 需要登陆
    public needToLogin(response: any) {
        return response.status === Constants.StatusEnum.NEED_LOGIN
    }
}


export const helper = new Helper();