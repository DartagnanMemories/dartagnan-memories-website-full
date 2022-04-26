<template>
  <Article title="Poems">
    <div class="mb-4">
      <p>Poetry is a wonderful medium to express our feelings. This page has been created  for your poetic homages to D’artagnan. You may draw your inspiration from your own heart or from the memories published on this website, or a photo.</p>
    </div>
    <div
      v-for="poem in poems"
      :key="poem.createdAt"
      class="pt-2 pb-8 border-t-2"
    >
      <div class="flex gap-4 items-baseline">
        <h2 :id="poem.slug">
          {{ poem.title }}
        </h2>
        <a v-if="$route.hash == `#${poem.slug}`" href="#toc"> Back to top</a>
      </div>
      <div class="mb-4">
        <p class="font-semibold">From {{ poem.author }}</p>
        <p class="italic">{{ poem.description }}</p>
      </div>
      <nuxt-content :document="poem" />
    </div>
  </Article>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const poems = await $content('poems')
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      poems
    }
  },
  head () {
    return {
      title: 'Poems'
    }
  }
}
</script>
