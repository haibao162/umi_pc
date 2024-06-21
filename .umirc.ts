import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: ' ',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: ' CRUD 示例',
      path: '/home',
      component: './Home',
      layout: false
    },
  ],
  npmClient: 'npm',
});

