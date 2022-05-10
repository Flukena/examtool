<template>
  <div id="app">
    <label for="">Email</label>
    <input type="text" v-model="email">
    <label for="">Password</label>
    <input v-model="password" type="password">
    <button @click="register()">register</button>
</div>
</template>
<script>
import axios from "axios";
axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
export default {
  name:'app',
  data() {
    return{
      email:"",
      password:""
    }
  },methods: {
    register(){
      if(this.email != '' && this.password != ''){
        axios.post("http://localhost:3000/register", {email:this.email, password:this.password}).then((res) => {
          alert(res)
        }).catch((error) =>{
          console.log(error)
          alert(error)
        })
      }else{
        alert("กรุณาใส่ข้อมูล")
      }
}
  }

}

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}.nav{
  justify-content: right;
  float: right;
}

</style>
