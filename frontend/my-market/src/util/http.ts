
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

// 相关HTTP码定义 (如果是自定义的码 可以单独维护)
// enum StatusCode {
//     Unauthorized    = 401,
//     Forbidden       = 403,
//     InternalServerError = 500
// }


const headers: Readonly<Record<string, string | boolean>> = {
    Accept: "application/json"
}

const injectToken = (config: AxiosRequestConfig): AxiosRequestConfig => {
    try {
        const token = localStorage.getItem("accessToken");
        if (token != null) {
            if (config && config.headers) {
                config.headers.Authorization = `Bear ${token}`;
            }
        }
        return config;
    } catch (error) {
        // @ts-ignore
        throw new Error(error);
    }
}


class Http {
    private  instance: AxiosInstance | null = null;
    private get Http(): AxiosInstance {
        return this.instance !=null ? this.instance : this.initHttp();
    }
    initHttp() {
        const http = axios.create({
            baseURL: "",
            headers,
            withCredentials: true
        });

        http.interceptors.request.use(injectToken, (error) => Promise.reject(error));

        http.interceptors.response.use((response) => {
            return response;
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
        data   : T,
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

    private static handleError(error: any) {
        return Promise.reject(error);

    }

}

export const http = new Http();