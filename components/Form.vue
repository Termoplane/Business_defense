<template>
  <div id="form" class="container">
    <h2>
      Вступить
    </h2>
    <p>
      *Нужно заполнить все поля
    </p>
    <div class="grid">
      <div class="field">
        <label for="name"> Имя <div style="flex-grow: 1" /> <div ref="name" class="danger error-box"> Вы забыли заполнить </div></label>
        <input
          id="name"
          v-model="name"
          required
          type="text"
          class="field__input"
          placeholder="Как к вам обращаться?"
        >
      </div>

      <div class="field">
        <label for="name"> Ваш Email <div style="flex-grow: 1" /> <div ref="email" class="danger error-box"> Вы забыли заполнить </div></label>
        <input
          id="name"
          v-model="email"
          required
          type="email"
          class="field__input"
          placeholder="test@test.ru"
        >
      </div>

      <div class="field">
        <label for="name"> Контактный номер <div style="flex-grow: 1" /> <div ref="phone" class="danger error-box"> Вы забыли заполнить </div></label>
        <input
          id="name"
          v-model="phone"
          required
          type="phone"
          class="field__input"
          placeholder="+7 777 777-77-77"
        >
      </div>

      <div class="field">
        <label for="name"> Регион работы <div style="flex-grow: 1" /> <div ref="city" class="danger error-box"> Вы забыли заполнить </div></label>
        <input
          id="name"
          v-model="city"
          required
          type="text"
          class="field__input"
          placeholder="Москва, Санкт-Петербург..."
        >
      </div>

      <div class="field">
        <label for="name"> Цели вступления в Общество <div style="flex-grow: 1" /> <div ref="aim" class="danger error-box" /></label>
        <textarea
          id="name"
          v-model="aim"
          required
          style="height: 6rem"
          class="field__input"
          placeholder="Расскажите, зачем вы вступаете в Общество защиты предпринимателей?"
        />
      </div>

      <div class="field">
        <label for="name"> Расскажите подробнее о своём деле <div style="flex-grow: 1" /> <div ref="business" class="danger error-box"> Вы забыли заполнить </div></label>
        <textarea id="name" v-model="about_business" required class="field__input" placeholder="Название вашей компании, сфера деятельности и проч." />
      </div>

      <div class="checkbox" @click="checked = !checked">
        <div class="checkbox__inner">
          <div class="checker">
            <div v-if="checked">
              <IconBase
                view-box="0 0 50 50"
                :width="'1rem'"
                :style="'margin: 0'"
              >
                <Checkmark />
              </IconBase>
            </div>
          </div>
          <div class="text" :style="{ color: checked ? '#FEEA00' : '' }">
            Я являюсь собственником бизнеса
          </div>
        </div>
      </div>
    </div>

    <div class="submit">
      <div class="submit__button" @click="submit">
        Отправить заявку
      </div>
    </div>
  </div>
</template>

<script>
import IconBase from './icons/IconBase.vue'
import Checkmark from './icons/set/Checkmark'
import 'swiper/css/swiper.css'
import 'element-ui/packages/theme-chalk/src/index.scss'

