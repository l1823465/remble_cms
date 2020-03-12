<template>
  <div class="service">
    <div class="content">
      <div class="top">
        <h2 class="h2title">
          OUR
          <span class="spans">SERVICES</span>
        </h2>
        <p
          class="ditscript"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utllaf</p>
      </div>
      <div class="bottom">
        <div class="bottom-content">
          <div class="bot-left">
            <ul>
              <li></li>
              <li>
                <h4>Online Booking Services</h4>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed dliluptatem sequi nesciunt. Neque porro quisquam est</span>
              </li>
            </ul>
             <ul>
              <li></li>
              <li>
                <h4>Online Booking Services</h4>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed dliluptatem sequi nesciunt. Neque porro quisquam est</span>
              </li>
            </ul>
             <ul>
              <li></li>
              <li>
                <h4>Online Booking Services</h4>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed dliluptatem sequi nesciunt. Neque porro quisquam est</span>
              </li>
            </ul>
             <ul>
              <li></li>
              <li>
                <h4>Online Booking Services</h4>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed dliluptatem sequi nesciunt. Neque porro quisquam est</span>
              </li>
            </ul>
             <ul>
              <li></li>
              <li>
                <h4>Online Booking Services</h4>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed dliluptatem sequi nesciunt. Neque porro quisquam est</span>
              </li>
            </ul>
          </div>
          <div class="bot-right">
            <img src="@/assets/others/1.png" alt="">
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
.service {
  height: 930px;
  width: 100vw;
  padding: 100px 0;
}
.content {
  width: 1200px;
  height: 730px;
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
  height: 661px;
}
.bottom-content {
  width: 1200px;
  height: 561px;
  display: flex;
}
.bot-left {
  width: 600px;
  height: 561px;
  margin: 0 15px;
}
.bot-left > ul {
  margin-top: 46px;
  width: 100%;
  height: 76px;
  display: flex;
}
.bot-left > ul > li:nth-child(1) {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: #f1f1f1;
  text-align: center;
  line-height: 70px;
  margin-right: 30px;
}
.bot-left > ul > li:nth-child(2) {
  width: 470px;
  height: 100%;
}
.bot-left > ul > li:nth-child(2) > h4 {
      color: #252525;
    font-size: 18px;
    margin-bottom: 9px;
    text-transform: capitalize;
    font-weight: 400;
}
.bot-left > ul > li:nth-child(2) > span {
  display: inline-block;
      color: #444444;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
}
.bot-right {
  width: 600px;
  height: 390px;
  margin: 0 15px;
}
.bot-right>img{
  width: 100%;
  height: 100%;
}
</style>