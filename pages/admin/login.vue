<template>
  <el-card shadow="always" :style="{width:'500px'}">
    <el-form :model="controls" :rules="rules" ref="form" @submit.native.prevent="onSubmit">
      <h1>Вход</h1>

      <el-form-item label="Логин" prop="login">
        <el-input v-model.trim="controls.login"></el-input>
      </el-form-item>

      <el-form-item label="Пароль" prop="password">
        <el-input v-model.trim="controls.password" type="password"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" native-type="submit" round :loading="submitted">Войти</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  layout: "empty",
  data() {
    return {
      submitted : false,
      controls: {
        login: "",
        password: ""
      },
      rules: {
        login: [
          {
            required: true,
            message: "Введите логин",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "Введите пароль",
            trigger: "blur"
          },
          {
            min: 2,
            message: "Пароль должен быть не менее 2-х символов",
            trigger: "blur"
          }
        ]
      }
    };
  },
  mounted() {
    const { message } = this.$route.query;
    if (message === "login") {
      this.$message.info("Для начала войдите в систему");
    }
    if (message === "logout") {
      this.$message.info("Вы вышли из системы");
    }
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(async valid => {
        if (valid) {
          this.submitted  = true;
          try {
            const formData = {
              login: this.controls.login,
              password: this.controls.password
            };
            await this.$store.dispatch("auth/login", {
              login: this.controls.login,
              password: this.controls.password
            });
            this.$router.push("/admin");
          } catch (e) {
            this.submitted  = false;
          }

          console.log("Submit");
        } else {
          console.log("Not valid");
        }
      });
    }
  }
};
</script>
