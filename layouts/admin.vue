<template>
<div class="admin">
  <el-container :style="{height:'100%'}">
    <el-aside width="200px">
      Aside
    </el-aside>
    <el-main>
      <nuxt />
    </el-main>
  </el-container>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .admin{
    width:100%;
    height:100vh;
  }

</style>
