<template>
  <div class="header">
    <div class="logo">
      <img src="../assets/ramble.png" alt />
    </div>
    <div class="center">
      <div class="c-top">
        <div class="c-top-left">
          <p class="c-pl">
            <span class="c-ori">联系电话：</span>0088-234-675-827
          </p>
          <p>
            <span class="c-ori">营业时间：</span>周一-周六8.00-18.00.周日休息
          </p>
        </div>
        <div class="c-top-right">
          <li v-show="!isLogin" @click="register('login')">登录</li>
          <li v-show="!isLogin" @click="register('re')">注册</li>
          <li v-show="isLogin">欢迎回来！{{getCookie('user')}}</li>
          <li v-show="isLogin" @click="loginOut">退出</li>
        </div>
      </div>
      <div class="c-bot">
        <div class="nav">
          <router-link
                active-class="nav_active"
                :to="item.path"
                v-for="item in nav"
                :key="item.key"
                tag='li'
                @click.native="navClick(item.key)"          
          >{{item.name}}</router-link>
        </div>
      </div>
    </div>
    <div class="right"></div>
    <!-- 弹层 -->
    <el-dialog :title="reShow ?'注册':'登录'" :visible.sync="dialogVisible" width="30%">
      <div>
        <el-input placeholder="请输入账号" prefix-icon="el-icon-user" v-model="user"></el-input>
        <el-input placeholder="请输入密码" prefix-icon="el-icon-sugar" v-model="pwd"></el-input>
        <el-input
          v-show="reShow"
          placeholder="请输入邮箱"
          prefix-icon="el-icon-user"
          v-model="email"
          type="email"
        ></el-input>
        <el-input
          v-show="reShow"
          placeholder="请输入年龄"
          prefix-icon="el-icon-sugar"
          v-model="age"
          type="number"
        ></el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="loginIn">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: "",
      pwd: "",
      email: "",
      age: '',
      reShow: false,
      url:'',
      isLogin: false,
      dialogVisible: false,
      resShow: false,
      nav:[
        {
          name:'首页',
          path:'/home/main',
          key:'first'
        },
        {
          name:'关于我们',
          path:'/home/ours',
          key:'ours'
        },
         {
          name:'服务',
          path:'/home/serve',
          key:'serve'
        },
        {
          name:'产品',
          path:'/home/product',
          key:'product' 
        },
        {
          name:'画册',
          path:'/home/pic',
          key:'pic' 
        },
        {
          name:'游记',
          path:'/home/book',
          key:'book' 
        },
        {
          name:'联系我们',
          path:'/home/contcat',
          key:'contcat' 
        }
      ]
    };
  },
  mounted(){
    this.isLogin=this.getCookie("user") === null ? false : true;
  },
  methods: {
    register(type) {
      this.dialogVisible = true;
      this.reShow = type === "login" ? false : true;
      this.url=type==='login'? "/api/login":"/api/registry" ;
    },
    loginIn(){
        const {user,pwd,email,age,reShow,$regType,$isNull,dataJson}=this
        let isObj=[dataJson('用户名',user,'user'),dataJson('密码',pwd,'pwd')]
      if(reShow){
        isObj=[...isObj,dataJson('邮箱',email,'email'),dataJson('年龄',age,'age')]
      }
      // $isNull(isObj,()=>$regType(isObj,this.requestFunc))
      this.requestFunc()
   },
    async requestFunc(){
      const {user,pwd,email,age,reShow,url,$message,$md5,setCookie,$httpSuccess}=this
      let subData={user,pwd:$md5(pwd),emil:email,age}
      $httpSuccess(['post',url,subData],(data,msg)=>{
        if(!reShow){
          setCookie('user',user)
          this.isLogin=true
        }
        this.dialogVisible = false;
        $message.success(msg)
      })
 },
    loginOut(){
      let {$httpSuccess}=this
        this.clearCookie();
$httpSuccess(['get','/login/out'],()=>{
  alert('退出成功')
   this.isLogin=false
})
       
    },
    navClick(key){
      sessionStorage.setItem('nowNav',key);
      let res=key==='first'?true : false;
      this.$emit('changeIsShow',res)
    }
  }
};
</script>

<style scoped lang="scss">
.header {
  min-width: 1200px;
  z-index: 999;
  height: 120px;
  position: absolute;
  left: 0;
  top: 0;
  color: #fff;
  display: flex;
  .logo {
    flex: 1.5;
    img {
      padding: 40px 30px 0 35px;
    }
  }
  .center {
    font-size: 12px;
    flex: 7;
    .c-top {
      height: 60px;
      line-height: 60px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #909090;
      .c-top-left {
        display: flex;
        .c-pl {
          padding-right: 60px;
        }
        .c-ori {
          color: #ffb330;
          padding-right: 25px;
        }
      }
      .c-top-right {
        display: flex;
      }
    }
    .c-bot {
      height: 60px;
      line-height: 60px;
      .nav {
        height: 100%;
        display: flex;
        padding-left: 100px;
        > li {
          padding: 0 20px;
          font-size: 14px;
        }
      }
    }
  }
  .right {
    flex: 1.5;
  }
}
.nav_active{
  color: orange;
}
</style>