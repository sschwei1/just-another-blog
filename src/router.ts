import { createRouter, createWebHistory } from 'vue-router';
import PagePlaceholder from './components/PagePlaceholder.vue';
import { Component, DefineComponent } from 'vue';

export enum RouteNames {
    Home         = 'Home',
    Login        = 'Login',
    Register     = 'Register',
    Profile      = 'Profile',
    EditProfile  = 'EditProfile',
    Search       = 'Search',
    Blog         = 'Blog',
    CreateBlog   = 'CreateBlog',
    EditBlog     = 'EditBlog',
    LikedBlogs   = 'LikedBlogs',
    Following    = 'Following',
};

const routePaths = {
    [RouteNames.Home]:        '/',
    [RouteNames.Login]:       '/login',
    [RouteNames.Register]:    '/register',
    [RouteNames.Profile]:     '/profile/:username',
    [RouteNames.EditProfile]: '/profile/',
    [RouteNames.Search]:      '/search',
    [RouteNames.Blog]:        '/blog/:id',
    [RouteNames.CreateBlog]:  '/create-blog',
    [RouteNames.EditBlog]:    '/edit-blog/:id',
    [RouteNames.LikedBlogs]:  '/liked-blogs',
    [RouteNames.Following]:   '/following',
};

const genRouteElement = (routeName: RouteNames, component: Component|DefineComponent) => {
    return {
        path: routePaths[routeName],
        name: routeName,
        component: component,
    };
};

export const getNamedRoute = (routeName: RouteNames, params: Record<string, any> = {}) => {
    return {
        name: routeName,
        params: params
    };
}

export default createRouter({
    history: createWebHistory(),
    routes: [
        genRouteElement(RouteNames.Home,        import('./pages/PageHome.vue')),
        genRouteElement(RouteNames.Login,       PagePlaceholder),
        genRouteElement(RouteNames.Register,    PagePlaceholder),
        genRouteElement(RouteNames.Profile,     PagePlaceholder),
        genRouteElement(RouteNames.EditProfile, PagePlaceholder),
        genRouteElement(RouteNames.Search,      PagePlaceholder),
        genRouteElement(RouteNames.Blog,        PagePlaceholder),
        genRouteElement(RouteNames.CreateBlog,  PagePlaceholder),
        genRouteElement(RouteNames.EditBlog,    PagePlaceholder),
        genRouteElement(RouteNames.LikedBlogs,  PagePlaceholder),
        genRouteElement(RouteNames.Following,   PagePlaceholder),
    ],
});
