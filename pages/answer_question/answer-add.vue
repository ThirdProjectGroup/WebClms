<template>
  <div>
    <el-form ref="addForm" :model="answer" label-width="100px" size="mini">
      <!-- <el-form-item label="问题id" style='display：none' >
        <el-input v-model="answer.question_id" />
      </el-form-item> -->
      <el-form-item label="答复内容">
        <el-input v-model="answer.answer_content" type="textarea" />
      </el-form-item>
      <el-form-item label="答复人">
        <el-input v-model="answer.answer_author" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="mini" @click="onSubmit">提交</el-button>
        <el-button size="mini" @click="close">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import answerApi from '@/api/answer/answer'
export default {
  data() {
    return {
      answer: {
        question_id: this.$route.params.id
      }
    }
  },
  created() {
    this.answer.question_id=this.$route.params.id
  },
  methods: {
    // 添加 确认
    /**
     * 1、父组件可以使用 props 把数据传给子组件。
     * 2、子组件可以使用 $emit 触发父组件的自定义事件
     */
    onSubmit() {
      answerApi.save(this.answer).then(res => {
        this.$emit('closeAddDialog')
        this.answer = {
          question_id: this.$route.params.id
        }
        this.$emit('getAnswerPage')
      })
    },
    close() {
      this.$emit('closeAddDialog')
      this.answer = {
        question_id: this.$route.params.id
      }
    }
  }
}
</script>
