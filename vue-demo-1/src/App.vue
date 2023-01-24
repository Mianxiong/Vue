<template>
  <div id="app">
    {{n}}
    <button @click="add">+1</button>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  //data是一个函数
  data(){
    return {
      n:0
    }
  },
  //methods是一个对象
  methods:{
    add(){
      this.n+=1
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
