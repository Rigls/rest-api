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
      <div>
        <div class="form-group">
          <label for="answer">Решение задачи: {{response}}</label>
          <input type="text" class="form-control" id="answer" aria-describedby="answerHelp" v-model="answer">
          <small id="answerHelp" class="form-text text-muted">Ответ на задачу</small>
        </div>
        <button type="submit" class="btn btn-primary" v-on:click.prevent="getAnswer">Получить решение</button>
        <button type="submit" class="btn btn-primary" v-on:click.prevent="sendAnswer">Отправить</button>
      </div>
    </div>
</template>

<script>
const hashes = require('../hashes')
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
        if (result.data.status === 'good_job') {
          this.getTask()
        }
      })
    },
    getAnswer () {
      this.answer = hashes.find(item => {
        for (let property in item) {
          if (item.hasOwnProperty(property)) {
            if (item[property] === this.task.digest) {
              return true
            }
          }
        }
      }).id
    },
    getTask () {
      this.$http.get('https://proxy.quantumbit.ru/api/tasks/' + this.$route.params.id).then(result => {
        this.task = result.data.tasks
      })
    }
  },
  mounted () {
    this.getTask()
  }
}
</script>

<style scoped>

</style>
