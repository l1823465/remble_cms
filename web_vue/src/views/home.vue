<template>
  <div class="home">
      <Top />
      <router-view/>
        <Bottom />
  </div>
</template>

<script>
import Top from '@/components/top.vue'
import Bottom from '@/components/bottom.vue'

export default {
    components:{
        Top,
        Bottom
    }
}
</script>

<style>
.home {
  min-width: 1200px;
  height: 100%;
}
</style>