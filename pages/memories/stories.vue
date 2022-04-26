<template>
  <Article title="Stories by D'artagnan">
    <div class="mb-4">
      <p>During his time living at our retirement village, D’artagnan has his own column in the village monthly newsletter, “The Grapevine”. In these musings, he wrote about his life and his views on the issues of the day. The column was popular with village residents, his “good readers”, who would often stop us when we were on our block walk and would comment on his latest story. Here is a collection of these musings we now share with the good readers of his tribute website.</p>
    </div>
    <div class="mb-8">
      <h2 id="toc">
        Table of contents
      </h2>
      <nav aria-labelledby="toc">
        <ul class="link-list">
          <li
            v-for="(story, i) in stories"
            :key="story.createdAt"
          >
            <a :href="`#${story.slug}`">{{ i+1 }}. {{ story.title }}</a>
          </li>
        </ul>
      </nav>
    </div>
    <div
      v-for="story in stories"
      :key="story.createdAt"
      class="pt-2 pb-8 border-t-2"
    >
      <div class="flex gap-4 items-baseline">
        <h2 :id="story.slug">
          {{ story.title }}
        </h2>
        <a v-if="$route.hash == `#${story.slug}`" href="#toc"> Back to top</a>
      </div>
      <div class="mb-4">
        <p class="font-semibold">{{ story.createdAt | niceDate }}</p>
      </div>
      <nuxt-content :document="story" />
    </div>
  </Article>
</template>

<script>
export default {
  filters: {
    niceDate (value) {
      const date = new Date(value)
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

      return date.toLocaleString('en-AU', options)
    }
  },
  async asyncData ({ $content }) {
    const stories = await $content('stories')
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      stories
    }
  },
  head () {
    return {
      title: 'Stories'
    }
  }
}
</script>
