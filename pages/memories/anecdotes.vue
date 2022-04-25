<template>
  <Article title="Anecdotes">
    <div class="mb-4">
      <p>The following anecdotes are a mixed bag of recollections that capture the many facets of D’artagnan.  Anyone who has a recollection about D’artagnan that they would like to  share, please email your anecdotes to <a href="mailto:messages@DartagnanMemories.og">messages@DartagnanMemories.org</a></p>
    </div>
    <div class="mb-8">
      <h2 id="toc">
        Table of contents
      </h2>
      <nav aria-labelledby="toc">
        <ul class="link-list">
          <li
            v-for="(anecdote, i) in anecdotes"
            :key="anecdote.createdAt"
          >
            <a :href="`#${anecdote.slug}`">{{ i+1 }}. {{ anecdote.title }}</a>
          </li>
        </ul>
      </nav>
    </div>
    <div
      v-for="anecdote in anecdotes"
      :key="anecdote.createdAt"
      class="pt-2 pb-8 border-t-2"
    >
      <div class="flex gap-4 items-baseline">
        <h2 :id="anecdote.slug">
          {{ anecdote.title }}
        </h2>
        <a v-if="$route.hash == `#${anecdote.slug}`" href="#toc"> Back to top</a>
      </div>
      <div class="mb-4">
        <p class="font-semibold">From {{ anecdote.author }}</p>
      </div>
      <nuxt-content :document="anecdote" />
    </div>
  </Article>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const anecdotes = await $content('anecdotes')
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      anecdotes
    }
  },
  head () {
    return {
      title: 'Anecdotes'
    }
  }
}
</script>
