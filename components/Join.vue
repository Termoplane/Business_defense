<template>
  <div class="container">
    <div style="flex-grow: 1" />
    <div class="button" @click="slideIntoForm">
      <span> Вступить </span>
    </div>
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
    max-width: 100%
    height: 8.5625rem
    background-color: rgb(255,247,153)
    margin-top: 4.95rem
    @include desktop
      height: 4.5rem
    @include large-desktop
      height: 4.5rem
      margin-top: 2rem
    .button
      cursor: pointer
      color: $white-color
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      width: 13rem
      height: 2rem
      background: $black-color
      text-align: center
      @include desktop
        font-size: 0.9rem
</style>
