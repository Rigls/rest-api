<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <router-link class="navbar-brand" to="/">Практика #4</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/users">Пользователи</router-link>
            </li>
            <li class="nav-item" v-if="!authToken">
              <router-link class="nav-link" to="/registration">Регистрация</router-link>
            </li>
            <li class="nav-item" v-if="!authToken">
              <router-link class="nav-link" to="/auth">Авторизация</router-link>
            </li>
            <li class="nav-item" v-if="authToken">
              <router-link class="nav-link" to="/tasks">Задачи</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    authToken () {
      return this.$store.state.authToken
    }
  }
}
</script>

<style>
  body {
    padding-top: 54px;
  }
  @media (min-width: 992px) {
    body {
      padding-top: 56px;
    }
  }
</style>
