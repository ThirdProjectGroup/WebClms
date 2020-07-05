<template>
  <div style="text-align: center">

    <el-card v-for="item in page.list" :key="item.question_id" class="box-card" shadow="hover">
      <div>
              <router-link :to="'question-info/'+item.question_id" class="question-main">
                <div class="question-container">
                  <div class="question-top-content">
                    <div>
                      <el-tag v-if="item.question_mark===0" type="warning">未解答</el-tag>
                      <el-tag v-if="item.question_mark===1" type="success">已解答</el-tag>
                    </div>
                    <!-- 问题标题/描述 -->
                    <div class="question-description">{{ item.question_title }}</div>
                  </div>
                  <div class="question-bottom-content">
                    <div class="question-meta">
                      <div class="author-name">{{ item.question_author }}</div>&nbsp;&nbsp;&nbsp;&nbsp;
                      <div class="question-time">{{ item.question_time }}</div>
                    </div>
                    <div class="question-action">
                      <el-badge :value=item.question_good class="item" type="primary">
                        <el-button size="mini" disabled>点赞</el-button>
                        </el-badge>
                      <el-badge :value=item.answer_count class="item" type="primary">
                        <el-button size="mini" disabled>回复</el-button>
                      </el-badge>
                    </div>
                  </div>
                </div>
              </router-link>
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
     <!-- 修改弹窗 :question="question" 用于传递参数对象
    <el-dialog title="修改" :visible.sync="updateDialog">
      <question-info :question="question" @closeUpdateDialog="closeUpdateDialog" @getByPage="getByPage" />
    </el-dialog> -->
  </div>

  
</template>

<script>
import questionApi from '@/api/answer/question'
import QuestionInfo from '@/pages/answer_question/question-info'
export default {
  components: {
    QuestionInfo
  },
  data() {
    return {
      // 定义page对象
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
      question: {
        question_id: ''
      },
      loading: true, // 控制是否显示加载效
      updateDialog: false // 控制修改弹窗显示
    }
  },
  created() {
    this.getByPage()
  },
  methods: {
    getByPage() {
      this.loading = true
      this.page.params.question_status=0
      questionApi.getByPage(this.page).then(res => {
        this.page = res.data.data
        this.loading = false
      })
    },
    // 当前页跳转
    handleCurrentChange(val) {
      this.page.currentPage = val
      this.getByPage()
    },
  }

}
</script>

<style scoped>
  .scree-menu {
    align-items: center;
    line-height: 50px;
    background-color:white;
    border: 1px solid #e8e8e8;
  }
   .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 100%;
    height: 130px;
  }


  .question-list {
    width: 100%;
    height: 1000px;
    /* border: 1px solid green; */
  }
  .question-main {
    display: flex;
    flex-direction: row;
    text-align: center;
  }
 
  .question-container {
    display: flex;
    text-align: center;
    flex-direction: column;
    width: 100%;
    margin-left: 50px;
  }
  .question-top-content {
    display: flex;
    flex-direction: row;
    margin-bottom: 25px;
  }
  .question-description {
    max-width: 600px;
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .question-bottom-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: -9px;
  }
 .question-meta {
    color: #9c9ea8;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
</style>
