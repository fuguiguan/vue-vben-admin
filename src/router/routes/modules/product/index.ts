import type { AppRouteModule } from '@/router/types';

import { getParentLayout, LAYOUT } from '@/router/constant';
import { t } from '@/hooks/web/useI18n';

const charts: AppRouteModule = {
  path: '/products',
  name: 'Product',
  component: LAYOUT,
  redirect: '/products/list',
  meta: {
    orderNo: 200,
    icon: 'ion:bar-chart-outline',
    title: t('routes.product.product.product'),
  },
  children: [
    {
      path: 'list',
      name: 'List',
      meta: {
        title: t('routes.product.product.list'),
      },
      component: () => import('@/views/product/index.vue'),
    },
    {
      path: 'aMap',
      name: 'AMap',
      meta: {
        title: t('routes.product.product.add'),
      },
      component: () => import('@/views/demo/charts/map/Gaode.vue'),
    },
    {
      path: 'googleMap',
      name: 'GoogleMap',
      meta: {
        title: t('routes.product.product.category'),
      },
      component: () => import('@/views/demo/charts/map/Google.vue'),
    },
  ],
};

export default charts;
