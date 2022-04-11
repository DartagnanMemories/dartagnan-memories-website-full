<template>
  <div>
    <div class="hero-container dream-bg">
      <div class="hero">
        <div class="half">
          <h1>
            In fond memory of <br /><strong>D’artagnan the Guide Dog</strong
            ><br />
            “What a legend!”
          </h1>
          <p>10 March 2010 — 29 March 2022</p>
        </div>
        <div class="half overhang">
          <div class="image-wrapper">
            <img
              src="~/assets/img/Mr D sitting up with bowtie looking at food table.jpeg"
              alt="D'artagnan a black guide dog with grey whiskers and a fun purple bowtie, sitting, looking at the food table!"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="content-wrapper after-overhang">
      <article class="content">
        <div class="half">
          <h2 class="sr-only">About this site</h2>
          <nuxt-content :document="page" />
        </div>
        <aside aria-labelledby="share-your-story" class="half">
          <div class="image-wrapper">
            <img
              src="~/assets/img/dartagnan on sofa with his fluffy pizza dog toy.jpg"
              alt="d'artagnan sitting on his sofa with a fluffy pizza dog toy"
            />
          </div>
          <h2 id="share-your-story">Stories about D'artagnan</h2>
          <p>
            If you have a story that you would like to share, please send it to
            us via our "contact" page.
          </p>
          <p>
            <a href="/contact">Tell us your story.</a>
          </p>
        </aside>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const page = await $content('index/about').fetch()

    return {
      page
    }
  }
}
</script>

<style lang="postcss">
.hero-container {
  @apply w-full;
}

.hero {
  @apply max-w-5xl my-0 mx-auto px-4;
  @apply flex flex-wrap items-center;
}

.hero > .half {
  @apply py-10;
  @apply w-full md:w-1/2;
}

.hero h1 {
  @apply text-3xl md:text-4xl;
}

.hero p {
  @apply text-2xl;
}

.hero h1,
.hero p {
  @apply text-center md:text-left mt-4;
}

.hero > .half.overhang {
  margin-bottom: -33%;
}

@media (min-width: 768px) {
  .hero > .half.overhang {
    margin-bottom: 0;
  }
}

.content-wrapper.after-overhang {
  margin-top: 33%;
}

@media (min-width: 768px) {
  .content-wrapper.after-overhang {
    margin-top: 0;
    @apply py-10;
  }
}

.content > .half {
  @apply w-full md:w-1/2;
}

.content > .half:first-child {
  @apply mt-4 md:mt-0 md:pr-4;
}

.content > .half:last-child {
  @apply mb-4 md:mb-0 md:pl-4; /* aside */
}
</style>
