<template>
  <div class="container">
    <h1 class="main-header">
      Наши принципы
    </h1>
    <div class="principle-container">
      <div class="principle">
        <div style="flex-grow: 1" />
        <h2>
          <div class="yellow-rectangle" />
          Политическая <br> независимость
        </h2>
        <p> Позволяет нам откровенно говорить <br> о существующих проблемах </p>
      </div>
      <div class="principle">
        <div style="flex-grow: 1" />
        <h2>
          <div class="yellow-rectangle" />
          Финансовая <br> независимость
        </h2>
        <p> Позволяет заниматься тем, <br> что мы считаем<br>по-настоящему важным  </p>
      </div>
      <div class="principle">
        <div style="flex-grow: 1" />
        <h2>
          <div class="yellow-rectangle" />
          Интересы <br> малого бизнеса <br> на первом месте
        </h2>
        <p> Малый бизнес — основа развития <br> отечественной экономики,<br> а не топливо для амбиций государства </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Principles'
}
</script>

<style lang='sass' scoped>
  .container
    margin-top: 3.5rem
    @include large-desktop
      margin: 3.5rem 3rem
    @include desktop
      margin: 3.5rem 1rem
    .main-header
      margin-left: 1rem
      margin-bottom: 2rem
    .principle-container
      @include desktop
        display: flex
        justify-content: center
        flex-wrap: wrap
      .principle
        position: relative
        @include desktop
          max-width: 40%
          display: flex
          justify-content: center
          flex-direction: column
          margin: 0rem 0.5rem
        h2
          align-self: end
          position: relative
          margin-top: 2rem
          margin-left: 1rem
          @include desktop
            margin: 0
            align-self: center
            font-size: 1.3rem
        p
          margin-top: 0.5rem
          margin-left: 1rem
          @include desktop
            margin: 0.5rem 0.2rem
            font-size: 0.6rem
            height: 3rem
            max-width: 90%
        .yellow-rectangle
          position: absolute
          width: 14rem
          height: 0.95rem
          background: $yellow-color
          z-index: -1
          bottom: -0.25rem
          left: -1rem
          @include desktop
            width: 100%
            left: 0rem
            bottom: -0.4rem
</style>
