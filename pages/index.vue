<template>
  <div class="container">
    <Home />
    <Join />
    <Principles />
    <History />
    <Founder />
    <Form />
    <Projects />
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
import Form from '~/components/Form'
import Projects from '~/components/Projects'

export default {
  components: {
    Home,
    Join,
    Principles,
    History,
    Founder,
    Footer,
    Form,
    Projects
  }
}
</script>

<style>
</style>
