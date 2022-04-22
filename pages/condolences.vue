<template>
  <Article title="Condolences">
    <article>
      <section
        v-for="message in condolences"
        :key="message.createdAt"
        class="py-4 border-b-2"
      >
        <h2>From {{ message.from }}</h2>
        <nuxt-content :document="message" />
      </section>
    </article>
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
