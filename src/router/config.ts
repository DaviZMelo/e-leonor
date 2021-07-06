const routes = [
  {
    path: ['/', '/home'],
    exact: true,
    component: 'Home',
  },
  {
    path: ['/mural'],
    exact: true,
    component: 'Mural',
  },
  {
    path: ['/mural/post/:slug'],
    exact: true,
    component: 'Post',
  },
];

export default routes;
