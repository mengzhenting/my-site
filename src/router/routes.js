import "nprogress/nprogress.css";
import NotFound from "@/views/NotFound.vue";
import { start, done, configure } from "nprogress";
//nprogress一个进度条插件
configure({
    trickleSpeed: 20,
    showSpinner: false,
});

function delay(duration) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, duration);
    });
}

function getPageComponent(pageCompResolver) {
    return async () => {
        //开始加载
        start();
        if (process.env.NODE_ENV === "development") {
            await delay(2000);
        }
        const comp = await pageCompResolver();
        //加载完成
        done();
        return comp;
    };
}

export default [
    {
        name: "Home",
        path: "/",
        component: getPageComponent(() =>
            import(/* webpackChunkName: "home" */ "@/views/Home")
        ),
        meta: {
            title: "首页",
        },
    },
    { path: "/loading", component: () => import("@/Login/Loading") },
    { path: "/login", component: () => import("@/Login/Login") },
    {
        name: "About",
        path: "/about",
        component: getPageComponent(() =>
            import(/* webpackChunkName: "about" */ "@/views/About")
        ),
        meta: {
            title: "关于我",
            //是否有权限
            auth: true,
        },
    },
    {
        name: "Blog",
        path: "/article",
        component: getPageComponent(() =>
            import(/* webpackChunkName: "blog" */ "@/views/Blog")
        ),
        meta: {
            title: "文章",
            auth: true,
        },
    },
    {
        name: "CategoryBlog",
        path: "/article/cate/:categoryId",
        component: getPageComponent(() =>
            import(/* webpackChunkName: "blog" */ "@/views/Blog")
        ),
        meta: {
            title: "文章",
            auth: true,
        },
    },
    {
        name: "BlogDetail",
        path: "/article/:id",
        component: getPageComponent(() =>
            import(/* webpackChunkName: "blogdetail" */ "@/views/Blog/Detail")
        ),
        meta: {
            title: "文章详情",
            auth: true,
        },
    },
    {
        name: "Project",
        path: "/project",
        component: getPageComponent(() =>
            import(/* webpackChunkName: "project" */ "@/views/Project")
        ),
        meta: {
            title: "项目&效果",
            auth: true,
        },
    },
    {
        name: "Message",
        path: "/message",
        component: getPageComponent(() =>
            import(/* webpackChunkName: "message" */ "@/views/Message")
        ),
        meta: {
            title: "留言板",
            auth: true,
        },
    },
    {
        name: "NotFound",
        path: "*",
        component: NotFound,
    },
];