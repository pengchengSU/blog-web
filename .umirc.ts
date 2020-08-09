import {defineConfig} from 'umi';

export default defineConfig({
  title: 'hi',
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {path: '/', title: 'Home', component: '@/pages/index'},
    {path: '/list', title: 'List', component: '@/pages/components/articleList'},
  ],

});
