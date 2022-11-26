<template>
  <Article title="Memories">
    <ul class="link-list">
      <li>
        <nuxt-link to="/memories/stories">Stories by D'artagnan</nuxt-link>
      </li>
      <li><nuxt-link to="/memories/condolences">Condolences</nuxt-link></li>
      <li><nuxt-link to="/memories/poems">Poems</nuxt-link></li>
      <li><nuxt-link to="/memories/articles">Articles</nuxt-link></li>
      <li><nuxt-link to="/memories/anecdotes">Anecdotes</nuxt-link></li>
      <li><nuxt-link to="/memories/gallery/photos">Photos</nuxt-link></li>
      <li><nuxt-link to="/memories/gallery/videos">Videos</nuxt-link></li>
      <li>
        <nuxt-link to="/memories/childrens-corner">Children's Corner</nuxt-link>
      </li>
    </ul>
  </Article>
</template>

<script>
export default {
  head() {
    return {
      title: "Memories",
    };
  },
};
</script>
