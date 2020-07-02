<template>
  <div>
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="/article" class="headernNav">文章</el-menu-item>
          <el-menu-item index="/create" class="headernNav" style="margin-left:50px">创作</el-menu-item>
          <el-submenu index="2" class="headerNav">
            <template slot="title">消息</template>
            <el-menu-item index="2-1">评论</el-menu-item>
            <el-menu-item index="2-2">回复</el-menu-item>
            <el-menu-item index="2-3">赞</el-menu-item>
          </el-submenu>
          
          <el-form :inline="true" class="demo-form-inline form">
            <div class="daohanglan">
            <el-form-item>
              <el-input placeholder="请输入内容" clearable />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" icon="el-icon-search">搜索</el-button>
            </el-form-item>
            </div>
          </el-form>
          
        </el-menu>
      </el-header>
      <el-container>
        <el-aside width="250px">
          <el-row class="tac">
            <el-col :span="24">
              <!-- <el-menu :data="typeData" default-active="1" class="el-menu-vertical-demo">
                <el-menu-item :v-for="item in typeData" index="1">
                  <span slot="title">{{item.type_name}}</span>
                </el-menu-item>
              </el-menu>-->
              <el-menu default-active="1" class="el-menu-vertical-demo">
                <el-menu-item index="1">导航一</el-menu-item>
                <el-menu-item index="2">导航二</el-menu-item>
                <el-menu-item index="3">导航三</el-menu-item>
                <el-menu-item index="4">导航四</el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-main>
          <div>
            <div class="article-title">这是标题</div>
              <div class="article-content">这是内容</div>
              <div class="article-like">
                <i class="iconfont icon-dianzan"></i>
                <span>123</span>
                <i class="iconfont icon-pinglun"></i>
                <span>123</span>
                <i class="iconfont icon-shoucang"></i>
                <span>123</span>
              </div>
          </div>
          <div>
            <div class="article-title">这是标题</div>
            <div>
              <div class="article-content">这是内容</div>
              <div class="article-like">
                <i class="iconfont icon-dianzan"></i>
                <span>123</span>
                <i class="iconfont icon-pinglun"></i>
                <span>123</span>
                <i class="iconfont icon-shoucang"></i>
                <span>123</span>
              </div>
            </div>
          </div>
          <!-- <div>
            <div class="article-title">这是标题</div>
            <div class="article-content">这是内容</div>
            <div class="article-like">
              <i class="iconfont icon-dianzan"></i>
              <span>123</span>
              <i class="iconfont icon-pinglun"></i>
              <span>123</span>
              <i class="iconfont icon-shoucang"></i>
              <span>123</span>
            </div>
          </div>-->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import articleApi from "@/api/article/article";
import typeApi from "@/api/article/type";

export default {
  name: "article",
  data() {
    return {
      typeData: [],
      activeIndex: "/article"
    };
  },
  created() {
    this.getAll();
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    getAll() {
      typeApi.getAll().then(res => {
        this.typeData = res.data;
        console.log("abcdefg", res);
        // console.log(this.typeData);
        this.loading = false;
      });
    }
  }
};
</script>

<style scoped>
.el-header {
  /* background-color: #B3C0D1; */
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}
.el-main {
  /* background-color: #E9EEF3; */
  color: #333;
  text-align: center;
  line-height: 60px;
}
/* body > .el-container {
    margin-bottom: 40px;
  } */
.el-menu {
  margin-left: 100px;
}
/* .el-header>.el-menu-item {
    margin-left: 100px;
  } */
.el-header > .el-menu > .el-menu-item {
  margin-left: 130px;
}
.el-header > .el-menu > .el-submenu {
  margin-left: 50px;
}
.el-main > div {
  width: 100%;
  height: 120px;
  /* margin-top: 20px; */
}
.article-title {
  background-color: bisque;
  height: 50%;
}
.article-content {
  background-color: yellow;
  float: left;
  width: 1000px;
  height: 50%;
}
.article-like {
  width: 100%;
  height: 50%; 
  /* padding-left: 1000px;
  box-sizing: border-box; */
  /* background-color: aqua; */
}
/* .form {
  top: -20px;
} */
/deep/ .el-form-item__content{
  margin-top: 10px
}
</style>
