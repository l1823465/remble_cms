<template>
  <div :class="isShow ?'top':'toptwo'" >
    <Header @changeIsShow="changeIsShow"/>
    <Search v-show="isShow" />
    <Swipers v-show="isShow" />
    <ImageBg v-show="!isShow" />
  </div>
</template>

<script>
import Header from "@/components/header.vue";
import Swipers from "@/components/swipers.vue";
import ImageBg from "@/components/imageBg.vue";
import Search from "@/components/search.vue";
export default {
  data() {
    return {
      isShow:sessionStorage.getItem("nowNav") === "first" ||sessionStorage.getItem("nowNav") === null? true: false
    };
  },
  methods:{
changeIsShow(flag){
this.isShow=flag
}
  },
  components: {
    Header,
    Swipers,
    Search,
    ImageBg
  }
};
</script>

<style>
  .top{
    min-width: 1200px;
    height: 650px;
    overflow: hidden;
  }
  .toptwo{
     min-width: 1200px;
    height: 500px;
  }
</style>