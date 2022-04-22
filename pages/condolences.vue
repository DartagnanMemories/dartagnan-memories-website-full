<template>
  <Article title="Condolences">
    <section
      v-for="message in condolences"
      :key="message.createdAt"
      class="py-4 border-b-2"
    >
      <h2>{{ message.from }}</h2>
      <nuxt-content :document="message" />
    </section>
  </Article>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const condolences = await $content('condolences')
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      condolences
    }
  },
  head () {
    return {
      title: 'Condolences'
    }
  }
}
</script>
