<script setup>

</script>

<template>
<div class="whole-page">
  <div class="title"> 织物异常检测系统</div>
  <RouterView v-slot="{ Component }">
    <keep-alive>
      <component :is="Component"/>
    </keep-alive>
  </RouterView>
</div>
</template>

<style lang="less" scoped>
.whole-page{
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 100%;
  color: var(--font-clr);
  background-color: var(--bkg-clr);
  .title{
    height: 5%;
    width: 100%;

    font-size: 20px;
    font-weight: bold;

    display: flex;
    justify-content: center;
  }
}

</style>
