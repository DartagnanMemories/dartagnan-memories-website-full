<template>
  <div class="wrapper">
    <VueAnnouncer />
    <a class="skip-to-content-link" href="#main"> Skip to content </a>
    <TheHeader />
    <main id="main">
      <Nuxt />
    </main>
    <TheFooter />
  </div>
</template>

<style lang="postcss">
.skip-to-content-link {
  @apply bg-dpurple text-white;
  height: 30px;
  left: 50%;
  padding: 8px;
  position: absolute;
  transform: translateY(-100%);
  transition: transform 0.3s;
}

.skip-to-content-link:focus {
  transform: translateY(0%);
}

.skip-link {
  /* Same as  before */
  transition: transform 0.3s;
}
</style>
