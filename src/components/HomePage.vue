<template>
  <Header />
    <h1>Hello {{name}},Welcome on home page</h1> 
    <table class="my_table">
      <tr>
    <th>Id</th>
    <th>Name</th>
    <th>Contact</th>
    <th>Address</th>
    <th>Action</th>
  </tr>
      <tr v-for="item in restaurant" :key="item.id">
        <td>{{ item.id}}</td>
        <td>{{ item.name}}</td>
        <td>{{ item.contact}}</td>
        <td>{{ item.address}}</td>
        <td><router-link :to="'/update/'+item.id">Update</router-link></td>
        <button v-on:click="deleteRes(item.id)">Delete</button>
      </tr>
    </table>     
</template>
<script>
import Header from './Header.vue';
import axios from "axios"
export default {
  name: 'HomePage',
  components:{
    Header
  },
  data(){
    return {
      name :'',
      restaurant:[]
    }
  },
  methods:{
    async deleteRes(id){
        const result = await axios.delete('http://localhost:3000/restaurants/'+id);
        //console.log(result);
        if(result.status==200){
          this.loadData();
        }
    },
    async loadData(){
      let user = localStorage.getItem("user-info"); 
      this.name = JSON.parse(user)[0].name; 
      if(!user){
        this.$router.push({name:'Home'})
      }

      let result = await axios.get('http://localhost:3000/restaurants'); 
      this.restaurant = result.data;
    }
  },  
  async mounted(){
    this.loadData();
  } 
} 
</script> 
<style>
  table {
    border-collapse: collapse;
  }
  th {
    background: #ccc;
  }

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
  }

  tr:nth-child(even) {
    background: #efefef;
  }

  tr:hover {
    background: #d1d1d1;
  }
</style>