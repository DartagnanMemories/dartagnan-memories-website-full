<template>
  <Article title="Poems">
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
