<template>
  <div class="login-wrap">
    <el-form class="login-form"
    label-position="top" 
    label-width="80px" 
    :model="formData">
      <h2>用户登录</h2>  
      <el-form-item label="用户名">
        <el-input v-model="formData.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type = "password" v-model="formData.password"></el-input>
      </el-form-item>
      <el-button class="login-btn" type="primary" @click.prevent="handleLogin1">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
      return {
        formData: {
          username: '',
          password: '',
          page:1,
          size:10
        }
      };
    },
    methods:{

      async handleLogin1(){
        const res =await this.$http.get('education/teacher/list/'+this.formData.page+'/'+this.formData.size)
        
        const{
          data,
          code,
          message
        } = res.data
        console.log(code)
        //登录成功 跳转home
        //保存token
        localStorage.setItem('token',code)
        if(code === 10000){
            this.$router.push({name:'home'})
            this.$message.success(message)
        }else{
            this.$message.error(message);
        }
          
      },


      handleLogin(){
        this.$http.get('education/teacher/list/'+this.formData.page+'/'+this.formData.size).then(res =>{
          console.log(res)
          //登录成功 跳转home
          this.$router.push({name:'home'})
          //提示登录成功
          this.$message.success('成功')
          //不成功 提示信息
        })
      }
    }
};
</script>
<style>

.login-wrap{
  height: 100%;
  background-color: #324152;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-wrap .login-form{
  width: 400px;
  background-color: #fff;
  border-radius: 10px;
  padding: 40px;

}
.login-wrap .login-btn{
  width: 100%;
}
</style>