<template>
  <Article title="Children's Corner">
    <div class="mb-4">
      <p>D’artagnan loved children, and children loved him. This corner of the website is for children to share their tributes to D’artagnan: paintings, drawings, poems, stories or imaginings.</p>
      <p>If it’s a painting or drawing, please describe it in words so that people who are blind can picture in their mind what you have painted or drawn.</p>
      <p>Please include first name and age. If you wish, you can also include suburb or country.</p>
      <p>Thank you</p>
      <p>Gisele</p>
    </div>
    <div class="mb-4">
      <h2>Paintings and drawings</h2>
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
    const photos = await $content('childrens')
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      photos
    }
  },
  head () {
    return {
      title: 'Children\'s Corner'
    }
  }
}
</script>
