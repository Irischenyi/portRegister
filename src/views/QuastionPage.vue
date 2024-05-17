<template>
    <TemplateFrame>
        <template #body>
            <div class="question-center">
                <div class="title">需求调研表单</div>
                <el-form>
                    <el-row>
                        <el-col>
                            <div>
                                2. 是否存在跨境场景？是否存在跨境场景？是否存在跨境场景？
                            </div>
                            <el-checkbox-group>
                                <el-col :span="12">
                                    <el-checkbox label="A. 是" value="1" />
                                </el-col>
                                <el-col :span="12">
                                    <el-checkbox label="B. 否" value="2" />
                                </el-col>
                                <el-col :span="12">
                                    <el-checkbox label="B. 否" value="2" />
                                </el-col>
                                <el-col :span="12">
                                    <el-checkbox label="B. 否" value="2" />
                                </el-col>
                            </el-checkbox-group>
                        </el-col>
                    </el-row>
                    <el-row>
                      <div style="display: flex; flex-direction: column">
                        <div>单位性质</div>
                        <!-- <el-input v-model="ruleForm1.dwxz1"></el-input> -->
                        <el-select
                          style="width: 150px"
                          clearable
                        >
                          <el-option label="单位性质1" value="单位性质1" />
                          <el-option label="单位性质2" value="单位性质2" />
                        </el-select>
                      </div>
                    </el-row>
                    <el-row>
                      <div style="display: flex; flex-direction: column">
                        <div>单位性质</div>
                        <el-input type="text"></el-input>
                      </div>
                    </el-row>
                    <q-btn class="glossy login" rounded color="primary" label="提交" />
                </el-form>
            </div>
        </template>
    </TemplateFrame>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TemplateFrame from '@/components/TemplateFrame.vue'

</script>

<style lang="scss" scoped>
.el-row{
    padding: 20px 0px;
}

.title{
    padding: 30px 0px;
    font-size: 20px;
}

.question-center{
    background-color: white;
    width: 100%;
    border-radius: 10px;
    margin-top: 20px;
    box-sizing: border-box;
    padding: 20px 50px;
}

.login{
    margin: 20px 0px;
    padding: 0px 30px;
}
</style>