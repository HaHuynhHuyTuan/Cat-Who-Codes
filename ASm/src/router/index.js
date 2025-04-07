import { createRouter, createWebHistory } from "vue-router";
import SignUp from "../components/SignUp.vue";
import GioiThieu from "../components/GioiThieu.vue";
import Post from "../components/Post.vue";
import Video from "../components/Video.vue";
import PostDetail from "../components/PostDetail.vue";
import AddPost from "../components/AddPost.vue";
import Bai1 from "../components/Bai1.vue";
import Bai3 from "../components/Bai3.vue";
import com from "../components/com.vue";
import index from "../components/index.vue";
import login from "../components/login.vue";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/SignUp' ,
            component: SignUp
        },
        {
            path: '/GioiThieu',
            component: GioiThieu
        },
        {
            path: '/Post',
            component: Post
        },
        {
            path: '/Video',
            component: Video
        },
        {
            path: '/PostDetail',
            component: PostDetail
        },
        {
            path: '/AddPost',
            component: AddPost
        },
        {
            path: '/Bai1',
            component: Bai1
        },
        {
            path: '/Bai3',
            component: Bai3
        },
        {
            path: '/Com',
            component: com
        },
        {
            path: '/',
            component: index
        },
        {
            path: '/login',
            component: login
        }
    ]
});

export default router;