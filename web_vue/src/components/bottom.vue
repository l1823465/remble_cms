<template>
  <div class="footer">
    <div class="mask">
      <div class="left">
        <img src="../assets/ramble.png" alt />
        <p>Lorem存有悲坐阿梅德，consectetur adipiscing ejlis，你应该工作专家组和活力，痛苦，但在一些重要的事情要做eiusmod。多年来来，quisgt nostrud锻炼，学区工作。</p>
        <div class="icon">cion</div>
      </div>
      <div class="center">
        <h2>最新推文</h2>
        <div class="c-tw" v-for="(v,i) in Tweet" :key="i">
          <p>{{v.text}}</p>
          <a :href="v.url">{{v.url}}</a>
        </div>
      </div>
      <div class="right">
        <h2>标签</h2>
        <div class="r-lable">
          <span v-for="(v,i) in lable" :key="i" >{{v}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Tweet:[{text:'LOREM是一个非常聪明的ectetur ADIP isicing率，但这样很聪明hgtfed',url:'https://meili.com'},
      {text:'LOREM是一个非常聪明的ectetur ADIP isicing率，但这样很聪明hgtfed',url:'https://meili.com'}]
      ,lable:['冒险','出行','国别','冒险','蜜月旅行','岛','冒险','出行','国别']
    };
  }
};
</script>

<style scoped lang="scss">
.footer {
  width: 100%;
  height: 430px;
  overflow: hidden;
  background-image: url("../assets/4.jpg");
  background-size: auto;
  color: #fff;
  .mask {
    height: 100%;
    padding: 70px 86px;
    opacity: .8;
    background-color:#000;
    display: flex;font-size: 15px;
    > div {
      width: 371px;
      height: 290px;
    }
    .left {
      > p {
        margin: 50px 0;
        
      }
    }
    .center {
      margin: 0 30px;
      .c-tw{
        margin-top: 43px;
        line-height: 21px;
      }
    }
    .right{
      .r-lable{
        // display: flex;
        padding-top: 43px;
        span{
          display: inline-block;text-align: center;border: 1px solid #fff;
          width: 110px;height: 40px;line-height: 40px;border-radius: 20px;
          margin-bottom: 20px;margin-right: 11px;
        }
        span:hover{
          background: #ffb330;
        }
      }
    }
  }
}
</style>