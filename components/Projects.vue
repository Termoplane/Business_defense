<template>
  <div class="main">
    <h1>
      Реализованные <br> проекты
    </h1>
    <div class="slot">
      <div class="slot-header">
        <a href="https://www.change.org/p/%D0%BF%D0%BE%D0%B4%D0%B4%D0%B5%D1%80%D0%B6%D0%B8%D1%82%D0%B5-%D0%BF%D0%BE%D0%BB%D1%83%D0%B3%D0%BE%D0%B4%D0%BE%D0%B2%D0%BE%D0%B5-%D0%BE%D0%B1%D0%BD%D1%83%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B0%D0%BB%D0%BE%D0%B3%D0%BE%D0%B2-%D0%B4%D0%BB%D1%8F-%D0%BC%D0%B0%D0%BB%D0%BE%D0%B3%D0%BE-%D0%B8-%D1%81%D1%80%D0%B5%D0%B4%D0%BD%D0%B5%D0%B3%D0%BE-%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81%D0%B0-%D0%BE%D0%B1%D0%BD%D1%83%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5%D0%BD%D0%B0%D0%BB%D0%BE%D0%B3%D0%BE%D0%B2?recruiter=1061822425&recruited_by_id=56a3b1d0-6d93-11ea-9c95-9bcaf7f5d745&utm_source=share_petition&utm_medium=copylink&utm_campaign=petition_dashboard">
          <IconBase
            class="link"
            view-box="0 0 14 14"
          >
            <Arrow />
          </IconBase>
        </a>
        <h2>
          Петиция
        </h2>
      </div>
      <div class="slot-content">
        Набрали 375.298 подписей и добились от государства обнуления большинства налогов и обязательных платежей для малого бизнеса на второй квартал 2020 года
      </div>
    </div>

    <div class="slot">
      <div class="slot-header">
        <a href="https://biz-alert.ru/">
          <IconBase
            class="link"
            view-box="0 0 14 14"
          >
            <Arrow />
          </IconBase>
        </a>
        <h2>
          Карта бизнеса, <br> терпящего бедствие
        </h2>
      </div>
      <div class="slot-content">
        Привлекли внимание российского общества к проблеме. Собрали 3.500 историй предпринимателей, оказавшихся в сложной ситуации из-за пандемии COVID-19
      </div>
    </div>
  </div>
</template>

<script>
import IconBase from './icons/IconBase.vue'
import Arrow from './icons/set/Arrow'
export default {
  name: 'Projects',
  components: {
    IconBase,
    Arrow
  }
}
</script>

<style lang="sass" scoped>
  .main
    margin-top: 3.5rem
    @include desktop
      margin: 3.5rem 6rem 0rem
    h1
      margin-left: 1rem
      letter-spacing: 0.02rem
      margin-bottom: 2rem
    .slot
      margin-bottom: 2rem
      &-header
        position: relative
        width: 100%
        background: $yellow-color
        padding: 0.5rem 0
        .link
          position: absolute
          width: 20px
          height: 20px
          top: 0.5rem
          right: 0rem
          background-color: #FFFFFF
          cursor: pointer
        h2
          margin-left: 1rem
          @include desktop
            font-size: 1.3rem
      &-content
        background: $grey-color
        padding: 0.5rem 1rem 1.5rem
        @include desktop
          font-size: 0.6rem
</style>
