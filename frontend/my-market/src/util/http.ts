
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { message } from 'antd';
import qs from "qs";


// 相关HTTP码定义 (如果是自定义的码 可以单独维护)
// enum StatusCode {
//     Unauthorized    = 401,
//     Forbidden       = 403,
//     InternalServerError = 500
// }


interface ErrorData {
    data    : string,
    msg     : string,
    status  : number
}

const headers: Readonly<Record<string, string | boolean>> = {
    "Content-Type": "application/x-www-form-urlencoded"
}

const injectToken = (config: AxiosRequestConfig): AxiosRequestConfig => {
    try {
        const token = localStorage.getItem("accessToken");
        if (token != null) {
            if (config && config.headers) {
                config.headers.Authorization = `Bear ${token}`;
            }
        }
        config.data = qs.stringify(config.data);
        return config;
    } catch (error) {
        // @ts-ignore
        throw new Error(error);
    }
}

const errorFun = (info: string) => {
    message.error(info).then(r => r);
};

class Http {
    private  instance: AxiosInstance | null = null;
    private get Http(): AxiosInstance {
        return this.instance != null ? this.instance : this.initHttp();
    }
    initHttp() {
        const http = axios.create({
            baseURL: "",
            headers,
            withCredentials: true
        });

        http.interceptors.request.use(injectToken, (error) => Promise.reject(error));

        http.interceptors.response.use((response) => {
            if (response.data.status === 0) {
                return response.data;
            }
            return Http.handleError(response.data)
        }, (error) => {
            return Http.handleError(error)
        });
        this.instance = http;
        return http;
    }

    request<T = any, R = AxiosResponse<T>>(config: AxiosRequestConfig): Promise<R> {
        return this.Http.request(config);
    }

    get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
        return this.Http.get<T, R>(url, config);
    }

    post<T = any, R = AxiosResponse<T>>(
        url    : string,
        data?  : T,
        config?: AxiosRequestConfig
    ): Promise<R> {
       return this.Http.post<T, R>(url, data, config);
    }

    delete<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
        return this.Http.delete<T, R>(url, config);
    }

    put<T = any, R = AxiosResponse<T>>(
        url   : string,
        data? : T,
        config? : AxiosRequestConfig
    ): Promise<R> {
        return this.Http.put<T, R>(url, data, config);
    }

    private static handleError(error: ErrorData) {
        const errorMessage = error.msg;
        errorFun(errorMessage);
        return Promise.reject(error);

    }

}

export const http = new Http();