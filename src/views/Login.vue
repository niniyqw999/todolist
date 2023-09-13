<template>
  <div class="login">
        <h1>TodoList登录</h1>
        <form class="" action="" method="">
        <div>
            
            <input type="text" class="username_input" required="" v-model="username">
            <label class="username">账号</label>
        </div>
        <div>
            
            <input type="password" class="password_input" required="" v-model="password">
            <label class="password">密码</label>

        </div>
        <button class="submit" value="登录" @click="login">登录</button> 
        <router-link to="/register" class="link" active-class="black">还没有账号？注册一下</router-link>
        </form>
    </div>
</template>

<script>
export default {
    data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      const storedUsername = localStorage.getItem('username');
      const storedPassword = localStorage.getItem('password');
      
      if (this.username === storedUsername && this.password === storedPassword) {
        // 登录成功，导航到其他页面
        this.$router.push('/todo');
      } else {
        alert('账户或者密码不正确');
      }
    }
  }
};


</script>

<style scoped>
body{
    margin: 0;
    padding: 0;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(125deg,aqua,red);
}
.login{
    width: 400px;
    height: 300px;
    margin:250px auto;
    border: 2px solid red;
    border-radius: 30px;
    background-color: black;
    opacity: 0.6;
    text-align: center;
    color:white;
    font-size: 25px;
    position: relative;
}
.username{
    top: 100px;
    left: 30px;
    position:absolute;
    color: aqua;
    z-index: -1;
}

.username_input{
    position: absolute;
    top: 105px;
    left: 100px;
    width: 240px;
    height: 30px;                
    background-color: inherit;
    border: none;
    border-bottom: 1px solid aqua;
    color: white;
    outline: none;
    font-size: 18px;
}
.password
{
    top: 150px;
    left: 30px;
    position:absolute;
    color: aqua;
    z-index: -1;
  
}
.password_input{
    position: absolute;
    top: 155px;
    left: 100px;
    width: 240px;
    height: 30px;                
    background-color: inherit;
    border: none;
    border-bottom: 1px solid aqua;
    color: white;
    outline: none;
    font-size: 18px;
}
.submit{
    width: 180px;
    height: 40px;
    position: absolute;
    top: 225px;
    left: 110px;
    font-size: 22px;
    color: white;
    border: none;
    border-radius: 25px;
    outline: none;
    background: aqua;
}
.submit:hover{
    cursor: pointer;
    color: #1a1a1a;
    background-image: linear-gradient(125deg,aqua,red);
    transition: 0.8s;
}
.username_input:focus ~ .username,.username_input:valid ~ .username{
    font-size: 30px;
    color: red;
    transition: 0.8s;
}

.password_input:focus ~ .password,.password_input:valid ~ .password{
    font-size: 30px;
    color: red;
    transition: 0.8s;
   
}
.link{
    font-size: 5px;
    color:red;
    position: absolute;
    top:270px;
    left:250px;
}

</style>