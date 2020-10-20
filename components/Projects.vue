<template>
  <div class="main">
    <h1>
      Реализованные <br> проекты
    </h1>
    <div class="slot">
      <div class="slot-header">
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
export default {
  name: 'Projects'
}
</script>

<style lang="sass" scoped>
  .main
    margin-top: 3.5rem
    @include large-desktop
      margin: 3.5rem 6rem 0rem
    h1
      margin-left: 1rem
      letter-spacing: 0.02rem
      margin-bottom: 2rem
    .slot
      margin-bottom: 2rem
      &-header
        width: 100%
        background: $yellow-color
        padding: 0.5rem 0
        h2
          margin-left: 1rem
          @include large-desktop
            font-size: 1.3rem
      &-content
        background: $grey-color
        padding: 0.5rem 1rem 1.5rem
        @include large-desktop
          font-size: 0.6rem
</style>
