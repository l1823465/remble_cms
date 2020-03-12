<template>
  <div class="latest-post">
    <div class="content">
      <div class="top">
        <h2 class="h2title">
          LATEST
          <span class="spans">POST</span>
        </h2>
        <p
          class="ditscript"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utllaf</p>
      </div>
      <div class="bottom">
        <div class="bottom-content">
          <div class="con">
            <img src="@/assets/blog/blog-img/1.jpg" alt="">
          </div>
        </div>
        <div class="bottom-content">
           <div class="con">
            <img src="@/assets/blog/blog-img/2.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.latest-post {
  width: 100vw;
  height: 678px;
  padding: 100px 0;
}
.content {
  width: 1200px;
  height: 478px;
  margin: 0 auto;
}
.top {
  width: 100%;
  height: 118px;
  text-align: center;
  background: url("../../assets/shape/1.png") no-repeat bottom center;
}
.h2title {
  color: #252525;
  margin-bottom: 19px;
  text-transform: uppercase;
  font-weight: 600;
}
.spans {
  color: #ffb300;
}
.dirscript {
  color: #444444;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
}
.bottom {
  width: 1200px;
  height: 358px;
  margin-left: -15px;
  margin-right: -15px;
  padding-top: 50px;
  display: flex;
}
.bottom-content{
  width:50%;
  height:100%;
  padding:0 15px;
}
.con{
  width: 100%;
  height: 100%;
}
</style>