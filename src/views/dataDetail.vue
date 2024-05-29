<template>
    <TemplateFrame>
        <template #body>
            <div class="detail-title"> {{ name }} </div>
            <div class="body-box">
                <div class="top">
                    <div class="pic"></div>
                    <div class="right">
                        <div>
                            <div class="title">数据安全风险评估</div>
                            <div class="sub-title">
                                风险评估由省公信厅指导.................
                            </div>
                        </div>
                        <div>
                            <div class="service">
                                服务商 
                                <div class="pic2"></div>
                                中新科技股份有限公司
                            </div>
                            <q-btn class="glossy login" rounded color="primary" label="立即申请" />
                        </div>
                    </div>
                </div>
                <div class="detail">
                    <div class="title">详情介绍</div>
                    <div class="in-text">
                        1111111111111111111111111111111111
                    </div>  
                </div>
            </div>
        </template>
    </TemplateFrame>

</template>

<script setup lang="ts">
import { ref, computed} from 'vue';
import TemplateFrame from '@/components/TemplateFrame.vue'
import { useRouter, useRoute} from 'vue-router'
const route = useRoute()
const query = route.query as {
    type: string, // 1 数据安全
    id: string
}

const name = computed(() => {
    if(query.type == '2') return '数据安全 > 信息安全培训'
    if(query.type == '1') return '安全培训 > 信息安全培训'
})


const getDate = () => {
    console.log('======')
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
        background-color: #4a9da9;
        box-shadow: 0 0 10px 0 rgba(0,0,0,0.3);
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
                width: 60px;
                height: 20px;
                display: inline-block;
                background-color: #3485FF;
                margin: 0px 10px;
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
                background: #3485FF;
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