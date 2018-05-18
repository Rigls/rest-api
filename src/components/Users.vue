<template>
  <div class="row">
    <table class="table">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">login</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(user, index) in users" v-bind:key="index">
        <th scope="row">{{index + 1}}</th>
        <td>{{user.login}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Users',
  data () {
    return {
      users: null
    }
  },
  mounted () {
    this.$http.get('https://proxy.quantumbit.ru/api/users').then(result => {
      this.users = result.data.users
    })
  }
}
</script>

<style scoped>

</style>
