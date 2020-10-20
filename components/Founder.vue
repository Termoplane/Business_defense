<template>
  <div class="container">
    <div class="header">
      <div class="quotes">
        <IconBase
          view-box="0 0 26 18"
          :width="'1.625rem'"
        >
          <Quotes />
        </IconBase>
      </div>
      <h2>Данил</h2>
      <h1>Махницкий</h1>
      <p class="founder">
        Создатель сообщества
      </p>
    </div>
    <div class="body">
      <img src="../assets/images/photo.png" class="photo">
      <p class="body-paragraph">
        Мой отец уже много лет занимается сельским хозяйством в Нижегородской области. Помогая ему с финансовыми и операционными вопросами, я вижу, сколько смелости и самоотверженности нужно, чтобы развивать своё дело в России.
      </p>
      <p class="body-paragraph">
        2020 год оказался для нас временем вызовов. Не только из-за пандемии и соответствующих ограничительных мер, но и из-за изменения структуры экономики и потребления. Адаптироваться к новой реальности нужно ещё быстрее, а сложностей всё больше.
      </p>
      <p class="body-paragraph" style="margin-bottom: 4rem">
        Весной я провёл успешную общественную кампанию в поддержку полугодового обнуления налогов для малого и среднего бизнеса. Этот опыт наглядно показал нам всем, какое большое значение имеет объединение предпринимателей вокруг общих целей и задач.
      </p>
    </div>
    <div class="white-body">
      <p> Уверен, что наученный горьким опытом ожидания помощи от государства, малый бизнес готов объединяться и вместе отстаивать свои права. Для этого мы и создаём Общество защиты предпринимателей. <br> Присоединяйтесь к нашей команде! </p>
    </div>
  </div>
</template>

<script>
import IconBase from './icons/IconBase.vue'
import Quotes from './icons/set/Quotes'

export default {
  name: 'Founder',
  components: {
    IconBase,
    Quotes
  }
}
</script>

<style lang="sass" scoped>
  .container
    .header
      text-align: center
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      .quotes
        text-align: center
        margin-top: 3.5rem
        margin-bottom: 0.5rem
      .founder
        font-size: 0.75rem
        margin-top: 0.2rem
    .body
      color: $white-color
      border-top: 0.25rem solid $yellow-color
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      margin-top: 3.375rem
      background: $black-color
      .photo
        margin-top: -2.8rem
        background-image: url("../assets/images/photo.png")
        border-radius: 50%
        border: 2px solid #FFFFFF
        @include desktop
          width: 3.5rem
          margin-top: -2rem
        @include large-desktop
          margin-top: -2rem
          width: 3.5rem
      .body-paragraph
        margin: 2rem 1rem
        font-size: 0.75rem
        font-weight: 500
        @include large-desktop
          font-size: 0.5rem
          margin: 1rem 5.8rem
        @include desktop
          margin: 1.5rem 5rem
          font-size: 0.8rem
    .white-body
      margin: 2rem 1rem
      color: $black-color
      @include large-desktop
        margin: 2.5rem 5.8rem
      p
        font-weight: 400
        font-size: 0.875rem
        @include large-desktop
          font-size: 0.66rem
        @include desktop
          margin: 1.5rem 5rem
          font-size: 0.9rem
</style>
