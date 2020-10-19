<template>
  <div class="container">
    <div style="flex-grow: 1"></div>
    <div class="button">
      <span> Вступить </span>
    </div>
    <p class="paragraph"> Начнем с заполнения заявки </p>
    <div style="flex-grow: 0.6"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='sass' scoped>
  .container
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    width: 100%
    height: 8.5625rem
    background-color: $yellow-color
    margin-top: 3rem
    @include large-desktop
      margin-top: -4rem
    @include desktop
      margin-top: -4rem
    .button
      cursor: pointer
      color: $white-color
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      width: 18rem
      height: 3rem
      margin: auto
      background: $black-color
      text-align: center
    .paragraph
      font-size: 0.625rem
      margin-top: 0.1rem
</style>
