console.log(window.Vue)
//MVC我的视图没有写在JS里面,直接写在了./public/index.html页面里,完整版
// new window.Vue({
//   el: '#app',
//   // data可以是一个对象,也可以是一个函数
//   data: {
//     n:0
//   }
// })
//非完整版不支持从html里面拿视图
//h就是createElement
// new window.Vue({
//   el: '#app',
//   render(h) {
//     return h('div',[this.n, h('button',{on:{click:this.add}},'+1')])
//   },
//   // template: `
//   //   <div>{{n}}</div>
//   // `,
//   data: {
//     n: 0
//   },
//   methods:{
//     add(){
//       this.n+=1
//     }
//   }
// })

// import Vue from 'vue'
// // import App from './App.vue'

// Vue.config.productionTip = false

// new Vue({
//   el: '#app',//我要对这个div进行MVC的封装
// })


// new Vue({
//   render: h => h(App),
// }).$mount('#app')
// 等价于
// const vm = new Vue({
//   render: h => h(App),
// }).$mount('#app')

//以前创建一个jQuery实例 new jQuery('#xxx'),new 可以省掉
// const $div = new jQuery('#xxx')
// const $div = $('#xxx')
// $div封装了对xxx的所有操作
const Vue = window.Vue
Vue.config.productionTip = false

import Demo from './Demo.vue'
// console.log(Demo)


// new Vue({
//   render: h => h(Demo)
// }).$mount('#app')
// //相当于
new Vue({
  components: {
    Demo
  },
  // render: h => h(Demo)
  //data还可以是一个函数
  // data: function () {
  //   return {
  //     n: 0
  //   }
  // },
  //ES6缩写
  data(){
    return {
      n: 0,
      array: [1,2,3,4,5,6,7,8]
    }
  },
  // data: {
  //   n: 0
  // },
  // template: `
  //   <div class = "red">
  //     {{n}}
  //     <button @click="add">+1</button>
  //     <hr>
  //     <Hmx/>
  //     {{filter()}}
  //   </div>
  // `,
  template: `
    <div class="red">
      <Demo message="你好 props"/>
    </div>
  `,
  created() {
    // debugger
    console.log('这玩意出现在内存中,没有出现在页面中')
  },
  mounted() {
    // debugger
    console.log('这玩意出现在页面中')
  },
  updated() {console.log('更新了')},
  destroyed() {console.log('已经消亡了')},
  methods: {
    add() {
      this.n += 1;
    },
    // filter() {
    //   console.log('执行了 filter函数')
    //   return this.array.filter(i=>i%2===0)
    // },

  }
}).$mount('#app')
// new window.Vue({
//   el: "#app",//挂载到哪个结点,然后那个结点的内容会被替换
//   render(h) {
//     return h(Demo)
//   },
// render(createElement) {
//   const h = createElement;
//   return h("div", [this.n, h("button",{ onClick: this.add }, "+1")]);
// },
// data: {
//   n: 0
// },
// methods: {
//   add() {
//     this.n += 1;
//   }
// }
// });