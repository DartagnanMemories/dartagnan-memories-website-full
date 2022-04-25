<template>
  <Article title="Condolences" :img-src="require('/assets/img/White Waratah Condolences card from Guide Dogs.jpg')" img-alt="White Waratah Condolences card from Guide Dogs">
    <div class="mb-4">
      <p>Aside from email messages, I've received many phone calls and also home visits.</p>
      <p>Thank you also to the 70 friends who attended D’artagnan’s party  and the many absentees who sent greetings.</p>
      <p>D’artagnan and I are blessed to have each of you in our life here on Earth and beyond.</p>
      <p>If you would like to add your condolences to this page, please email <a href="mailto:messages@DartagnanMemories.og">messages@DartagnanMemories.org</a></p>
    </div>
    <div class="mb-8">
      <h2 id="toc">Sender List</h2>
      <nav aria-labelledby="toc">
        <ul class="link-list">
          <li
            v-for="(message, i) in condolences"
            :key="message.createdAt"
          >
            <a :href="`#${message.slug}`">{{ i+1 }}. {{ message.from }}</a>
          </li>
        </ul>
      </nav>
    </div>
    <div
      v-for="message in condolences"
      :key="message.createdAt"
      class="pt-2 pb-8 border-t-2"
    >
      <div class="flex gap-4 items-baseline">
        <h2 :id="message.slug">
          {{ message.from }}
        </h2>
        <a v-if="$route.hash == `#${message.slug}`" href="#toc"> Back to top</a>
      </div>
      <nuxt-content :document="message" />
      <div v-if="message.hasImage" class="text-left mt-4">
        <p :id="'img-' + message.createdAt" class="italic">Photo: {{ message.imgAlt }}.</p>
        <img :src="require(`/assets/img/${message.imgSrc}`)" :alt="message.imgAlt" class="mt-2 block max-h-96 rounded-xl shadow-sm" :aria-labelledby="'img-' + message.createdAt" loading="lazy" />
      </div>
    </div>
  </Article>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    let condolences = []

    const featured = await $content('condolences')
      .where({ featured: true })
      .sortBy('createdAt', 'asc')
      .fetch()

    condolences = condolences.concat(featured)

    const others = await $content('condolences')
      .where({ featured: { $ne: true } })
      .sortBy('from', 'asc')
      .fetch()

    condolences = condolences.concat(others)

    return {
      condolences
    }
  },
  head () {
    return {
      title: 'Condolences'
    }
  }
}
</script>
