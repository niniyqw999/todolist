import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TodoListView from '../views/ToDoListView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    redirect: '/todo',
    children: [
      {
        path: '/todo',
        name: 'todo',
        component: TodoListView
      },
      {
        path: '/notifyToDo',
        name: 'notifyToDo',
        // 懒加载
        component: () => import(/* webpackChunkName: "about" */ '../views/NotifyToDoView.vue'),
        // component: NoteView
      },
      {
        path: '/tagSetting',
        name: 'tagSetting',
        // redirect: '/todo',
        // 懒加载
        component: () => import(/* webpackChunkName: "about" */ '../views/TagSettingView.vue'),
        // component: TagSettingView
      },
      {
        path: '/deletedToDo',
        name: 'deletedToDo',
        component: () => import(/* webpackChunkName: "about" */ '../views/DeletedToDoView.vue'),
      },
      {
        path: '/tag/:id',
        name: 'tag',
        component: () => import(/* webpackChunkName: "about" */ '../views/TagFilterView.vue')
      },
      {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
      },
      {
        path: '/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router