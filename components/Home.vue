<template>
  <div class="home">
    <client-only>
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
      <div class="main-header">
        <h1> Общество <br> защиты <br> предпринимателей </h1>
      </div>
      <div class="yellow-rectangle" />
      <client-only>
        <swiper class="swiper" :options="swiperOption">
          <div slot="pagination" class="swiper-pagination swiper-pagination-bullets" />
          <div slot="button-prev" class="swiper-button-prev" />
          <div slot="button-next" class="swiper-button-next" />
          <swiper-slide>
            <div class="slide slide-1">
              <h1 class="slide-int">
                1
              </h1>
              <h1 class="slide-header">
                Информируем
              </h1>
              <p class="slide-paragraph">
                Рассказываем о самых <br> выжных новостях для <br> предпринимателей
              </p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="slide slide-2">
              <h1 class="slide-int">
                2
              </h1>
              <h1 class="slide-header">
                Проводим <br> общественные <br> кампании
              </h1>
              <p class="slide-paragraph">
                Привлекаем внимание <br> общества и СМИ <br> к проблемам малого бизнеса
              </p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="slide slide-3">
              <h1 class="slide-int" style="right: 0.4rem">
                3
              </h1>
              <h1 class="slide-header">
                Вырабатываем <br> решения
              </h1>
              <p class="slide-paragraph">
                Участвуем в обсуждении <br> решений, которые должны <br> помочь малому бизнесу <br> развиваться
              </p>
            </div>
          </swiper-slide>
        </swiper>
      </client-only>
      <div class="data-container">
        <div class="slide slide-1">
          <h1 class="slide-int">
            1
          </h1>
          <h1 class="slide-header">
            Информируем
          </h1>
          <p class="slide-paragraph">
            Рассказываем о самых <br> выжных новостях для <br> предпринимателей
          </p>
        </div>
        <div class="slide slide-2">
          <h1 class="slide-int">
            2
          </h1>
          <h1 class="slide-header">
            Проводим <br> общественные <br> кампании
          </h1>
          <p class="slide-paragraph">
            Привлекаем внимание <br> общества и СМИ <br> к проблемам малого бизнеса
          </p>
        </div>
        <div class="slide slide-3">
          <h1 class="slide-int" style="right: 0.4rem">
            3
          </h1>
          <h1 class="slide-header">
            Вырабатываем <br> решения
          </h1>
          <p class="slide-paragraph">
            Участвуем в обсуждении <br> решений, которые должны <br> помочь малому бизнесу <br> развиваться
          </p>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
import IconBase from './icons/IconBase.vue'
import MainLogo from './icons/set/MainLogo'
import LogoFill from './icons/set/LogoFill'
import 'swiper/css/swiper.css'

export default {
  name: 'Home',
  components: {
    MainLogo,
    IconBase,
    LogoFill
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      width: false
    }
  }
}
</script>

<style lang="sass" scoped>
  .swiper
    /deep/ .swiper-pagination-bullet-active
      background-color: #828282
    /deep/ .swiper-pagination-bullets-dynamic
      left: 10%
    /deep/ .swiper-pagination-bullets
      top: 10px
    /deep/ .swiper-container-horizontal
      .swiper-pagination-bullets
        top: 10px !important
    .swiper-button-next, .swiper-button-prev
      color: #828282
    .slide
      width: 100%
      height: 16.5rem
      margin: auto
      background-size: 100%
      background-repeat: no-repeat
      .slide-int
        position: absolute
        right: 0.4rem
        font-size: 4rem
      .slide-header
        margin-top: 2.875rem
        margin-left: 1rem
      .slide-paragraph
        margin-left: 1rem
        margin-top: 0.5rem
        font-size: 1.125rem
    .slide-1
      background-image: url('../assets/images/bg-1.svg')
      position: relative
      bottom: 0
    .slide-2
      background-image: url('../assets/images/bg-2.svg')
      position: relative
      bottom: 0
    .slide-3
      background-image: url('../assets/images/bg-3.svg')
      position: relative
      bottom: 0
  .home
    .logo
      position: absolute
      top: 2rem
      right: 1rem
    .main-header
      position: relative
      left: 1rem
      top: 3.0625rem
      max-width: 0
    .yellow-rectangle
      position: absolute
      z-index: -1
      width: 10rem
      height: 1rem
      top: 5.1875rem
      left: 0rem
      background-color: $yellow-color
    .swiper
      display: none
      @include mobile
        display: block
      position: relative
      top: 5rem
    .data-container
      margin-top: 5rem
      display: flex
      flex-direction: row
      justify-content: space-around
      max-width: 100%
      @include mobile
        display: none
      .slide
        width: 288px
        height: 16.5rem
        background-size: 100%
        background-repeat: no-repeat
        .slide-header
          font-size: 1rem
        .slide-paragraph
          font-size: 0.6rem
</style>
