<template>
  <div class="container">
    <Home />
    <Join />
    <Principles />
    <History />
    <Founder />
    <Footer />
  </div>
</template>

<script>
import Home from '~/components/Home'
import Join from '~/components/Join'
import Principles from '~/components/Principles'
import History from '~/components/History'
import Founder from '~/components/Founder'
import Footer from '~/components/Footer'

export default {
  components: {
    Home,
    Join,
    Principles,
    History,
    Founder,
    Footer
  }
}
</script>

<style>
</style>
