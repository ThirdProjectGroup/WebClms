<template>
  <div id="aCoursesList" class="bg-fa of">
    <section class="container">
      <header class="comm-title">
        <h2 class="fl tac">
          <span class="c-333">详情</span>
        </h2> 
        
         <el-button type="primary" class="write-question" icon="el-icon-edit" @click="openAddDialog">我要回答</el-button>

      </header>
      <el-card >
       
          <div class="question-main">
            <!-- 右侧问题主体 space-between link位置 -->
            <div class="question-left-main">
              <div class="question-top-content">
                <div>
                  <el-tag v-if="question.question_mark===0" type="warning">未解答</el-tag>
                  <el-tag v-if="question.question_mark===1" type="success">已解答</el-tag>
                  <div>{{ question.question_author }} &nbsp;&nbsp;&nbsp;&nbsp; {{ question.question_time }}</div>
                </div>
              </div>
            </div>
          </div>
          <el-divider/>
        <div>
          <div class="question-desc">{{ question.question_title}}</div>
          <div class="question-content" v-html="question.question_content" />
        </div>
        <el-row>
          <el-col :span="6" :push="20" >
            <div >
              <div class="question-good">
                <el-badge :value=question.question_good  type="primary">
                  <el-button size="medium" round @click="questionGood(question_id, question.question_good)">点赞</el-button>
                </el-badge>
                <el-badge :value=question.answer_count  type="primary">
                    <el-button size="medium" round disabled>回复数</el-button>
                </el-badge>
              </div>
            </div>
          </el-col>
        </el-row>
        
      </el-card>

<!-- <el-card v-for="item in page.list" :key="item.question_id" class="box-card" shadow="hover"> -->
      <el-card v-for="item in page.list" :key="item.answer_id" class="box-card" shadow="hover">
        <div>
        <div class="question-container">
           <div>
             
              <div>
                <el-tag v-if="item.answer_mark===0" type="warning">未采纳</el-tag>
                <el-tag v-if="item.answer_mark===1" type="success">已采纳</el-tag>
              </div>
              <!-- 问题标题/描述 -->
              <div class="question-description">{{ item.answer_content }}</div>
              </div>
                <div class="question-bottom-content">
                <div class="question-meta">
                  <div class="author-name">{{ item.answer_author }}</div>
                  <div class="question-time">{{ item.answer_time }}</div>
                </div>

                <div>
                    <el-badge :value=item.answer_good class="item" type="primary">
                      <el-button size="medium" round @click=answerGood(item.answer_id,item.answer_good)>点赞</el-button>
                    </el-badge>
                </div>
              </div>
            </div>
        </div>
      </el-card>
      <el-pagination
      background
      align="center"
      class="pagination"
      prev-text="上一页"
      next-text="下一页"
      layout="total, prev, pager, next, jumper"
      :current-page="page.currentPage"
      :page-size="page.pageSize"
      :total="page.totalCount"
      @current-change="handleCurrentChange"
      />
      <el-button type="success" plain  icon="el-icon-back"  @click="goBack()">返回</el-button>

       <el-dialog width="80%" title="回答" :visible.sync="addDialog">
        <answer-add ref="answeradd " @closeAddDialog="closeAddDialog" @freshen="freshen" />
      </el-dialog>
    </section>
  </div>
</template>

<script>
import questionApi from '@/api/answer/question'
import answerApi from '@/api/answer/answer'
import AnswerAdd from './answer-add'

export default {
  components: {
    AnswerAdd
  },
  computed: {
    question_id() {
      return this.$route.params.id
    }
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
        sortColumn: 'answer_time', // 排序列
        sortMethod: 'asc' // 排序方式
      },
      question: {},
      answer: {},
      loading: true, // 控制是否显示加载效
      updateDialog: false,// 控制修改弹窗显示
      addDialog: false
    }
  },
  created() {
    this.get()
    this.getAnswerPage()
  },
  methods: {
      getAnswerPage() {
      this.loading = true
      this.page.params.answer_status=0
      this.page.params.question_id=this.question_id
      answerApi.getByPage(this.page).then(res => {
        this.page = res.data.data
        this.loading = false
      })
    },
    get() {
      questionApi.get(this.question_id).then(res => {
        this.question=res.data.data;
      })
    },
    questionGood(question_id, question_good){
      this.question.question_good=this.question.question_good+1
      questionApi.update(this.question).then(res => {
        this.get()
      })
    },
    answerGood(answer_id, answer_good){
      this.answer.answer_id=answer_id
      this.answer.answer_good=answer_good+1
      answerApi.update(this.answer).then(res => {
        this.getAnswerPage()
      })
    },
    // 当前页跳转
    handleCurrentChange(val) {
      this.page.currentPage = val
      this.getAnswerPage(this.page)
    },
    openAddDialog() {
      // 打开添加弹窗
      this.addDialog = true
    },
    closeAddDialog() {
      // 关闭添加弹窗
      this.addDialog = false
      this.getAnswerPage()
      this.get()
    },
    freshen() {
      
    },
    goBack() {
      this.$router.go(-1)
    }
  }
}
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
  .c-333 {
    text-align: center;
  }
    
  .write-question {
    width: 100%;
  }

  .question-container {
    display: flex;
    flex-direction: row;
    min-height: 1000px;
    width: 1200px;
    /* border: 1px solid red; */
    /* 左右自适应 */
    margin: auto;
    margin-top: 10px;
    margin-bottom: 20px;
  }
 .left-container {
    display: flex;
    flex-direction: column;
    width: 850px;
    min-height: 1000px;
    margin-right: 3px;
  }
  .question-list {
    min-height: 300px;
  }
  .question-desc {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    line-height: 70px;
  }

  .question-content {
    white-space: pre-wrap;
    min-height: 60px;
    width: 100%;
  }

  .question-main {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

   .question-left-main {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 24px;
  }
  .question-bottom-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 3px;
  }

  .box-card {
    width: 100%;
    height: 130px;
  }
   .question-meta {
     width: 300px;
    color: #9c9ea8;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .item {
    padding: 18px 0;
    margin-right: 10%;
  }
   .question-description {
    max-width: 600px;
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
