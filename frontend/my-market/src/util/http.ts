
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

// 相关HTTP码定义 (如果是自定义的码 可以单独维护)
enum StatusCode {
    Unauthorized    = 401,
    Forbidden       = 403,
    InternalServerError = 500
}


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
        throw new Error(error);
    }
}


class Http {
    private  instance: AxiosInstance | null = null;
    private get Http(): AxiosInstance {
    }
    initHttp() {
        const http = axios.create({
            baseURL: "",
            headers,
            withCredentials: true
        });

        http.interceptors.request.use(injectToken, () => Promise.reject(error));

        http.interceptors.response.use((response) => {
            return response;
        }, (error) => {

        });
    }
}