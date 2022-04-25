<template>
  <div>
    <div class="banner-wrapper dream-bg" :class="{ 'has-image': !!imgSrc }">
      <div class="banner">
        <h1>{{ title }}</h1>
        <div v-if="imgSrc" class="overlap">
          <img
            :src="imgSrc"
            :alt="imgAlt"
            loading="lazy"
          />
        </div>
      </div>
    </div>
    <div class="content-wrapper">
      <div class="content">
        <slot><p>Coming soon.</p></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: 'Title'
    },
    imgSrc: {
      type: String,
      required: false,
      default: ''
    },
    imgAlt: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>

<style lang="postcss">
.banner {
  @apply max-w-5xl mx-auto my-0 px-4 py-10;
  @apply text-white;
  @apply text-center md:text-left;
  @apply grid gap-16 md:grid-flow-col md:items-center;
}

.banner h1 {
  @apply font-bold text-3xl md:text-4xl;
}

.has-image .banner .overlap {
  @apply h-24 md:h-36 overflow-visible flex justify-center xl:justify-end;
}

.has-image .banner img {
  @apply rounded-xl overflow-hidden shadow-md h-48 md:h-56 lg:h-64;
}

.has-image ~ .content-wrapper {
  @apply mt-20 md:mt-16;
}
</style>
