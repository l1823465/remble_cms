<template>
  <div class="address">
    <div class="address-content">
      <div class="contents">
        <div class="con1">
          <div class="con1-left">
            <span></span>
          </div>
          <ul class="con1-right">
            <li>Alcatraz Island Photo Albf dhaka ,</li>
            <li>New York</li>
          </ul>
        </div>
      </div>
      <div class="contents">
         <div class="con1">
          <div class="con1-left">
            <span></span>
          </div>
          <ul class="con1-right">
            <li>www.yourmail.com</li>
            <li>www.yourmail.com</li>
          </ul>
        </div>
      </div>
      <div class="contents">
         <div class="con1">
          <div class="con1-left">
            <span></span>
          </div>
          <ul class="con1-right">
            <li>+660 256444 24857</li>
            <li>+660 256444 24857</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.address {
  width: 100vw;
  height: 128px;
}
.address-content {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
}
.contents {
  width: 400px;
  height: 100%;
  margin: 0 15px;
  background: #f1f1f1;
}
.con1 {
  width: 100%;
  height: 48px;
  padding: 40px 0;
}
.con1-left {
  width: 32px;
  height: 32px;
  border: 1px solid #ccc;
  margin-left: 40px;
  margin-right: 15px;
  display: inline-block;
}
.con1-right {
  display: inline-block;
}
.con1-right>li{
  color: #444444;
  font-size: 16px;
  line-height: 24px;
}
</style>