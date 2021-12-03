<template>
  <b-card>
    <router-link to="/convert">Convert Currency</router-link>
    <router-link to="/list">List Currency</router-link>
  </b-card>
</template>

<script>
import store from '@/store';

export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
  .card-body a:first-child {
    margin-right: 10px;
  }
</style>
