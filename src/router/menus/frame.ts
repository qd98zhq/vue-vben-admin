import { NormMenuItem } from '@/router/type';

export const orderNo = 100;
export default {
  name: '外部页面(会缓存)',
  path: '/frame',
  icon: 'home|svg',
  children: [
    {
      name: 'antVue文档(内嵌)',
      path: '/antv',
    },
    {
      name: '百度(内嵌)',
      path: '/baidu',
    },
    {
      name: '百度(外链)',
      path: '/baiduExternal',
    },
  ],
} as NormMenuItem;
