<template>
  <div class="right">
    <div class="right-content">
      <li v-for="(v,i) in [1,2,3,4,5]" :key="i">
        <img :src="require('@/assets/brand/'+v+'.png')" alt />
      </li>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.right {
  width: 100vw;
  height: 256px;
  padding-bottom: 100px;
}
.right-content {
  width: 1200px;
  height: 156px;
  padding: 65px 15px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}
.right-content > li {
  width: 144px;
  height: 28px;
}
</style>