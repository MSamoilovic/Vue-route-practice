import User from './components/user/User.vue';
import Home from './components/Home.vue';
import UserStart from './components/user/UserStart.vue';
import UserEdit from './components/user/UserEdit.vue';
import UserDetail from './components/user/UserDetail.vue';

export const routes = [
    { path: '/user', component: User, children: [
        {path:'', component: UserStart},
        {path: ':id/edit', component: UserEdit, name: 'userEdit'},
        {path: ':id', component: UserDetail}
    ] },
    { path: '', component: Home},
    /* { path: '/userStart', component: UserStart} */
]