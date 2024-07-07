import fetch from "isomorphic-unfetch"

type Config = {
    apiKey: string,
    baseUrl?: string,
}

export abstract class Base {

    private apiKey: string;
    private baseUrl: string;

    constructor(config: Config) {
        this.apiKey = config.apiKey;
        this.baseUrl = config.baseUrl || "https://jsonplaceholder.typicode.com";
    }

    protected invoke<T>(endpoint: string, options?: RequestInit): Promise<T> {
        const url = `${this.baseUrl}${endpoint}`;

        const headers = {
            "Content-Type": "application/json",
            "api-key": this.apiKey
        }

        const config = {
            ...options,
            headers
        }

        return fetch(url, config).then(res => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error(res.statusText)
            }
        })
    }


}