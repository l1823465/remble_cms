<template>
  <div class="topdes">
    <div class="topdes-content">
      <div class="top">
        <h2 class="h2title">
          TOP
          <span class="spans">DESTINATION</span>
        </h2>
        <p
          class="ditscript"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utllaf</p>
      </div>
      <div class="bottom">
        <div class="bottom-content">
          <div class="cont">
            <div class="div1">
              <img src="@/assets/top/1.jpg" alt />
            </div>
            <div class="div2">
              <img src="@/assets/top/2.jpg" alt />
            </div>
          </div>
          <div class="cont">
            <div class="div1">
              <img src="@/assets/top/3.jpg" alt />
            </div>
            <div class="div2">
              <img src="@/assets/top/2.jpg" alt />
            </div>
          </div>
          <div class="cont">
            <img src="@/assets/top/big-img/1.jpg" alt />
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
.topdes {
  width: 100vw;
  height: 838px;
  padding-bottom: 100px;
}
.topdes-content {
  width: 1200px;
  height: 738px;
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
  height: 620px;
}
.bottom-content {
  width: 1200px;
  height: 570px;
  margin-top: 50px;
  display: flex;
}
.cont {
  width: 400px;
  height: 570px;
  margin: 0 15px;
}
.div1{
 margin-bottom: 30px;
}
</style>