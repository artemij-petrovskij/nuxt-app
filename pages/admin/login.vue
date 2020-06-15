<template>
  <el-card shadow="always" :style="{width:'500px'}">
    <el-form :model="controls" :rules="rules" ref="form" @submit.native.prevent="onSubmit">

      <el-form-item label="Имя" prop="name">
        <el-input v-model="name"></el-input>
      </el-form-item>





    </el-form>
  </el-card>
</template>

<script>
export default {
  layout: "empty",
  data() {
    return {
      loading: false,
      controls: {
        name: "",
        text: ""
      },
      rules: {
        name: [],
        text: []
      }
    };
  }
};
</script>
