<template>
    <div class="login">
        <h2>Welcome, User!</h2>
        <p>Please log in</p>
        <input type="text" placeholder="User Name" v-model="email"/>
        <input type="password" placeholder="Password" v-model="password"/>
        <input type="submit" value="Log In" v-on:click="login"/>
        <div class="links">
            <a href="#">Forgot password</a>
            <router-link to="sign-up">Register</router-link>
        </div>
    </div>
  </template>
  
  <script>
  import axios from "axios"
  export default {
    name: 'LoginForm',
    data(){
      return {
        email:'',
        password:''
      }
    },
    methods:{
        async login()
        {
          let result = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`);
          
          if(result.status==200 && result.data.length>0){
            localStorage.setItem("user-info",JSON.stringify(result.data))
            this.$router.push({name:'Home'})
          }
        }
    },
    mounted(){
      let user = localStorage.getItem("user-info")
      if(user){
        this.$router.push({name:'Home'})
      }
    } 
  }  
  </script>  
  
  