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
      <p> Ассоциация существует только на деньги <br> её членов. Это позволяет нам заниматься <br> по настоящему важными вущами. </p>
    </div>
    <div class="principle">
      <h2>
        <div class="yellow-rectangle"></div>
        Интересы <br> малого бизнеса <br> на первом месте
      </h2>
      <p> Нам нужно научиться защищать свои <br> права. Малый бизнес — основа <br>  большинства развитых экономик, а не <br> топливо для государств. </p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='sass' scoped>
  .container
    margin-top: 3.5rem
    .main-header
      margin-left: 1rem
    .principle
      position: relative
      h2
        position: relative
        margin-top: 2rem
        margin-left: 1rem
      p
        margin-top: 0.5rem
        margin-left: 1rem
      .yellow-rectangle
        position: absolute
        width: 14rem
        height: 0.95rem
        background: $yellow-color
        z-index: -1
        bottom: -0.25rem
        left: -1rem
</style>
