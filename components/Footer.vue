<template>
  <div class="main">
    <div class="logo">
      <IconBase
        view-box="0 0 16 17.21"
        :width="'1rem'"
        :iconColor="'#FEEA00'"
      >
        <MainLogo />
      </IconBase>
    </div>
    <p class="email">
      info@ozp.community.ru</p>
    <p class="phone">
      <IconBase
        view-box="0 0 16 17.21"
        :width="'1rem'"
        :iconColor="'#D1D2D2'"
        :style="'margin-right: 0.5rem'"
      >
        <Phone />
      </IconBase>8-916-731-98-31</p>
  </div>
</template>

<script>
import IconBase from './icons/IconBase.vue'
import MainLogo from './icons/set/MainLogo'
import Phone from './icons/set/Phone'

export default {
  name: 'Footer',
  components: {
    IconBase,
    MainLogo,
    Phone
  }
}
</script>

<style lang="sass" scoped>
  .main
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    color: $white-color
    background: $black-color
    .logo
      color: $yellow-color !important
      margin-top: 2.5rem
      @include large-desktop
        margin-top: 1rem
    .email
      font-weight: 500
      margin-top: 0.75rem
      @include large-desktop
        transform: scale(0.6)
        margin-top: 0.3rem
    .phone
      display: flex
      justify-content: center
      align-items: center
      margin-top: 0.75rem
      font-weight: 500
      margin-bottom: 3.7rem
      @include large-desktop
        margin-bottom: 1rem
        transform: scale(0.6)
        margin-top: 0.3rem
</style>
