<script setup>

import {useControlStore} from "@/stores/control.js";
import {ref} from "vue";

const controlStore = useControlStore()

let input = ref()
const imgUpload = ref()
const isShow = ref(0)
const tableData =  ref([
  {id: '-', cnt: '-'}
])


const upload = (e) => {
  let file = e.target.files[0]
  if(file){
    input.value.src = window.URL.createObjectURL(file)

    let formData = new FormData()
    formData.append('file', file)
    isShow.value = 1
    setTimeout(() =>{
      isShow.value = 2
      tableData.value.pop()
      tableData.value[0] = {id: '0', cnt: '1'}
    }, 1500)
  }else{
    alert('获取图片失败')
  }
}


// print log

const LOG = ['carpet<br>',
    'cuda<br>',
    'epoch [1/200], loss:1.0517<br>',
    'epoch [2/200], loss:0.6470<br>',
    'epoch [3/200], loss:0.5504<br>',
    'epoch [4/200], loss:0.4894<br>',
    'epoch [5/200], loss:0.4489<br>',
    'epoch [6/200], loss:0.4226<br>',
    'epoch [7/200], loss:0.3953<br>',
    'epoch [8/200], loss:0.3702<br>',
    'epoch [9/200], loss:0.3552<br>',
    'epoch [10/200], loss:0.3418<br>',
    'Pixel Auroc:0.992, Sample Auroc0.998, Pixel Aupro0.977<br>',
    'epoch [11/200], loss:0.3383<br>',
    'epoch [12/200], loss:0.3292<br>',
    'epoch [13/200], loss:0.3231<br>',
    'epoch [14/200], loss:0.3160<br>',
    'epoch [15/200], loss:0.3095<br>',
    'epoch [16/200], loss:0.3017<br>',
    'epoch [17/200], loss:0.2929<br>',
    'epoch [18/200], loss:0.2896<br>',
    'epoch [19/200], loss:0.2862<br>',
    'epoch [20/200], loss:0.2793<br>',
    'Pixel Auroc:0.991, Sample Auroc0.992, Pixel Aupro0.973<br>',
    'epoch [21/200], loss:0.2737<br>',
    'epoch [22/200], loss:0.2706<br>',
    'epoch [23/200], loss:0.2637<br>',
    'epoch [24/200], loss:0.2590<br>',
    'epoch [25/200], loss:0.2534<br>',
    'epoch [26/200], loss:0.2513<br>',
    'epoch [27/200], loss:0.2470<br>',
    'epoch [28/200], loss:0.2428<br>',
    'epoch [29/200], loss:0.2397<br>',
    'epoch [30/200], loss:0.2398<br>',
    'Pixel Auroc:0.990, Sample Auroc0.995, Pixel Aupro0.973<br>',
    'epoch [31/200], loss:0.2346<br>',
    'epoch [32/200], loss:0.2316<br>',
    'epoch [33/200], loss:0.2291<br>',
    'epoch [34/200], loss:0.2255<br>',
    'epoch [35/200], loss:0.2222<br>',
    'epoch [36/200], loss:0.2206<br>',
    'epoch [37/200], loss:0.2177<br>',
    'epoch [38/200], loss:0.2155<br>',
    'epoch [39/200], loss:0.2135<br>',
    'epoch [40/200], loss:0.2120<br>',
    'Pixel Auroc:0.990, Sample Auroc0.992, Pixel Aupro0.971<br>',
    'epoch [41/200], loss:0.2084<br>',
    'epoch [42/200], loss:0.2069<br>',
    'epoch [43/200], loss:0.2051<br>',
    'epoch [44/200], loss:0.2032<br>',
    'epoch [45/200], loss:0.2008<br>',
    'epoch [46/200], loss:0.1983<br>',
    'epoch [47/200], loss:0.1983<br>',
    'epoch [48/200], loss:0.1952<br>',
    'epoch [49/200], loss:0.1919<br>',
    'epoch [50/200], loss:0.1914<br>',
    'Pixel Auroc:0.990, Sample Auroc0.990, Pixel Aupro0.972<br>',
    'epoch [51/200], loss:0.1905<br>',
    'epoch [52/200], loss:0.1894<br>',
    'epoch [53/200], loss:0.1875<br>',
    'epoch [54/200], loss:0.1868<br>',
    'epoch [55/200], loss:0.1830<br>',
    'epoch [56/200], loss:0.1828<br>',
    'epoch [57/200], loss:0.1797<br>',
    'epoch [58/200], loss:0.1798<br>',
    'epoch [59/200], loss:0.1771<br>',
    'epoch [60/200], loss:0.1758<br>',
    'Pixel Auroc:0.990, Sample Auroc0.990, Pixel Aupro0.97<br>',
    'epoch [61/200], loss:0.1749<br>',
    'epoch [62/200], loss:0.1739<br>',
    'epoch [63/200], loss:0.1708<br>',
    'epoch [64/200], loss:0.1698<br>',
    'epoch [65/200], loss:0.1706<br>',
    'epoch [66/200], loss:0.1680<br>',
    'epoch [67/200], loss:0.1659<br>',
    'epoch [68/200], loss:0.1643<br>',
    'epoch [69/200], loss:0.1639<br>',
    'epoch [70/200], loss:0.1625<br>',
    'Pixel Auroc:0.990, Sample Auroc0.994, Pixel Aupro0.972<br>',
    'epoch [71/200], loss:0.1618<br>',
    'epoch [72/200], loss:0.1610<br>',
    'epoch [73/200], loss:0.1578<br>',
    'epoch [74/200], loss:0.1547<br>',
    'epoch [75/200], loss:0.1543<br>',
    'epoch [76/200], loss:0.1549<br>',
    'epoch [77/200], loss:0.1526<br>',
    'epoch [78/200], loss:0.1517<br>',
    'epoch [79/200], loss:0.1506<br>',
    'epoch [80/200], loss:0.1504<br>',
    'Pixel Auroc:0.990, Sample Auroc0.990, Pixel Aupro0.972<br>',
    'epoch [81/200], loss:0.1495<br>',
    'epoch [82/200], loss:0.1474<br>',
    'epoch [83/200], loss:0.1472<br>',
    'epoch [84/200], loss:0.1461<br>',
    'epoch [85/200], loss:0.1455<br>',
    'epoch [86/200], loss:0.1450<br>',
    'epoch [87/200], loss:0.1431<br>',
    'epoch [88/200], loss:0.1429<br>',
    'epoch [89/200], loss:0.1423<br>',
    'epoch [90/200], loss:0.1418<br>',
    'Pixel Auroc:0.990, Sample Auroc0.991, Pixel Aupro0.971<br>',
    'epoch [91/200], loss:0.1412<br>',
    'epoch [92/200], loss:0.1399<br>',
    'epoch [93/200], loss:0.1392<br>',
    'epoch [94/200], loss:0.1374<br>',
    'epoch [95/200], loss:0.1362<br>',
    'epoch [96/200], loss:0.1351<br>',
    'epoch [97/200], loss:0.1357<br>',
    'epoch [98/200], loss:0.1347<br>',
    'epoch [99/200], loss:0.1343<br>',
    'epoch [100/200], loss:0.1336<br>',
    'Pixel Auroc:0.990, Sample Auroc0.989, Pixel Aupro0.971<br>',
    'epoch [101/200], loss:0.1324<br>',
    'epoch [102/200], loss:0.1303<br>',
    'epoch [103/200], loss:0.1284<br>',
    'epoch [104/200], loss:0.1288<br>',
    'epoch [105/200], loss:0.1278<br>',
    'epoch [106/200], loss:0.1278<br>',
    'epoch [107/200], loss:0.1277<br>',
    'epoch [108/200], loss:0.1264<br>',
    'epoch [109/200], loss:0.1261<br>',
    'epoch [110/200], loss:0.1253<br>',
    'Pixel Auroc:0.990, Sample Auroc0.990, Pixel Aupro0.97<br>',
    'epoch [111/200], loss:0.1234<br>',
    'epoch [112/200], loss:0.1218<br>',
    'epoch [113/200], loss:0.1214<br>',
    'epoch [114/200], loss:0.1202<br>',
    'epoch [115/200], loss:0.1204<br>',
    'epoch [116/200], loss:0.1194<br>',
    'epoch [117/200], loss:0.1186<br>',
    'epoch [118/200], loss:0.1189<br>',
    'epoch [119/200], loss:0.1184<br>',
    'epoch [120/200], loss:0.1178<br>',
    'Pixel Auroc:0.989, Sample Auroc0.987, Pixel Aupro0.97<br>',
    'epoch [121/200], loss:0.1173<br>',
    'epoch [122/200], loss:0.1161<br>',
    'epoch [123/200], loss:0.1163<br>',
    'epoch [124/200], loss:0.1156<br>',
    'epoch [125/200], loss:0.1145<br>',
    'epoch [126/200], loss:0.1159<br>',
    'epoch [127/200], loss:0.1097<br>',
    'epoch [128/200], loss:0.1045<br>',
    'epoch [129/200], loss:0.1036<br>',
    'epoch [130/200], loss:0.1026<br>',
    'Pixel Auroc:0.990, Sample Auroc0.987, Pixel Aupro0.971<br>',
    'epoch [131/200], loss:0.1019<br>',
    'epoch [132/200], loss:0.1021<br>',
    'epoch [133/200], loss:0.1008<br>',
    'epoch [134/200], loss:0.1003<br>',
    'epoch [135/200], loss:0.1007<br>',
    'epoch [136/200], loss:0.1002<br>',
    'epoch [137/200], loss:0.0996<br>',
    'epoch [138/200], loss:0.0990<br>',
    'epoch [139/200], loss:0.0985<br>',
    'epoch [140/200], loss:0.0987<br>',
    'Pixel Auroc:0.990, Sample Auroc0.988, Pixel Aupro0.971<br>',
    'epoch [141/200], loss:0.0992<br>',
    'epoch [142/200], loss:0.0978<br>',
    'epoch [143/200], loss:0.0973<br>',
    'epoch [144/200], loss:0.0971<br>',
    'epoch [145/200], loss:0.0967<br>',
    'epoch [146/200], loss:0.0963<br>',
    'epoch [147/200], loss:0.0967<br>',
    'epoch [148/200], loss:0.0960<br>',
    'epoch [149/200], loss:0.0966<br>',
    'epoch [150/200], loss:0.0948<br>',
    'Pixel Auroc:0.990, Sample Auroc0.988, Pixel Aupro0.972<br>',
    'epoch [151/200], loss:0.0947<br>',
    'epoch [152/200], loss:0.0946<br>',
    'epoch [153/200], loss:0.0944<br>',
    'epoch [154/200], loss:0.0951<br>',
    'epoch [155/200], loss:0.0940<br>',
    'epoch [156/200], loss:0.0949<br>',
    'epoch [157/200], loss:0.0931<br>',
    'epoch [158/200], loss:0.0931<br>',
    'epoch [159/200], loss:0.0931<br>',
    'epoch [160/200], loss:0.0925<br>',
    'Pixel Auroc:0.990, Sample Auroc0.988, Pixel Aupro0.971<br>',
    'epoch [161/200], loss:0.0920<br>',
    'epoch [162/200], loss:0.0920<br>',
    'epoch [163/200], loss:0.0919<br>',
    'epoch [164/200], loss:0.0922<br>',
    'epoch [165/200], loss:0.0911<br>',
    'epoch [166/200], loss:0.0910<br>',
    'epoch [167/200], loss:0.0910<br>',
    'epoch [168/200], loss:0.0910<br>',
    'epoch [169/200], loss:0.0905<br>',
    'epoch [170/200], loss:0.0906<br>',
    'Pixel Auroc:0.990, Sample Auroc0.986, Pixel Aupro0.97<br>',
    'epoch [171/200], loss:0.0905<br>',
    'epoch [172/200], loss:0.0903<br>',
    'epoch [173/200], loss:0.0893<br>',
    'epoch [174/200], loss:0.0894<br>',
    'epoch [175/200], loss:0.0888<br>',
    'epoch [176/200], loss:0.0884<br>',
    'epoch [177/200], loss:0.0895<br>',
    'epoch [178/200], loss:0.0883<br>',
    'epoch [179/200], loss:0.0878<br>',
    'epoch [180/200], loss:0.0875<br>',
    'Pixel Auroc:0.989, Sample Auroc0.990, Pixel Aupro0.97<br>',
    'epoch [181/200], loss:0.0882<br>',
    'epoch [182/200], loss:0.0877<br>',
    'epoch [183/200], loss:0.0871<br>',
    'epoch [184/200], loss:0.0873<br>',
    'epoch [185/200], loss:0.0872<br>',
    'epoch [186/200], loss:0.0863<br>',
    'epoch [187/200], loss:0.0862<br>',
    'epoch [188/200], loss:0.0862<br>',
    'epoch [189/200], loss:0.0867<br>',
    'epoch [190/200], loss:0.0862<br>',
    'Pixel Auroc:0.990, Sample Auroc0.985, Pixel Aupro0.971<br>',
    'epoch [191/200], loss:0.0858<br>',
    'epoch [192/200], loss:0.0859<br>',
    'epoch [193/200], loss:0.0852<br>',
    'epoch [194/200], loss:0.0850<br>',
    'epoch [195/200], loss:0.0842<br>',
    'epoch [196/200], loss:0.0842<br>',
    'epoch [197/200], loss:0.0847<br>',
    'epoch [198/200], loss:0.0805<br>',
    'epoch [199/200], loss:0.0786<br>',
    'epoch [200/200], loss:0.0778<br>',
    'Pixel Auroc:0.990, Sample Auroc0.987, Pixel Aupro0.97']


let log = ref('')
const learn = () => {
  let len = LOG.length
  for(let i = 0; i < len; ++i){
    setTimeout(() => {
      log.value += LOG[i]
    }, 120 * (i + 1))
  }
  setTimeout(() =>{
    alert('模型训练完成，可进行检测')
  }, 120 * len)
}


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
          <div class="btn"> 学习率：
            <input type="number" value="0.001"></div>
          <div class="btn"> 训练轮数
            <input type="number" value="100"></div>
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
          <div class="btn" @click="learn"> 开始参数学习</div>
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
