<template>
    <TemplateFrame>
        <template #body>
            <div class="detail-title"> {{ name }} </div>
            <div class="body-box">
                <div class="top">
                    <div class="pic">
                        <img v-if="picUrlLink" :src="picUrlLink"/>
                    </div>
                    <div class="right">
                        <div>
                            <div class="title">{{ detailText?.categoryName }}</div>
                            <div class="sub-title">
                                {{ detailText?.summary }}
                            </div>
                        </div>
                        <div v-if="detailText?.serviceProvider">
                            <div class="service">
                                服务商 
                                <div class="pic2">
                                    <img :src="picUrl+detailText?.serviceProviderAttach.previewUrl"/>
                                </div>
                                {{ detailText?.serviceProvider }}
                            </div>
                            <q-btn class="glossy login" rounded color="primary" label="立即申请" />
                        </div>
                    </div>
                </div>
                <div class="detail">
                    <div class="title">详情介绍</div>
                    <div class="in-text" v-html="detailText?.content">
                    </div>  
                </div>
            </div>
        </template>
    </TemplateFrame>
    <Bottom/>
</template>

<script setup lang="ts">
import { ref, computed} from 'vue';
import TemplateFrame from '@/components/TemplateFrame.vue'
import { useRouter, useRoute} from 'vue-router'
import http , {picUrl} from '@/http/httpContentMain'
import Bottom from '@/components/Bottom.vue'
const route = useRoute()
const query = route.query as {
    type: string, // 1 数据安全
    id: string
}

interface detailInf  {
    categoryName: string,
    content: string,
    summary: string,
    serviceProvider?: string,
    serviceProviderAttach: {
        previewUrl?: string
    },
    serviceHallAttach?: {
        previewUrl?: string
    },
    coverImage?: {
        previewUrl: string
    }
}
const detailText = ref({} as detailInf)
const picUrlLink = ref('')

const name = computed(() => {
    if(query.type == '1') return '安全培训 > 信息安全培训'
    if(query.type == '2') return '数据安全 > 数据安全评估'
    if(query.type == '3') return '数据安全 > 数据安全治理'
    if(query.type == '4') return '数据安全 > 服务商资源池'
})


const getDate = () => {
    let link = ''
    if(query.type == '1'){
        link = 'k2401-safety/safety/'
    }else{
        link = 'k2401-service-hall/service-hall/'
    }
    http.get(link+query.id).then((data) => {
        detailText.value = data as unknown as detailInf
        picUrlLink.value = picUrl+(detailText.value?.coverImage?.previewUrl||detailText.value?.serviceHallAttach?.previewUrl)
        console.log(picUrlLink.value)
    })
}
getDate()

</script>
<style lang="scss" scoped>
.detail-title{
    font-size: 14px;
    margin-top: 10px;
    padding: 5px 0px;
}
.body-box{
    width: 100%;
    padding: 25px;
    height: auto;
    background: white;
    margin-top: 12px;
    box-sizing: border-box;
    .top{
        display: flex;
        margin-bottom: 20px;
    }
    .pic{
        display: inline-block;
        width: 38%;
        padding-top: 23%;
        background-color: #d1d1d1;
        box-shadow: 0 0 10px 0 rgba(0,0,0,0.3);
        position: relative;
        overflow: hidden;
        img{
            position: absolute;
            left: 0px;
            top: 0px;
            width: 100%;
        }
    }
    .right{
        display: inline-block;
        width: 62%;
        box-sizing: border-box;
        padding: 0px 40px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        .title{
            font-size: 18px;
            font-weight: bold;
            padding: 6px 0px;
        }
        .sub-title{
            color: grey;
            height: 40px;
            overflow: hidden;
        }
        .service{
            margin-bottom: 10px;
            color: grey;
            font-size: 12px;
            display: flex;
            align-items: center;
            .pic2{
                width: 70px;
                height: 20px;
                display: inline-block;
                margin: 0px 10px;
                position: relative;
                overflow: hidden;
                img{
                    position: absolute;
                    left: 0px;
                    width: 100%;
                    top: 0px;
                }
            }
        }
    }
    .detail{
        width: 100%;
        height: auto;
        .title{
            font-weight: bold;
            padding: 20px;
            font-size: 18px;
            position: relative;
            &::before{
                width: 5px;
                height: 15px;
                content: '';
                position: absolute;
                left: -1px;
                top: 25px;
            }
        }

        .in-text{
            width: 100%;
            height: 500px;
            padding: 20px;
            border: 1px dashed grey;
            border-spacing: 20px;
            box-sizing: border-box;
        }
    }
}
</style>