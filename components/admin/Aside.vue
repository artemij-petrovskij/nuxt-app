<template>
  <el-menu
    router
    class="el-menu-vertical-demo"
    :style="{height: '100%'}"
    :collapse="!isCollapse"
    :default-active="$route.path"
  >
    <el-menu-item index="/admin">
      <i class="el-icon-document"></i>
      <span>Аналитика</span>
    </el-menu-item>

    <el-menu-item index="/admin/create">
      <i class="el-icon-document"></i>
      <span>Создать</span>
    </el-menu-item>

    <el-menu-item index="/admin/list">
      <i class="el-icon-document"></i>
      <span>Посты</span>
    </el-menu-item>

    <el-menu-item index="/admin/user">
      <i class="el-icon-document"></i>
      <span>Пользователь</span>
    </el-menu-item>

    <el-menu-item index="/admin/logout">
      <i class="el-icon-document"></i>
      <span>Выйти</span>
    </el-menu-item>
  </el-menu>
</template>

<style scoped>
</style>

<script>
export default {
  data() {
    return {
      isCollapse: true
    };
  }
};
</script>
