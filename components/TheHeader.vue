<template>
  <div ref="header" class="container">
    <div class="logo" style="z-index: 100">
      <IconBase
        view-box="0 0 16 17.21"
        :width="'1rem'"
        :icon-color="'#171D1C'"
      >
        <MainLogo />
      </IconBase>
    </div>
    <div class="logo">
      <IconBase
        view-box="0 0 16 17.21"
        :width="'1rem'"
      >
        <LogoFill />
      </IconBase>
    </div>
    <a ref="telegram" class="telegram" href="https://t.me/ozp_community" target="_blank">
      <div ref="telegram-icon" class="telegram__icon">
        <IconBase
          view-box="0 0 24 24"
          :width="'1rem'"
          :height="'1rem'"
          style="margin-right: 0px"
        >
          <Telegram />
        </IconBase>
      </div>
      <div ref="telegram-text" class="telegram__text">
        Наш телеграм канал
      </div>
    </a>
  </div>
</template>

<script>
import IconBase from './icons/IconBase.vue'
import Telegram from './icons/set/Telegram'
import MainLogo from './icons/set/MainLogo'
import LogoFill from './icons/set/LogoFill'

export default {
  components: {
    IconBase,
    Telegram,
    MainLogo,
    LogoFill
  },
  mounted () {
    window.addEventListener('scroll', this.scrollOpacity)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.scrollOpacity)
  },
  methods: {
    scrollOpacity () {
      const currentScrollPosition = window.pageYOffset
      if (currentScrollPosition > 200) {
        this.$refs.header.style.opacity = 0.8
        this.$refs['telegram-text'].textContent = ''
        this.$refs.telegram.style['border-radius'] = '50%'
        this.$refs['telegram-icon'].style['margin-right'] = '0.1rem'
      } else {
        this.$refs.header.style.opacity = 1
        this.$refs['telegram-text'].textContent = 'Наш телеграм канал'
        this.$refs.telegram.style['border-radius'] = '1rem'
        this.$refs['telegram-icon'].style['margin-right'] = '0.3rem'
      }
    }
  }
}
</script>

<style lang="sass" scoped>
  .container
    position: fixed
    margin-bottom: 0.3rem
    width: 100%
    height: 3rem
    z-index: 1000
    transition: opacity 800ms, background-color 400ms, color 400ms
    .logo
      position: absolute
      top: 1rem
      left: 1rem
    .telegram
      background-color: $yellow-color
      display: flex
      justify-content: center
      align-items: center
      position: absolute
      top: 0.7rem
      right: 1rem
      text-decoration: none
      color: $black-color
      padding: 0.5rem
      border-radius: 1rem
      transition: width 800ms
      &__icon
        margin-right: 0.3rem
        width: 1rem
        height: 1rem
      &__text
        font-size: 0.5rem
      &:hover
        color: $yellow-color
        background-color: $black-color
        content: "Наш телеграм канал"
</style>
