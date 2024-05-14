import axios from 'axios'

const setBaseInf =  {
    baseUrl: 'http://47.100.234.98:18766/data-exit-mobileapi/'
}

interface httpConnect{
    get:() => {}
    post: () => {}
}

class mainHttpConnect{
    private baseUrl
    private successCode
    private backValue
    constructor(url: string){
        this.baseUrl = url
        this.successCode = 200
        this.backValue = null as any
    }

    callBack(value: string){
        console.log('回调')
    }

    failFun() {
        //DIAOLOG
        console.log('接口返回提示报错:'+this.backValue)
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
            this.backValue = response.data
            this.failFun()
        }
    }

    get(url:string, param?: any) {
        axios.get(this.baseUrl+url, param).then(response => {
            this.commonResolve(response)
        })
        return this
    }

    post(url:string, param?: any){
        axios.post(this.baseUrl+url, param).then(response => {
            this.commonResolve(response)
        })
    }

}


// example
/**
 * http.get('/tag/child-list/'+value).then((response) => {})
 */



export default new mainHttpConnect(setBaseInf.baseUrl)