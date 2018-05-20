<template>
    <div class="row">
      <div class="row"><button type="button" style="margin: 10px" class="btn btn-primary btn-lg btn-block" v-on:click="createTask">Создать задачу</button></div>
      <table class="table table-sm">
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
      this.$http.post('https://proxy.quantumbit.ru/api/tasks', {}).then(result => {
        this.$router.push('/task/' + result.data.tasks._id.$oid)
      })
    }
  },
  mounted () {
    this.$http.get('https://proxy.quantumbit.ru/api/tasks').then(result => {
      this.tasks = result.data.tasks
    })
  }
}
</script>

<style scoped>

</style>
