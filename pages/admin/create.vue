<template>
  <input type="text" />
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['admin-auth']
}
</script>
