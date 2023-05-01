<template>
    <Header />
      <h1>Hello User,Welcome on update Restaurant page</h1> 
      <div class="container">
        <div class="card">
            <div class="form">
                <input type="text" name="username" v-model="restaurant.name" placeholder="name"/>
                <input type="text" name="contact"  v-model="restaurant.contact" placeholder="contact"/>
                <input type="address" name="address"   v-model="restaurant.address" placeholder="address"/>
                <button v-on:click="updateRestaurant">Update</button>
            </div>
        </div>
    </div>
  </template>
  <script>
  import Header from './Header.vue';
  import axios from "axios"
  export default {
    name: 'Update',
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
      async updateRestaurant()
      {
        //console.warn(this.restaurant);  
        const result = await axios.put('http://localhost:3000/restaurants/'+this.$route.params.id,{
            name:this.restaurant.name,
            contact:this.restaurant.contact,
            address : this.restaurant.address
        });
        //console.log(result);
        if(result.status==200){
          this.$router.push({name:'Home'})
        }
      }
    },
    async mounted(){
        let user = localStorage.getItem("user-info")
        if(!user){
            this.$router.push({name:'SignUp'})
        }

        const result = await axios.get('http://localhost:3000/restaurants/'+this.$route.params.id)
        this.restaurant = result.data;
    }
  } 
  </script> 