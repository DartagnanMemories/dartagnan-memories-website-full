<template>
  <Article title="Photos">
    <div class="mb-4">
      <p>I am blind, but I am aware of the powers of photos in capturing memories and telling a story. In this photo gallery we will post photos that show D’artagnan at various stages of his life and in different scenarios. During a computer upgrade in 2019, I lost many photos and other mementos of D’artagnan’s life, so I am reaching out to each of you to please search through photo files and send any photo you may have of D’artagnan. Please add a text description of any photo you send. Larene from Intopia who has been working hard to create this website is taking pains to ensure that we make the photo gallery as accessible as possible. We will try and add a narrative for the photos as we continue to recreate D’artagnan’s life on this tribute website.</p>
    </div>
    <div class="mb-4">
      <h2>D'artagnan and friends</h2>
      <div class="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:gap-x-8">
        <div v-for="photo in photos" :key="photo.slug">
          <div class="w-full h-96 rounded-lg overflow-hidden group-hover:opacity-75 sm:h-auto sm:aspect-w-2 sm:aspect-h-3">
            <img :src="require(`/assets/gallery/photos/${photo.img}`)" :alt="photo.title" class="w-full h-full object-center object-cover" />
          </div>
          <h3 class="my-4 text-base font-semibold">
            {{ photo.title }}
          </h3>
        </div>
      </div>
    </div>
  </Article>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const photos = await $content('gallery/photos')
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      photos
    }
  },
  head () {
    return {
      title: 'Photos'
    }
  }
}
</script>
