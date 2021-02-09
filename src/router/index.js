import Vue from 'vue'
import VueRouter from 'vue-router'


// 引入组件
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import TeacherList from '@/components/teacher-list.vue';
import StudnetList from '@/components/student-list.vue';


Vue.use(VueRouter)

const routes = [{
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      // 教师列表
      {
        name: 'teacher-list',
        path: 'teacher-list',
        component: TeacherList
      },
      // 学生列表
      {
        name: 'student-list',
        path: 'student-list',
        component: StudnetList
      }
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router