// 模块路径
const ROUTER = {
  root: '/',
  resume: '/resume',
  template: '/template'
};
export default ROUTER;

export const ROUTER_KEY = {
  root: 'root',
  resume: 'resume',
  template: 'template'
};

// 入口模块
export const ROUTER_ENTRY = [
  {
    url: 'https://github.com/PDKSophia/visResumeMook',
    key: 'intro',
    text: '介绍',
  },
  {
    url: ROUTER.resume,
    key: ROUTER_KEY.resume,
    text: '简历',
  },
  {
    url: ROUTER.template,
    key: ROUTER_KEY.template,
    text: '模板',
  },
  {
    url: 'https://github.com/PDKSophia/visResumeMook',
    key: 'code',
    text: '源码',
  },
];
