<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="@/assets/4.jpg" alt />
      </div>
      <div class="swiper-slide">
        <img src="@/assets/4.jpg" alt />
      </div>
      <div class="swiper-slide">
        <img src="@/assets/4.jpg" alt />
      </div>
    </div>
  </div>
</template>

<script>
import "swiper/css/swiper.min.css";
import Swiper from "swiper";
export default {
  mounted() {
    new Swiper(".swiper-container", {
      autoplay: true //可选选项，自动滑动
    });
  }
};
</script>

<style scoped>
.swiper-container {
  
  height: 616px;
  /* background: url("../../assets/swiper2/1.jpg") no-repeat; */
}
</style>