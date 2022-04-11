<template>
  <div>
    <div class="banner-wrapper dream-bg">
      <div class="banner">
        <h1>{{ title }}</h1>
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
    }
  }
}
</script>

<style lang="postcss">
.banner {
  @apply max-w-5xl mx-auto my-0 px-4 pb-10 pt-16;
  @apply flex flex-wrap items-center;
  @apply text-white;
  @apply text-center md:text-left;
}

.banner h1 {
  @apply font-bold text-3xl md:text-4xl;
}
</style>
