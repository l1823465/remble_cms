<template>
  <div class="bg">
    <div class="content">
      <div class="contents">
        <div class="con">
          <div class="icon"></div>
          <div class="number">94604</div>
          <div class="dec">CUSTOMERS</div>
        </div>
        <div class="con">
          <div class="icon"></div>
          <div class="number">1019</div>
          <div class="dec">CUSTOMERS</div>
        </div>
        <div class="con">
          <div class="icon"></div>
          <div class="number">25465</div>
          <div class="dec">CUSTOMERS</div>
        </div>
        <div class="con">
          <div class="icon"></div>
          <div class="number">15</div>
          <div class="dec">CUSTOMERS</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bg {
  height: 232px;
  width: 100vw;
  padding: 65px 0;
  background:rgba(0, 0, 0, .8)
}
.content {
  height: 102px;
  width: 1200px;
  margin: 0 auto;
}
.contents {
  margin: 0 15px;
  justify-content: space-between;
  display: flex;
}
.con {
  width: 107px;
  height: 102px;
  text-align: center;
}
.icon {
  width: 107px;
  height: 34px;
}
.number {
  height: 40px;
  width: 107px;
  color: #ffb300;
  display: inline-block;
  font-size: 30px;
  font-weight: 700;
}
.dec {
  font-size: 18px;
  font-weight: 600;
  margin-top: 4px;
  color: #fff;
  height: 20px;
}
</style>