<template>
  <div class="special">
    <div class="content">
      <div class="top">
        <h2 class="h2title">
          SPECIAL
          <span class="spans">PACKAGES</span>
        </h2>
        <p
          class="ditscript"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utllaf</p>
      </div>
      <div class="bottom">
        <div class="con" v-for="(v,i) in [1,2,3,4,5,6]" :key="i">
          <div class="img">
            <img :src="require('@/assets/special/'+v+'.jpg')"/>
          </div>
          <div class="lit-div">
            <div class="lit-con">
              <p>Offer Available</p>
              <p>$300</p>
            </div>
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
.special {
  width: 100vw;
  height: 1150px;
  padding: 100px 0;
}
.content {
  width: 1200px;
  height: 950px;
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
  height: 832px;
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;

}
.con {
  width: 400px;
  height: 411px;
  width: 33.33%;
  padding: 0 15px;
  position: relative;
  margin-top: 50px;
}
.img {
  width: 370px;
  height: 300px;
}
.img > img {
  width: 100%;
  height: 100%;
}
.lit-div {
  width: 308px;
  height: 69px;
  background: #fff;
  position: absolute;
  margin:0 31px;
  bottom:70px;

}
.lit-con {
  display: flex;
  justify-content: center;
  padding: 30px 0 15px;
  text-align: center;
  height: 100%;
}
.lit-con > p:nth-child(1) {
  font-size: 18px;
}
.lit-con > p:nth-child(2) {
  font-size: 24px;
  font-weight: 600;
  margin-left: 17px;
}
</style>