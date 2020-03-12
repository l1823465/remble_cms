<template>
  <div class="welcome">
    <div class="wel-img">
      <img src="@/assets/others/1.jpg" alt />
    </div>
    <div class="content">
      <h2 class="h2title">
        WELCOME TO
        <span class="spans">RAMBLE</span>
      </h2>
      <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporincidid ut labore et dolore magna aliqua. Utjij enim ad minim veniam, quis nostrud exercitatio ullamco laboris nisi utjjij aliquip ex ea commodo consequat.ed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
      <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.ed do eiusmod tempor incididuenimdunt.</span>
   <span>Fipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempoed doeiumod tempoquis</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.welcome {
  background: #f1f1f1;
  height: 584px;
  display: flex;
}
.wel-img{
    width: 45%;
}
.wel-img > img {
  height: 584px;
}
.content {
  width: 55%;
  height: 584px;
  padding: 100px 30px;
  background:#f1f1f1;
}
.h2title {
  color: #252525;
  margin-bottom: 19px;
  text-transform: uppercase;
  font-weight: 500;
}
.spans {
  color: #ffb300;
}
.content>span{
  width: 600px;
  display: inline-block;
    color: #444444;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 30px;
}
</style>