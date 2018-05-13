<template>
    <div class="row">
      <button class="btn btn-primary" v-on:click="createTask">Создать задачу</button>
      <table class="table">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">$oid</th>
          <th scope="col">digest</th>
          <th scope="col">status</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(task, index) in tasks" v-bind:key="index">
          <th scope="row"><router-link :to="'/task/'+task._id.$oid">{{index + 1}}</router-link></th>
          <td><router-link :to="'/task/'+task._id.$oid">{{task._id.$oid}}</router-link></td>
          <td><router-link :to="'/task/'+task._id.$oid">{{task.digest}}</router-link></td>
          <td><router-link :to="'/task/'+task._id.$oid">{{task.status}}</router-link></td>
        </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
export default {
  name: 'Tasks',
  data () {
    return {
      tasks: null
    }
  },
  methods: {
    createTask () {
      this.$http.post('http://proxy.quantumbit.ru/api/tasks', {}).then(result => {
        this.$router.push('/task/' + result.data.tasks._id.$oid)
      })
    }
  },
  mounted () {
    this.$http.get('http://proxy.quantumbit.ru/api/tasks').then(result => {
      this.tasks = result.data.tasks
    })
  }
}
</script>

<style scoped>

</style>
