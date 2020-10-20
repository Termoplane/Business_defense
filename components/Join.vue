<template>
  <div class="container">
    <div style="flex-grow: 1" />
    <div class="button" @click="slideIntoForm">
      <span> Вступить </span>
    </div>
    <p class="paragraph">
      Начнем с заполнения заявки
    </p>
    <div style="flex-grow: 0.6" />
  </div>
</template>

<script>
export default {
  name: 'Join',
  methods: {
    slideIntoForm () {
      setTimeout(() => {
        document.getElementById('form').scrollIntoView({
          block: 'start',
          behavior: 'smooth'
        })
      }, 0)
    }
  }
}
</script>

<style lang='sass' scoped>
  .container
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    @include large-desktop
      justify-content: flex-start
      align-items: start
    width: 100%
    height: 8.5625rem
    background-color: $yellow-color
    margin-top: 6rem
    @include large-desktop
      margin-top: -6rem
      height: 4.5rem
    .button
      cursor: pointer
      color: $white-color
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      width: 18rem
      height: 3rem
      background: $black-color
      text-align: center
      @include large-desktop
        margin: 0 5rem
        height: 1rem
        width: 6rem
        span
          font-size: 0.33rem
    .paragraph
      font-size: 0.625rem
      margin-top: 0.1rem
      @include large-desktop
        font-size: 0.2rem
        margin: 0 6.5rem
</style>
