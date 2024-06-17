import type { AppRouteRecordRaw, AppRouteModule } from '@/router/types';

import { PAGE_NOT_FOUND_ROUTE, REDIRECT_ROUTE } from '@/router/routes/basic';

import { mainOutRoutes } from './mainOut';
import { PageEnum } from '@/enums/pageEnum';
import { t } from '@/hooks/web/useI18n';

// import.meta.glob() 直接引入所有的模块 Vite 独有的功能
const modules = import.meta.glob('./modules/product/**/*.ts', { eager: true });
const modules2 = import.meta.glob('./modules/demo/**/*.ts', { eager: true });
const routeModuleList: AppRouteModule[] = [];
const routeModuleList2: AppRouteModule[] = [];
console.log('modules2:', modules2);

// 加入到路由集合中，自定义路由页面
Object.keys(modules).forEach((key) => {
  const mod = (modules as Recordable)[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});
// 加入到路由集合中,项目内置路由页面
Object.keys(modules2).forEach((key) => {
  const mod = (modules2 as Recordable)[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList2.push(...modList);
});
//这里只加载自己定的路由，符合自身业务的页面对应的路由
export const asyncRoutes = [PAGE_NOT_FOUND_ROUTE, ...routeModuleList, ...routeModuleList2];

// 根路由
export const RootRoute: AppRouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: PageEnum.BASE_HOME,
  meta: {
    title: 'Root',
  },
};

export const LoginRoute: AppRouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('@/views/sys/login/Login.vue'),
  meta: {
    title: t('routes.basic.login'),
  },
};

// Basic routing without permission
// 未经许可的基本路由
export const basicRoutes = [
  LoginRoute,
  RootRoute,
  ...mainOutRoutes,
  REDIRECT_ROUTE,
  PAGE_NOT_FOUND_ROUTE,
];
