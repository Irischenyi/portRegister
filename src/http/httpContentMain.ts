import axios from 'axios'

const setBaseInf =  {
    baseUrl: 'http://47.100.234.98:18766/data-exit-mobileapi/',
    picUrl: 'http://47.100.234.98:18766'
}

interface httpConnect{
    get:() => {}
    post: () => {}
}


class httpConnectMain{
    constructor(){
        this.interceptor()
    }

    interceptor(){
        axios.interceptors.response.use((response) => {
            return response
        }, function(error){
            return Promise.reject(error)
        })
    }

    errorFun(error:any){

    }
}

class mainHttpConnect extends httpConnectMain{
    private baseUrl
    private successCode
    private backValue

    constructor(url:string){
        super()
        this.baseUrl = url
        this.successCode = 200
        this.backValue = null as any
    }

    callBack(value: string){
        console.log('回调')
    }

    failBack(value: string){}

    fail(fun: (value: string) => void) {
        //DIAOLOG
        this.failBack = fun
        return this
        // console.log('接口返回提示报错:'+JSON.stringify(this.backValue))
    }

    then(fun: (value: string) => void){
        this.callBack = fun
        return this
    }


    commonResolve(response: { data: { code: number, data: any}}){
        if(response.data.code == this.successCode){
            this.backValue = response.data.data;
            this.callBack(response.data.data)
        }else{
            this.backValue = response.data as unknown as {msg: string}
            this.failBack(this.backValue.msg)
        }
    }

    get(url:string, param?: any) {
        axios.get(this.baseUrl+url, param).then(response => {
            this.commonResolve(response)
        }).catch((error) => {
            this.errorFun(error)
        })
        return this
    }

    post(url:string, param?: any, headers?: {}){
        axios.post(this.baseUrl+url, param, { headers }).then(response => {
            this.commonResolve(response)
        }).catch((error) => {
            this.errorFun(error)
        })
        return this
    }

}


// example
/**
 * http.get('/tag/child-list/'+value).then((response) => {})
 */


export default new mainHttpConnect(setBaseInf.baseUrl)
export const picUrl = setBaseInf.picUrl