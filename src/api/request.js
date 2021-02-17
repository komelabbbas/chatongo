
type IProps = {
    path: string,
    method?: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE',
    headers?: Object,
    body?: Object,
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
        fullResponse = false,
    }: IProps) {
        const url = "http://test.chatongo.in/testdata.json"

        const defaultHeaders = {
                'Content-Type': 'application/json',
            };

        const options = {
            method,
            body: JSON.stringify(body),
            headers: { ...defaultHeaders, ...headers },
        };

        fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => {
    console.log({data})
    return data;
  }).catch((e)=> {
      console.log({e})
      return e
  })


    }
}
