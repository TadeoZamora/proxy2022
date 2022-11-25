import axios from 'axios'
class Http {
    private instance: any;
    constructor() {
        this.instance = axios.create({
            baseURL: 'https://jsonplaceholder.typicode.com/',
            headers: {
                'Content-Type':  'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            }
        });
    }

    async get(path : string){
        return await this.instance.get(path)
    }
    async post(path : string, params : any) {
        return await this.instance.post(path , params)
    }

}

export default Http