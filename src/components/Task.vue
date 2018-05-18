<template>
    <div class="row">
      <table class="table" v-if="task">
        <tbody>
        <tr>
          <td>OID</td>
          <td>{{task._id.$oid}}</td>
        </tr>
        <tr>
          <td>Digest</td>
          <td>{{task.digest}}</td>
        </tr>
        <tr>
          <td>Status</td>
          <td>{{task.status}}</td>
        </tr>
        </tbody>
      </table>
      <form v-on:submit.prevent="sendAnswer">
        <div class="form-group">
          <label for="answer">Решение задачи: {{response}}</label>
          <input type="text" class="form-control" id="answer" aria-describedby="answerHelp" v-model="answer">
          <small id="answerHelp" class="form-text text-muted">Ответ на задачу</small>
        </div>
        <button type="submit" class="btn btn-primary">Отправить</button>
      </form>
    </div>
</template>

<script>
export default {
  name: 'Task',
  data () {
    return {
      task: null,
      answer: null,
      response: null
    }
  },
  computed: {
    authToken () {
      return this.$store.state.authToken
    }
  },
  methods: {
    sendAnswer () {
      this.$http.patch('https://proxy.quantumbit.ru/api/tasks/' + this.$route.params.id, {
        task: {
          decode: this.answer
        }
      }, {
        headers: {
          'Authorization': this.authToken
        }
      }).then(result => {
        this.response = result.data.status
      })
    }
  },
  mounted () {
    this.$http.get('https://proxy.quantumbit.ru/api/tasks/' + this.$route.params.id).then(result => {
      this.task = result.data.tasks
    })
  }
}
</script>

<style scoped>

</style>
