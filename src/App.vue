<template>
  <div id="app">
    <about/>
  </div>
</template>

<script>
import about from './components/about'
export default {
  name: 'App',
  components:{
    about
  },
  data(){
    return{
      
    }
  },
  created(){

  },
  methods:{
   
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
  margin-top: 60px;
}
</style>
