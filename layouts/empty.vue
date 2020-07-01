<template>
  <div class="empty-l">
    <nuxt />
  </div>
</template>

<script>
export default {
  computed:{
    error(){
      return this.$store.getters.error
    }
  },
  watch:{
    error(value){
      this.$message.error(value.response.data.message)
    }
  }
}
</script>

<style lang="scss" scoped>
.empty-l{
  display: flex;
  justify-content: center;
  width:100%;
  padding-top: 4rem;
}

</style>
