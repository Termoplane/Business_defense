<template>
  <div class="home">
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
              Информирование
            </h1>
            <p class="slide-paragraph">
              Рассказываем о самых <br> важных новостях для <br> предпринимателей
            </p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slide slide-2">
            <h1 class="slide-int">
              2
            </h1>
            <h1 class="slide-header">
              Проведение <br> общественных <br> кампаний
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
              Выработка <br> решений
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
          Рассказываем о самых важных новостях для предпринимателей
        </p>
      </div>
      <div class="slide slide-2">
        <h1 class="slide-int">
          2
        </h1>
        <h1 class="slide-header">
          Проводим общественные кампании
        </h1>
        <p class="slide-paragraph">
          Привлекаем внимание общества и СМИ к проблемам малого бизнеса
        </p>
      </div>
      <div class="slide slide-3">
        <h1 class="slide-int" style="right: 0.4rem">
          3
        </h1>
        <h1 class="slide-header">
          Вырабатываем решения
        </h1>
        <p class="slide-paragraph">
          Участвуем в обсуждении решений, которые должны помочь малому бизнесу развиваться
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import 'swiper/css/swiper.css'

export default {
  name: 'Home',
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
      @include mobile
        display: none
    .slide
      width: 100%
      height: 13.5rem
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
      background-position: left bottom
    .slide-2
      background-image: url('../assets/images/bg-2.svg')
      background-position: left bottom
    .slide-3
      background-image: url('../assets/images/bg-3.svg')
      background-position: left bottom
  .home
    @include large-desktop
      margin: 0 3rem
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
      display: block
      @include large-desktop
        display: none
      position: relative
      top: 5rem
    .data-container
      margin-top: 5rem
      display: none
      @include large-desktop
        display: flex
        flex-direction: row
        justify-content: space-around
        max-width: 100%
      .slide
        width: 288px
        background-size: 100%
        background-repeat: no-repeat
        .slide-header
          font-size: 1rem
          margin-bottom: 0.3rem
        .slide-paragraph
          font-size: 0.6rem
</style>
