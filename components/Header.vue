<template>
  <div style="height: 64px">
    <div class="fixed w-full z-10">
      <div ref="bg" class="absolute top-0 left-0 w-full">
        <div class="relative bg-background h-16 w-full z-10"></div>
        <svg
          class="curved-bottom fill-current z-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 24"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0v24a107.65 107.65 0 0 1 50-12 107.65 107.65 0 0 1 50 12V0z"
          ></path>
        </svg>
      </div>
      <div class="relative flex z-10 h-16 justify-start items-center px-8">
        <NuxtLink class="no-underline" to="/">Home</NuxtLink>
        <div
          class="
            pointer-events-none
            absolute
            top-0
            left-0
            w-full
            h-full
            flex
            justify-center
            items-center
          "
        >
          <div class="h-16 w-full">
            <div ref="logo" class="w-full h-full">
              <Logo />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({})
</script>

<style lang="postcss" scoped>
.curved-bottom {
  @apply fill-current text-background;
  height: 24px;
  width: 100%;
  margin-top: -12px;
  transition: opacity 0.5s ease;
  filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.7));
  z-index: -2;
}
</style>
