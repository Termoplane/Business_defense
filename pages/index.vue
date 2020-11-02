<template>
  <div class="container">
    <client-only>
      <vue-read-progress height="4px" color="#171D1C" />
    </client-only>
    <TheHeader />
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
import TheHeader from '~/components/TheHeader'

export default {
  name: 'Index',
  components: {
    Home,
    Join,
    Principles,
    History,
    Founder,
    Footer,
    Form,
    Projects,
    TheHeader
  },
  head () {
    return {
      meta: [
        {
          property: 'og:image',
          content: '//ozp.community/images/preview.jpg',
          vmid: 'og:image',
          hid: 'og:image'
        }
      ]
    }
  }
}
</script>

<style>
</style>
