<script setup>

import {useControlStore} from "@/stores/control.js";
import {ref} from "vue";

const controlStore = useControlStore()

let input = ref()
const imgUpload = ref()
const isShow = ref(0)

const upload = (e) => {
  let file = e.target.files[0]
  if(file){
    input.value.src = window.URL.createObjectURL(file)

    let formData = new FormData()
    formData.append('file', file)
    isShow.value = 1
    setTimeout(() =>{
      isShow.value = 2
    }, 1500)
  }else{
    alert('获取图片失败')
  }
}

const tableData =  ref([
  {id: 0, cnt: 1}
])

const log = ref('carpet<br>cuda<br>' +
    'epoch [1/200], loss:1.0517<br>'+
    'epoch [2/200], loss:0.6470<br>'+
    'epoch [3/200], ioss:0.5504<br>'+
    'epoch [4/200], ioss:0.4894<br>'+
    'epoch [5/200], ioss:0.4489<br>'+
    'epoch [6/200], ioss:0.4226<br>'+
    'epoch [7/200], ioss:0.3953<br>'+
    'epoch [8/200], ioss:0.3702<br>'+
    'epoch [9/200], ioss:0.3552<br>'+
    'epoch [10/200], ioss:0.3418<br>'+
    'epoch [11/200], ioss:0.3383<br>'+
    'epoch [12/200], ioss:0.3231<br>'+
    'epoch [13/200], ioss:0.3160<br>'+
    'epoch [14/200], ioss:0.3095<br>'
)
</script>

<template>
  <div class="home">
    <div class="control">
      <div class="control-camera" >
        <div class="title">相机设置</div>
        <div class="progresses">
          <div class="progress">
            <div class="name">增强</div>
            <div class="drag" >
              <div class="filled" :style="{width: controlStore.enhance +'%'}"></div>
            </div>
            <input type="number" v-model="controlStore.enhance">
          </div>
          <div class="progress">
            <div class="name">曝光</div>
            <div class="drag" >
              <div class="filled" :style="{width: controlStore.exposure +'%'}"></div>
            </div>
            <input type="number" v-model="controlStore.exposure">
          </div>
        </div>
      </div>

      <div class="control-item">
        <div class="title">参数设置</div>
        <div class="btns">
          <div class="btn"> 学习率</div>
          <div class="btn"> 训练轮数</div>
        </div>
      </div>

      <div class="control-item">
        <div class="title">相机控制</div>
        <div class="btns">
          <div class="btn"> 开启相机</div>
          <div class="btn"> 停止相机</div>
        </div>
      </div>

      <div class="control-item">
        <div class="title">自学习控制</div>
        <div class="btns">
          <div class="btn"> 开始参数学习</div>
          <div class="btn"> 停止学习</div>
        </div>
      </div>

      <div class="control-item">
        <div class="title">在线检测控制</div>
        <div class="btns">
          <div class="btn"> 开始检测</div>
          <div class="btn"> 停止检测</div>
        </div>
      </div>

      <div class="control-item">
        <div class="title">系统设置</div>
        <div class="btns">
          <div class="btn"> 保存</div>
          <div class="btn"> 退出系统</div>
        </div>

      </div>

    </div>
    <div class="detect">
      <div class="img">
        <div class="title">输入图像</div>
        <input type="file" formmethod="post" name="img"
               accept="image/*" hidden
               ref="imgUpload" @change="upload($event)" >
        <img src="@/assets/img/piclook.png" ref="input"
            @click="imgUpload.click">
      </div>
      <div class="img">
        <div class="title">检测结果</div>
        <img v-if="isShow==0" src="@/assets/img/piclook.png" class="image"/>
        <img v-if="isShow==1" src="@/assets/img/loading.gif" class="image"/>
        <img v-if="isShow==2" src="@/assets/img/0_ad.png" class="image"/>
      </div>
      <div class="record">
        <div class="title">记录</div>
        <el-table
            :data="tableData" height="240" border
            style="color: black"
            :cell-style="{ textAlign: 'center' }"
            :header-cell-style="{ 'text-align': 'center' }">
          <el-table-column prop="id" label="图像ID" />
          <el-table-column prop="cnt" label="异常数量" />
        </el-table>
      </div>
      <div class="log">
        <div class="title">训练日志</div>
        <div class="log-txt" v-html="log">
        </div>
      </div>
    </div>

    <div class="status">
      <div class="item">
        <div class="title"> 系统状态</div>
        <div class="info"> 231Normal</div>
      </div>
      <div class="item">
        <div class="title"> 机台号</div>
        <div class="info">GEW-000001</div>
      </div>
      <div class="item">
        <div class="title"> 坯布品名</div>
        <div class="info"> p000001</div>
      </div>
      <div class="item">
        <div class="title"> 坯布布号</div>
        <div class="info"> GEW201709050</div>
      </div>
      <div class="item">
        <div class="title"> 纬密</div>
        <div class="info"> 146.00</div>
      </div>
      <div class="item">
        <div class="title"> 码长</div>
        <div class="info"> Init Part Error1</div>
      </div>
      <div class="item">
        <div class="title"> 总评分</div>
        <div class="info">7</div>
      </div>
      <div class="item">
        <div class="title"> 平均分/码</div>
        <div class="info"> 1.#NF</div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "@/assets/css/homeview.less";
</style>
