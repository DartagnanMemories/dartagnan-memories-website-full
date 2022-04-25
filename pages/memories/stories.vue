<template>
  <Article title="Stories by D'artagnan">
    <div class="mb-8">
      <h2>Table of contents</h2>
      <nav aria-labelledby="table-of-contents">
        <ul>
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
      <h2 :id="story.slug">{{ story.title }}</h2>
      <nuxt-content :document="story" />
    </div>
  </Article>
</template>

<script>
export default {
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
