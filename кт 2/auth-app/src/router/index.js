import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AboutPage from '../views/AboutPage.vue';
import LoginPage from '../views/LoginPage.vue';
import ProfilePage from '../views/ProfilePage.vue';
import UsersList from '../views/UsersList.vue';
import SignUp from '@/views/SignUp.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/login', component: LoginPage },
  { path: '/profile', component: ProfilePage },
  { path: '/users', component: UsersList },
  { path: '/signup', component: SignUp},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;