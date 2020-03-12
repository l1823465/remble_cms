<template>
  <div class="choose">
    <div class="content">
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
          <div class="bot-con">
            <div class="bot-icon"></div>
            <h4>Diverse Destination</h4>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut laborelorem</span>
          </div>
          <div class="bot-con">
            <div class="bot-icon"></div>
            <h4>Value of Money</h4>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut laborelorem</span>
          </div>
          <div class="bot-con">
            <div class="bot-icon"></div>
            <h4>Passionate Travel</h4>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut laborelorem</span>
          </div>
          <div class="bot-con">
            <div class="bot-icon"></div>
            <h4>Beautiful Places</h4>
            <span><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut laborelorem</p></span>
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
.choose {
  height: 588px;
  padding: 100px 0;
  text-align: center;
}
.content {
 min-width: 1000px;
  height: 388px;
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
  height: 270px;
  margin-top: 50px;
}
.bottom-content {
  width: 100%;
  height: 100%;
  display: flex;
}
.bot-con {
  width: 270px;
  height: 220px;
  margin: 0 15px;
}
.bot-icon {
  width: 90px;
  height: 90px;
  background: #f1f1f1;
  margin: 0 90px;
  border-radius: 50%;
  margin-bottom: 15px;
}
.bot-con > h4 {
  font-size: 18px;
  margin-bottom: 20px;
  text-transform: capitalize;
  font-weight: 400;
}
.bot-con > span {
  width: 270px;
  height: 72px;
  display: inline-block;
  font-size: 13px;
  line-height: 26px;
}
</style>