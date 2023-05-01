<template>
  <div class="container">
    <div class="card">
      <div class="card_title">
        <h1>Create Account</h1>
        <span>Already have an account? <router-link to="login">Sign In</router-link></span>
      </div>
      <div class="form">
        <input type="text" name="username" id="username" placeholder="UserName" v-model="name"/>
        <input type="email" name="email" placeholder="Email" id="email" v-model="email"/>
        <input type="password" name="password" placeholder="Password" id="password"  v-model="password"/>
        <button v-on:click="signUp">Sign Up</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'SignUp',
  data(){
    return {
      name: '',
      email:'',
      password:''
    }
  },
  methods:{
      async signUp()
      {
        let result = await axios.post('http://localhost:3000/users',{
          email:this.email,
          password:this.password,
          name : this.name
        });
        if(result.status==201){
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

