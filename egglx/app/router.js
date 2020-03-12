'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  //注册
  router.post('/api/registry',controller.web.user.registry)
  //登录
  router.post('/api/login',controller.web.user.login)

  router.get('/api/travelList',controller.web.travel.list)
  router.post('/api/travelSub',controller.web.travel.submit)

  router.get('/api/productList',controller.web.product.list)
  router.post('/api/productSerach',controller.web.product.search)
  router.post('/api/productDetail',controller.web.product.detail)

// router.get('/api/blogList',controller.web.blog.list)
// router.post('/api/blogSearch',controller.web.blog.search)


// crm
  router.post('/crm/login',controller.crm.user.login)
  router.get('/crm/homemenu', controller.crm.home.menu);
router.get('/crm/purpose',controller.crm.purpose.list)
};
