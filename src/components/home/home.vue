<template>
  <el-container>
    <el-header class="header">
      <el-row>
        <el-col :span="4">
          <div class="img">
            <img src="../../assets/logo.png" alt="图片无法显示" />
          </div>
        </el-col>
        <el-col :span="18" class="middle">
          <h1>句号网络管理后台</h1>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple">
            <a class="loginout" @click.prevent="loginout" href="#">退出</a>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px" class="aside">
        <el-menu
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :unique-opened ="true">
          
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-user-solid"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item index="1-1">
              <i class="el-icon-s-order"></i>
              <span>用户列表</span>
            </el-menu-item>
          </el-submenu>
          <!-- 权限管理 -->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item index="2-1">
              <i class="el-icon-location"></i>
              <span>角色列表</span>
            </el-menu-item>
            <el-menu-item index="2-2">
              <i class="el-icon-location"></i>
              <span>权限列表</span>
            </el-menu-item>
          </el-submenu>
          
        </el-menu>


      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {

    //获取token
    //if token 有 ->继续渲染组件
    //没有 ->登录页
    beforeCreate(){
      const token = localStorage.getItem('token')
      if(!token){
        this.$router.push({name:'login'})
      }
    },
    methods:{
      loginout(){
        //1. 清除token
        localStorage.clear()
        //2. 提示
        this.$message.success('退出成功')
        //3. 来到login组件
        this.$router.push({name:'login'})
      }
  }

  }
  

</script>
<style>
.el-container {
  height: 100%;
}

.header {
  background-color: #5796ea;
}

.aside {
  background-color: #8291a2;
  
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.middle {
  text-align: center;
}
.loginout {
  line-height: 60px;
  text-decoration: none;
}
.img {
  line-height: 80px;
}
</style>