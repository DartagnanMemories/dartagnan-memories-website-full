<template>
  <header class="header">
    <nuxt-link to="/">D'artagnan Memories</nuxt-link>
    <nav aria-label="primary">
      <ul>
        <li><nuxt-link to="/about">About</nuxt-link></li>
        <li><nuxt-link to="/memories">Memories</nuxt-link></li>
        <li><nuxt-link to="/faq">FAQ</nuxt-link></li>
        <li><nuxt-link to="/contact">Contact</nuxt-link></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="postcss">
.header {
  @apply max-w-5xl my-0 mx-auto px-4;
  @apply py-4 flex flex-wrap justify-between;
}

.header nav ul {
  @apply flex flex-row flex-wrap justify-between gap-x-6 gap-y-2 my-2;
}

.header a {
  @apply no-underline;
  @apply font-semibold;
  @apply text-base my-2;
}
</style>
