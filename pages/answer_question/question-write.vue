<template>
  <div>
    <!--添加表单  -->
    <el-form ref="addForm" :model="question" label-width="100px" size="mini">
      <el-form-item label="问题标题">
        <el-input v-model="question.question_title" />
      </el-form-item>
      <el-form-item label="问题内容">
        <el-input v-model="question.question_content" type="textarea" />
      </el-form-item>
      <el-form-item label="提问人">
        <el-input v-model="question.question_author" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="mini" @click="onSubmit">提交</el-button>
        <el-button size="mini" @click="close">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// 导 入 api 接 口 定 义 的 方 法
import questionApi from '@/api/answer/question'
export default {
  data() {
    return {
      question: {}
    }
  },
  methods: {
    // 添加 确认
    /**
     * 1、父组件可以使用 props 把数据传给子组件。
     * 2、子组件可以使用 $emit 触发父组件的自定义事件
     */
    onSubmit() {
      questionApi.save(this.question).then(res => {
        this.$emit('closeAddDialog')
        this.question = {}
      })
    },
    close() {
      this.$emit('closeAddDialog')
      this.question = {}
    },
    closeAddDialog() {
      // 关闭添加弹窗
      this.addDialog = false
    },
  }
}
</script>
