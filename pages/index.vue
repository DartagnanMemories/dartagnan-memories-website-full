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
        <div>
          <h2 class="sr-only">About this site</h2>
          <nuxt-content :document="page" />
        </div>
        <aside aria-labelledby="share-your-story" class="mt-8">
          <div class="image-wrapper w-full sm:w-64 md:w-80">
            <img
              src="~/assets/img/dartagnan on sofa with his fluffy pizza dog toy.jpg"
              alt="d'artagnan sitting on his sofa with a fluffy pizza dog toy"
            />
          </div>
          <h2 id="share-your-story">If you have a story about D'artagnan</h2>
          <p>
            D’artagnan was loved by many. Anyone who has a recollection about D’artagnan that they would like to share, please email your anecdotes, messages, photos, or any questions to <a href="mailto:messages@DartagnanMemories.og">messages@DartagnanMemories.org</a>.
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
  },
  head () {
    return {
      title: 'Home'
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

</style>
