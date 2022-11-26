<template>
  <Article title="articles">
    <div class="mb-4">
      <p>
        The following are online articles featuring D'artagnan and Gisele.
        Anyone who has an link that they would like to share, please email your
        articles to
        <a href="mailto:messages@DartagnanMemories.og"
          >messages@DartagnanMemories.org</a
        >
      </p>
    </div>
    <div class="mb-8">
      <h2 id="toc">Table of contents</h2>
      <nav aria-labelledby="toc">
        <ul class="link-list">
          <li v-for="(article, i) in articles" :key="article.createdAt">
            <a :href="`#${article.slug}`">{{ i + 1 }}. {{ article.title }}</a>
          </li>
        </ul>
      </nav>
    </div>
    <div
      v-for="article in articles"
      :key="article.createdAt"
      class="pt-2 pb-8 border-t-2"
    >
      <div class="flex gap-4 items-baseline">
        <h2 :id="article.slug">
          <a :href="article.url">{{ article.title }}</a>
        </h2>
        <a v-if="$route.hash == `#${article.slug}`" href="#toc"> Back to top</a>
      </div>
      <div class="mb-4">
        <p class="font-semibold">From {{ article.location }}</p>
      </div>
      <nuxt-content :document="article" />
    </div>
  </Article>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content("articles")
      .sortBy("createdAt", "asc")
      .fetch();

    return {
      articles,
    };
  },
  head() {
    return {
      title: "Articles",
    };
  },
};
</script>
