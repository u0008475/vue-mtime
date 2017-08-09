import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "./Components/home.vue";
import Tickets from "./Components/tickets.vue";
import Shop from "./Components/shop.vue";
import Find from "./Components/find.vue";
import Myder from "./Components/myder.vue";
import All from "./Components/all.vue";
import Money from "./Components/money.vue";
import Select from "./Components/select.vue";
import Detail from "./Components/detail.vue";
import Pictures from "./Components/pictures.vue";
import Buy from "./Components/buy.vue";
import News from "./Components/news.vue";
import Trailer from "./Components/trailer.vue";
import Charst from "./Components/charst.vue";
import Regist from "./Components/regist.vue";
import Denglu from "./Components/denglu.vue";

Vue.use(VueRouter)//安装路由功能

//配置路由如下
const routes = [
  { path: '/', redirect: '/home' }, 
  { path: '/home', component: Home },
  { path: '/tickets', component: Tickets ,
  	children:[
  			{ path: 'all', component: All},
  			{ path: 'money', component: Money}, 
  			{ path: 'select', component: Select},
        { path: '/tickets', redirect: '/tickets/all' }
  	]
},
  { path: '/shop', component: Shop },
  { path: '/find', component: Find,
  children:[
        { path: 'news', component: News},
        { path: 'trailer', component: Trailer},
        { path: 'charst', component: Charst},
        { path: '/find', redirect: '/find/news' }
  ] 
},
  { path: '/myder', component: Myder },
  { path: '/detail/:id', component: Detail,
      children:[
      { path: '/detail1/:id/pictures', name: 'detail1',component: Pictures},
      { path: '/detail/:id/buy', name: 'detail',component: Buy},
      { path: '/detail/:id',name: 'detail1', redirect: '/detail1/:id/pictures' }
      ]
},
{ path: '/regist', component: Regist},
{ path: '/denglu', component: Denglu}
  ]

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

export default router;