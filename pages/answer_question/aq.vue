<template>
  <div id="aCoursesList" class="bg-fa of">
    <section class="container">
      <header class="comm-title">
         <el-button type="primary" class="write-question" icon="el-icon-edit" @click="openAddDialog">我要提问</el-button>
      </header>
       <question-list ref="questionlist" />
           <!-- 添加弹窗 -->
      <el-dialog width="80%" title="提问" :visible.sync="addDialog">
        <question-write ref="questionwrite" @closeAddDialog="closeAddDialog" @freshen="freshen" />
      </el-dialog>
   
    </section>
  </div>
</template>
<script>
import QuestionList from '@/pages/answer_question/question-list'
import QuestionWrite from './question-write'
export default {
   components: {
    QuestionList,
    QuestionWrite
  },
  data() {
    return {
      page: {
        currentPage: 1, // 当前页
        pageSize: 5, // 每页显示条数
        totalPage: 0, // 总页数
        totalCount: 0, // 总条数
        params: {}, // 查询参数对象
        list: [], // 数据
        sortColumn: 'question_time', // 排序列
        sortMethod: 'asc' // 排序方式
      },
       addDialog: false
    }
  },
  created() {
    
  },
  methods:{
     getByPage() {
      this.loading = true
      this.page.params.question_status=0
      questionApi.getByPage(this.page).then(res => {
        this.page = res.data.data
        this.loading = false
      })
    },
    openAddDialog() {
      // 打开添加弹窗
      this.addDialog = true
    },
    closeAddDialog() {
      // 关闭添加弹窗
      this.addDialog = false
      this.getByPage() 
    },
    freshen() {
      this.$refs.questionlist.getByPage()
    }
  }
};
</script>

<style scoped>
  .active {
    background: #00FFCC;
  }
  .hide {
    display: none;
  }
  .show {
    display: block;
  }


  .write-question {
    width: 100%;
  }
</style>
