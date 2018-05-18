<template>
  <form>
    <div class="form-group">
      <label for="login">Логин</label>
      <input type="text" class="form-control" id="login" aria-describedby="loginHelp" placeholder="Введите логин" v-model="login">
      <small id="loginHelp" class="form-text text-muted">Требуется для входа. Надеюсь, вы его помните</small>
    </div>
    <div class="form-group">
      <label for="password">Пароль</label>
      <input type="password" class="form-control" id="password" placeholder="Пароль" v-model="password">
    </div>
    <button class="btn btn-primary" v-on:click.prevent="auth" type="submit">Вход</button>
  </form>
</template>

<script>
export default {
  name: 'Auth',
  data () {
    return {
      login: null,
      password: null
    }
  },
  methods: {
    auth () {
      this.$http.post('https://proxy.quantumbit.ru/api/auth', {
        login: this.login.toLowerCase(),
        password: this.password
      }).then(result => {
        this.$store.commit('setToken', result.data.token)
        this.$router.push('/tasks')
      })
    }
  }
}
</script>

<style scoped>

</style>
