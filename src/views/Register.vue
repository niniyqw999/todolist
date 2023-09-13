<template>
  <div class="register">
        <h1>TodoList注册</h1>
        <div>
            
            <input type="text" class="username_input" required="" v-model="username">
            <label class="username">账号</label>
        </div>
        <div>
            
            <input type="password" class="password_input" required="" v-model="password">
            <label class="password">密码</label>

        </div>
        <button class="submit" value="注册" @click="register">注册</button>
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
    register() {
        if (this.username.trim() === '' || this.password.trim() === '') {
        alert('账号或密码不能为空');}
      
      else{localStorage.setItem('username', this.username);
      localStorage.setItem('password', this.password);
      
      alert('注册成功');
      setTimeout(() => {
        this.$router.push('/login')
      }, 1000);}
    }
  }
    }
</script>

<style scoped>
body{
    margin: 0;
    padding: 0;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(125deg,aqua,red);
}
.register{
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
</style>