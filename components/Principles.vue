<template>
  <div class="container">
    <h1 class="main-header">Наши принципы</h1>
    <div class="principle">
      <h2>
        <div class="yellow-rectangle"></div>
        Политическая <br> независимость
      </h2>
      <p> Позволяет нам откровенно говорить <br> о существующих проблемах. </p>
    </div>
    <div class="principle">
      <h2>
        <div class="yellow-rectangle"></div>
        Финансовая <br> независимость
      </h2>
      <p> Позволяет заниматься тем, <br> что мы считаем по-настоящему важным.  </p>
    </div>
    <div class="principle">
      <h2>
        <div class="yellow-rectangle"></div>
        Интересы <br> малого бизнеса <br> на первом месте
      </h2>
      <p> Малый бизнес — основа развития <br> отечественной экономики,<br> а не топливо для амбиций государства </p>
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
    .main-header
      margin-left: 1rem
    .principle
      position: relative
      h2
        position: relative
        margin-top: 2rem
        margin-left: 1rem
        @include large-desktop
          font-size: 1.3rem
      p
        margin-top: 0.5rem
        margin-left: 1rem
        @include large-desktop
          font-size: 0.6rem
      .yellow-rectangle
        position: absolute
        width: 14rem
        height: 0.95rem
        background: $yellow-color
        z-index: -1
        bottom: -0.25rem
        left: -1rem
        @include large-desktop
          width: 30rem
          left: -16rem
</style>
