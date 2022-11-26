<template>
  <Article title="Videos">
    <div class="mb-4">
      <p>
        To maximise the accessibility of audio-visual (AV) content on this
        website, we will use the Youtube platform as it includes in-built
        accessibility features. As videos and other AV files are too large to
        send via email, please share these files via Dropbox or other file
        transfer links.
      </p>
    </div>
    <div
      class="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:gap-x-8"
    >
      <div v-for="video in videos" :key="video.slug">
        <iframe
          :src="video.youtubeUrl"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
        <h3 class="my-4 text-base font-semibold">
          {{ video.title }}
        </h3>
      </div>
    </div>
  </Article>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const videos = await $content("gallery/videos")
      .sortBy("createdAt", "asc")
      .fetch();

    return {
      videos,
    };
  },
  head() {
    return {
      title: "Videos",
    };
  },
};
</script>
