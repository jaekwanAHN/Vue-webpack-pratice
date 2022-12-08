<template>
  <div class="app_inner">
    <div class="app__nav"></div>
    <div class="app__page">
      <div class="page__header"></div>
      <div class="page__container"></div>
        <RouterView/>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>

* {
  border: 4px solid;
  box-sizing: border-box;
}
.app__inner {
  display: flex;
  height: 100vh;
  .app__nav{
    width: 240px;
    height: 100%;
    .app__page{
      height: 100%;
      .page__header{
        height:80px;
      }
      .page__container{

      }
    }
  }
}
</style>