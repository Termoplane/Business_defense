<template>
  <div class="container">
    <h1>Как формировалось <br> наше сообщество</h1>
    <div class="history-item">
      <span class="date">
        <div class="yellow-rectangle"></div>
        24 марта 2020
      </span>
      <div class="description">
        Данил Махницкий <b> создаёт петицию </b> за <br> полугодовое обнуление налогов для <br> малого и среднего бизнеса.
      </div>
      <div class="clarification">
        Петиция — призыв к государству в ситуации, <br> когда весь малый и средний бизнес остается <br> без средств к существованию из-за <br> эпидемиологической ситуации
      </div>
    </div>

    <div class="history-item">
      <span class="date">
        <div class="yellow-rectangle"></div>
        13 апреля 2020
      </span>
      <div class="description">
        <b> Запускается проект</b> «Карта бизнеса,<br> терпящего бедствие»
      </div>
      <div class="clarification">
        В этот момент петиция перевалила за 250.000 <br> подписей, после чего мы призвали <br> подписавшихся предпринимателей <br> рассказывать о своих проблемах на <br> интерактивной карте.
      </div>
    </div>

    <div class="history-item">
      <span class="date">
        <div class="yellow-rectangle"></div>
        к 20 апреля 2020
      </span>
      <div class="description">
        Общественная кампания за обнуление <br> налогов привлекает внимание общества <br> и крупнейших независимых СМИ
      </div>
      <div class="clarification">
        У петиции уже больше 350.000 подписей, а о <br> своих проблемах публично рассказало <br> больше 3.500 предпринимателей — это <br> позволило нам привлечь к проблеме <br> внимание СМИ и государства.
      </div>
    </div>

    <div class="history-item">
      <span class="date">
        <div class="yellow-rectangle"></div>
        22 мая 2020
      </span>
      <div class="description">
        Государство принимает решение об <br> обнулении налогов для малого бизнеса <br> за 2-й квартал
      </div>
      <div class="clarification">
        Малый бизнес на один квартал был <br> освобождён от всех налогов и обязательных <br> платежей, кроме НДС
      </div>
    </div>

    <div class="history-item" style="margin-bottom: 1.875rem">
      <span class="date">
        <div class="yellow-rectangle"></div>
        июнь 2020
      </span>
      <div class="description">
        По результатам кампании создается чат <br> единомышленников в Telegram и Email <br> рассылка для участников проекта
      </div>
      <div class="clarification">
        В чат вступило больше 550 человек, а на <br> рассылку подписалось 3570 <br> предпринимателей
      </div>
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
    border: 0.25rem solid $yellow-color
    border-top: 4.5rem solid $yellow-color
    border-bottom: 0.625rem solid $yellow-color
    h1
      margin-left: 1rem
      margin-top: -2.9rem
    .history-item
      margin-top: 2.5rem
      .date
        position: relative
        font-weight: 600
        font-size: 1rem
        margin-left: 1.625rem
        .yellow-rectangle
          position: absolute
          width: 8.5rem
          height: 0.625rem
          bottom: -0rem
          z-index: -1
          background: $yellow-color
      .description
        background: $grey-color
        font-weight: 400
        padding: 1rem 0
        padding-left: 1rem
        b
          font-weight: 600
      .clarification
        margin-left: 1.625rem
        margin-top: 0.5rem
        font-size: 0.9rem
</style>
