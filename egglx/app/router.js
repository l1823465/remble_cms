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

router.get('/api/blogList',controller.web.blog.list)
router.post('/api/blogSearch',controller.web.blog.search)


// crm
  router.post('/crm/login',controller.crm.user.login)
  router.get('/crm/homemenu', controller.crm.home.menu);
router.get('/crm/purpose',controller.crm.purpose.list)
router.get('/crm/userlist',controller.crm.user.list)
router.post('/crm/userblack',controller.crm.user.black)
router.get('/crm/stafflist',controller.crm.staff.list)
router.post('/crm/staffadd',controller.crm.staff.add)
router.put('/crm/staffupdate',controller.crm.staff.leave)
router.post('/crm/staffdetail',controller.crm.staff.detail)
router.get('/crm/rolelist',controller.crm.role.list)
router.get('/crm/rolemenu',controller.crm.role.menu)
router.post('/crm/rolesubmit',controller.crm.role.submit)

};
