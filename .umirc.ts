import {defineConfig} from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  mock: false,
  proxy: {
    '/api': {
      'target': 'http://localhost:8080',
      'changeOrigin': true,
      'pathRewrite': { '^/api' : '' },
    },
  },
  routes: [
    {path: '/', component: '@/layouts/index',
    routes:[
      {path: '/', title: 'Home', component: '@/pages/index'},
      {path: '/list', title: 'List', component: '@/pages/components/ArticleList'},
      {path: '/detail', title: 'Detail', component: '@/pages/containers/Detail'},
    ]
    },
  ],

});
