import { BASE_URL } from '@/constants'
import fetch from 'isomorphic-fetch'

type ConfigType = {
    data?: Record<string, any>;
    token?: string;
    method?: string;
}

// Trong TypeScript, Record là một kiểu dữ liệu giúp định nghĩa một đối tượng với các cặp key-value
const api = {
    callJson: async (path: string, data?: Record<string, any>, method: string = "GET") => {
        const _url = `${BASE_URL}${path}`;
        const config: RequestInit = {
            method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
        return fetch(_url, config).then(res => res.json());
    },


    callApi: async (url: string, { data, method = 'GET', token }: ConfigType = {}) => {
        const URL = `${BASE_URL}${url}`;

        let headers: HeadersInit = {
            "Content-Type": "application/json"
        };
        if (token) Object.assign(headers, { "Authorization": `Bearer ${token}` });

        const config: RequestInit = {
            method,
            headers,
            body: JSON.stringify(data)
        }

        return fetch(URL, config).then(res => res.json())
    }
}

export default api;