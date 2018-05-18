<template>
  <form>
    <div class="form-group">
      <label for="login">Логин</label>
      <input type="text" class="form-control" id="login" aria-describedby="loginHelp" placeholder="Введите логин" v-model="login">
      <small id="loginHelp" class="form-text text-muted">Требуется для регистрации. Не рекомендуется забывать.</small>
    </div>
    <div class="form-group">
      <label for="password">Пароль</label>
      <input type="password" class="form-control" id="password" placeholder="Пароль" v-model="password">
    </div>
    <button class="btn btn-primary" v-on:click.prevent="register" type="submit">Зарегистрироваться</button>
  </form>
</template>

<script>
export default {
  name: 'Registration',
  data () {
    return {
      login: null,
      password: null
    }
  },
  methods: {
    register () {
      const user = {
        user: {
          login: this.login.toLowerCase(),
          password: this.password
        }
      }
      this.$http.post('https://proxy.quantumbit.ru/api/users', user).then(result => {
        if (result.data.login) {
          this.$router.push('/auth')
        }
      }).catch(error => console.log(error))
    }
  }
}
</script>

<style scoped>

</style>
