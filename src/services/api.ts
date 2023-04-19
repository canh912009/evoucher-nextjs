import { BASE_URL } from '@/constants'
import fetch from 'isomorphic-fetch'

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
    callWithAuth: async (path: string, data: Record<string, any>, method: string = "GET") => {
        const _url = `${BASE_URL}${path}`;
        const config: RequestInit = {
            method,
            headers: {
                "Content-Type": "application/json",
                "Authentication": "Bearer token-cookie",
            },
            body: JSON.stringify(data)
        }
        return fetch(_url, config).then(res => res.json());
    }
}

export default api;