export default {
  name: 'Form',
  components: {
    Checkmark,
    IconBase
  },
  data () {
    return {
      name: '',
      email: '',
      phone: '',
      city: '',
      aim: '',
      about_business: '',
      checked: false,
      form: {}
    }
  },
  methods: {
    submit () {
      const re = /\S+@\S+\.\S+/ // regexp for email validation if browser doesn't support input email validation
      const email = this.email
      if (!this.name || !this.email || !this.phone || !this.city || !this.aim || !this.about_business) {
        this.$message({
          message: 'Пожалуйста, заполните все необходимые поля формы.',
          type: 'error'
        })
      }
      if (!this.name) {
        this.$refs.name.style = 'display: block'
        this.$refs.name.textContent = 'Вы забыли заполнить'
      }
      if (!this.email) {
        this.$refs.email.style = 'display: block'
        this.$refs.email.textContent = 'Вы забыли заполнить'
      }
      if (!this.phone) {
        this.$refs.phone.style = 'display: block'
        this.$refs.phone.textContent = 'Вы забыли заполнить'
      }
      if (!this.city) {
        this.$refs.city.style = 'display: block'
        this.$refs.city.textContent = 'Вы забыли заполнить'
      }
      if (!this.aim) {
        this.$refs.aim.style = 'display: block'
        this.$refs.aim.textContent = 'Вы забыли заполнить'
      }
      if (!this.about_business) {
        this.$refs.business.style = 'display: block'
        this.$refs.business.textContent = 'Вы забыли заполнить'
      }

      if (this.name) {
        this.$refs.name.style = 'display: none'
        this.$refs.name.textContent = 'Вы забыли заполнить'
      }
      if (this.email) {
        this.$refs.email.style = 'display: none'
        this.$refs.email.textContent = 'Вы забыли заполнить'
      }
      if (this.phone) {
        this.$refs.phone.style = 'display: none'
        this.$refs.phone.textContent = 'Вы забыли заполнить'
      }
      if (this.city) {
        this.$refs.city.style = 'display: none'
        this.$refs.city.textContent = 'Вы забыли заполнить'
      }
      if (this.aim) {
        this.$refs.aim.style = 'display: none'
        this.$refs.aim.textContent = 'Вы забыли заполнить'
      }
      if (this.about_business) {
        this.$refs.business.style = 'display: none'
        this.$refs.business.textContent = 'Вы забыли заполнить'
      }

      if (!re.test(email)) {
        this.$refs.email.style = 'display: block'
        this.$refs.email.textContent = 'Кажется, тут ошибка'
      }

      if (this.email && this.name && this.phone && this.city && this.aim && this.about_business) {
        this.form = {
          name: this.name,
          email: this.email,
          phone: this.phone,
          city: this.city,
          aim: this.aim,
          about_business: this.about_business,
          checked: this.checked
        }
        this.$fireStore.collection('business_def_join').add({ ...this.form })

        this.$message({
          message: 'Вы успешно отправили заявку! Мы скоро свяжемся с вами.',
          type: 'success'
        })

        this.name = ''
        this.email = ''
        this.phone = ''
        this.city = ''
        this.aim = ''
        this.about_business = ''
        this.checked = false
      }
    }
  }
}
</script>

<style lang="sass" scoped>
  .container
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    color: $white-color
    background: $black-color
    h2
      margin-top: 3rem
      letter-spacing: 0.07rem
    p
      margin-top: 0.5rem
      font-size: 0.625rem
    .submit
      height: 5rem
      width: 100%
      background: $black-color
      display: flex
      justify-content: center
      align-items: center
      &__button
        font-weight: 600
        cursor: pointer
        margin: 2rem
        text-align: center
        background: $yellow-color
        color: $black-color
        padding: 1rem 4rem
        letter-spacing: 0.01rem
        @include desktop
          transform: scale(0.6)
          padding: 1rem 6rem
    .grid
      @include desktop
        display: grid
        grid-template-columns: 1fr 1fr
        justify-items: center
        width: 75%
      .checkbox
        cursor: pointer
        margin-top: 2.3125rem
        margin-bottom: 3.375rem
        width: 90%
        display: flex
        justify-content: center
        align-items: center
        @include desktop
          grid-column: 1 / 3
        @include large-desktop
          width: 80%
          margin-top: 1rem
        &__inner
          width: 90%
          height: 2.375rem
          display: flex
          align-items: center
          border: 1px solid #828282
          text-align: center
          .checker
            display: flex
            justify-content: center
            align-items: center
            align-self: start
            height: 100%
            border: 1px solid $yellow-color
            width: 2.375rem
          .text
            margin: 0 auto
            font-size: 0.875rem
            @include desktop
              font-size: 0.7rem
      .field
        margin-top: 2.3125rem
        display: flex
        justify-content: center
        align-items: center
        flex-direction: column
        width: 90%
        @include desktop
          width: 80%
          margin-top: 1rem
        label
          display: flex
          width: 83%
          margin-bottom: 0.25rem
          align-self: start
          margin-left: 1.7rem
          font-size: 0.625rem
          letter-spacing: 0.03rem
          @include desktop
              font-size: 0.4rem
              margin-left: 1rem
          .danger
            color: $red-color
            font-size: 0.625rem
            letter-spacing: 0.03rem
            @include desktop
              font-size: 0.4rem
          .error-box
            display: none
        &__input
          padding: 0.625rem 0 0.625rem 0.625rem
          background: $black-color
          border: 1px solid #828282
          width: 90%
          max-width: 90%
          color: $yellow-color
          outline: none
          @include desktop
              font-size: 0.4rem
          &::focus
            background: $black-color
          ::placeholder
            font-size: 0.875rem
            color: #828282
            @include desktop
              font-size: 0.29rem
</style>
