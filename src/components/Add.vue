<template>
    <Header />
      <h1>Hello User,Welcome on Add Restaurant page</h1> 
      <div class="container">
        <div class="card">
            <div class="form">
                <input type="text" name="username" v-model="restaurant.name" placeholder="name"/>
                <input type="text" name="contact"  v-model="restaurant.contact" placeholder="contact"/>
                <input type="address" name="address"   v-model="restaurant.address" placeholder="address"/>
                <button v-on:click="addRestaurant">add</button>
            </div>
        </div>
    </div>
  </template>
  <script>
  import Header from './Header.vue';
  import axios from "axios"
  export default {
    name: 'Add',
    components:{
      Header
    },
    data(){
        return {
            restaurant :
            {
                name: '',
                contact:'',
                address:''
            }    
        }
    },
    methods:{
      async addRestaurant()
      {
        console.warn(this.restaurant);  
        const result = await axios.post('http://localhost:3000/restaurants',{
            name:this.restaurant.name,
            contact:this.restaurant.contact,
            address : this.restaurant.address
        });
        if(result.status==201){
          this.$router.push({name:'Home'})
        }
      }
    },
    mounted(){
        let user = localStorage.getItem("user-info")
        if(!user){
            this.$router.push({name:'SignUp'})
        }
    }
  } 
  </script> 