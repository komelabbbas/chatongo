type IProps = {
    path: string,
    method?: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE',
    headers?: Object,
    body?: Object
};

export default class Request {
    static get(params) {
        return this.request({ method: 'GET', ...params });
    }

    static post(params) {
        return this.request({ method: 'POST', ...params });
    }

    static put(params) {
        return this.request({ method: 'PUT', ...params });
    }

    static delete(params) {
        return this.request({ method: 'DELETE', ...params });
    }

    static patch(params) {
        return this.request({ method: 'PATCH', ...params });
    }

    static async request({
        path,
        method,
        body,
        headers = {},
        fullResponse = false
    }: IProps) {
        const url = 'https://testffc.nimapinfotech.com/testdata.json';

        const defaultHeaders = {
            'Content-Type': 'application/json'
        };

        const options = {
            method,
            body: JSON.stringify(body),
            headers: { ...defaultHeaders, ...headers }
        };

        return fetch(url, options).then((response) => {
            if (response.ok) {
                if (response.status === 204) {
                    return Promise.resolve();
                } else {
                    return response.json().then((v) => v);
                }
            }

            throw response;
        });
    }
}
