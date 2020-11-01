<template>
  <div class="container">
    <h1 class="main-header">
      Наши принципы
    </h1>
    <div class="principle-container">
      <div class="wrapper">
        <img src="../assets/images/pi.png" class="image">
        <div class="principle">
          <div style="flex-grow: 1" />
          <h2>
            <div class="yellow-rectangle" />
            Политическая независимость
          </h2>
          <p> Позволяет нам откровенно говорить о существующих проблемах </p>
        </div>
      </div>
      <div class="wrapper">
        <img src="../assets/images/fi.png" class="image" style="width: 4rem !important; margin-right: 0.3rem">
        <div class="principle">
          <div style="flex-grow: 1" />
          <h2>
            <div class="yellow-rectangle" />
            Финансовая независимость
          </h2>
          <p> Позволяет заниматься тем,что мы считаем по-настоящему важным  </p>
        </div>
      </div>
      <div class="wrapper">
        <img src="../assets/images/inter.png" class="image">
        <div class="principle">
          <div style="flex-grow: 1" />
          <h2>
            <div class="yellow-rectangle" />
            Интересы малого бизнеса на первом месте
          </h2>
          <p> Малый бизнес — основа развития отечественной экономики, а не топливо для амбиций государства </p>
        </div>
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
      margin: 3.5rem 0.5rem
    @include desktop
      margin: 3.5rem 0.5rem
    .main-header
      margin-left: 1rem
      margin-bottom: 2rem
    .principle-container
      @include desktop
        display: flex
        justify-content: center
        flex-wrap: wrap
        align-items: flex-start
        gap: 1rem
      .wrapper
        display: flex
        align-items: center
        justify-content: space-between
        @include desktop
          display: flex
          justify-content: center
          align-items: flex-start
        .image
          width: 2.5rem
          @include mobile
            order: 2
            margin-right: 1rem
          @include desktop
            width: 2.5rem
            margin-top: 0.5rem
        .principle
          position: relative
          width: 15rem
          @include desktop
            display: flex
            justify-content: center
            flex-direction: column
            margin: 0rem 0.5rem
            width: 9rem
          h2
            align-self: end
            position: relative
            margin-top: 2rem
            margin-left: 1rem
            @include desktop
              height: 3.4rem
              margin: 0
              font-size: 1rem
              display: flex
              align-items: flex-end
          p
            margin-top: 0.5rem
            margin-left: 1rem
            @include desktop
              margin: 0.5rem 0.2rem
              font-size: 0.55rem
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
              height: 0.8rem
              width: 100%
              left: 0rem
              bottom: -0.4rem
</style>
