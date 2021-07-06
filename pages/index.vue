<template>
  <div>
    <div class="container max-w-xl py-72">
      <nuxt-content :document="homeContent" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, useAsync, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  layout: 'home',
  setup() {
    const { $content } = useContext()
    const homeContent = useAsync(() => $content('homeContent').fetch())

    return { homeContent }
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
    }
  },
})
</script>

<style lang="postcss" scoped>
::v-deep .nuxt-content {
  & a {
    @apply text-primary underline;
  }
}
</style>
