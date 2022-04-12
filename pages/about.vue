<template>
  <Article title="About D'artagnan Memories">
    <nuxt-content :document="page" />
  </Article>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const page = await $content('about/about').fetch()

    return {
      page
    }
  },
  head () {
    return {
      title: 'About'
    }
  }
}
</script>
