import { ref , nextTick} from 'vue'

const codeMixinHook = (picRef:any) => {
    const codeValue = ref({
        show: false,
        buttonDis: false
    })
    

    const getCode = () => {
        codeValue.value.show = true;
        picRef.value.getPic()
    }
   

    let timeTag: any
    const closeCodeFun = (isSuccess: boolean|string)=>{
        codeValue.value.show = false
        if(isSuccess == true){
            codeValue.value.buttonDis = true
            timeTag = setTimeout(()=>{
                codeValue.value.buttonDis = false
                clearTimeout(timeTag)
            }, 60000)
        } 
    }

    const failMessage = ref('')

    return {
        codeValue,
        getCode,
        closeCodeFun,
        failMessage
    }
}

export default codeMixinHook
