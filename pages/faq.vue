<template>
  <Article title="Frequenly Asked Questions">
    <div
      v-for="faq in faqs"
      :key="faq.createdAt"
      class="pt-2 pb-8 border-t-2"
    >
      <div class="flex gap-4 items-baseline">
        <h2 :id="faq.slug">
          {{ faq.title }}
        </h2>
      </div>
      <nuxt-content :document="faq" />
    </div>
  </Article>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const faqs = await $content('faqs')
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      faqs
    }
  },
  head () {
    return {
      title: 'Frequenly Asked Questions'
    }
  }
}
</script>
