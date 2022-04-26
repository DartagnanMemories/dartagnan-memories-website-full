<template>
  <Article title="Frequenly Asked Questions">
    <div class="mb-4">
      <p>Every day, people ask me questions about D’artagnan or about guide dogs in general. Below are responses to some of the questions I get most frequently asked. I hope this website will be educational. So please email messages@DartagnanMemories.org if you have other questions to add to this page.</p>
    </div>
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
