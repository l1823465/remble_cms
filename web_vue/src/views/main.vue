<template>
  <div class="main">
      <Choose />
      <Welcome />
      <Service />
      <Bg />
      <Special />
      <Six />
      <Topdes />
      <Swipera /> 
      <Latest />
      <Right />
      <Address />
  </div>
</template>

<script>
import Choose from '@/components/main/Choose'
import Welcome from '@/components/main/welcome'
import Service from '@/components/main/service'
import Bg from '@/components/main/Bg'
import Special from '@/components/main/special'
import Six from '@/components/main/Six'
import Topdes from '@/components/main/topdes'
import Swipera from '@/components/main/swipera'
import Latest from '@/components/main/latest'
import Right from '@/components/main/right'
import Address from '@/components/main/address'

export default {
    components:{
        Choose,Welcome,
        Service,Bg,
        Special,Six,
        Topdes,Swipera,
        Latest,Right,
        Address
    }
}
</script>

<style>

</style>