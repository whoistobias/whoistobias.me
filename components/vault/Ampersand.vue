<template>
  <div
    class="days-container rounded-lg overflow-hidden relative"
    @mouseenter="
      state.width = 0.06
      state.side = 'night'
    "
    @mouseleave="
      state.width = 0.94
      state.side = 'day'
    "
  >
    <div class="night w-full bg-black pt-8">
      <div
        class="
          header
          shadow-inner
          w-full
          bg-black
          flex
          justify-center
          items-center
          flex-col
          relative
        "
      >
        <div class="amp-mini-nav absolute w-full flex text-white">
          <div
            class="
              flex-1
              hidden
              lg:flex
              items-center
              justify-start
              fill-current
            "
          >
            <svg
              class="h-3 mx-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
            >
              <rect width="50" height="50" rx="6.25"></rect>
            </svg>
            <svg
              class="h-3 mx-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
            >
              <circle cx="25" cy="25" r="25"></circle>
            </svg>
            <svg
              class="h-3 mx-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 55.03 49.25"
            >
              <path
                d="M22.32 3L.81 40.25a6 6 0 0 0 5.2 9H49a6 6 0 0 0 5.19-9L32.71 3a6 6 0 0 0-10.39 0z"
              ></path>
            </svg>
          </div>
          <div
            v-block-text
            class="flex-1 hidden lg:flex items-center justify-end text-xs"
          >
            <span class="mx-1">merch</span>
            <span class="mx-1">hourss</span>
            <span class="mx-1">done</span>
          </div>
        </div>
        <svg
          :style="
            state.side === 'day'
              ? 'transform: translateY(12px);'
              : 'transform: translateY(0px);'
          "
          class="amp-logo h-24 -ml-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 164.9 198.4"
        >
          <path
            stroke="#ffffff"
            stroke-width="7"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            class="st0"
            d="M77.6 53.8l83.8 84.6s-12.7 21.5-36.4-2.2M77.6 53.8c-23.8 11.3-33.9 39.8-22.5 63.5s39.8 33.9 63.5 22.5c16.6-7.9 27.2-24.7 27.2-43.1m-27.2-42.9c11.6-11.3 11.8-29.9.5-41.5C107.8.7 89.2.5 77.6 11.8s-11.8 29.9-.5 41.5l.5.5"
          ></path>
          <path
            stroke="#ffffff"
            stroke-width="7"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            class="stem"
            d="M28 194.9L3.5 171l12.3 11.9 49.3-50.4"
          ></path>
        </svg>
      </div>
      <div
        v-block-text
        class="mini-content-box mt-24 py-6 md:px-24 bg-black text-white"
      >
        <h2>Some Things</h2>
        <div class="w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
    </div>

    <div
      class="day w-full h-full"
      :style="`transform: scaleX(${state.animatedWidth})`"
    >
      <div
        class="day-container pt-8"
        :style="`transform: scaleX(${1 / state.animatedWidth})`"
      >
        <div class="header bg-white flex justify-center items-center">
          <div class="amp-mini-nav absolute w-full flex text-black">
            <div
              class="
                flex-1
                hidden
                lg:flex
                items-center
                justify-start
                fill-current
              "
            >
              <svg
                class="h-3 mx-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
              >
                <rect width="50" height="50" rx="6.25"></rect>
              </svg>
              <svg
                class="h-3 mx-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
              >
                <circle cx="25" cy="25" r="25"></circle>
              </svg>
              <svg
                class="h-3 mx-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 55.03 49.25"
              >
                <path
                  d="M22.32 3L.81 40.25a6 6 0 0 0 5.2 9H49a6 6 0 0 0 5.19-9L32.71 3a6 6 0 0 0-10.39 0z"
                ></path>
              </svg>
            </div>
            <div
              v-block-text
              class="flex-1 hidden lg:flex items-center justify-end text-xs"
            >
              <span class="mx-1">merch</span>
              <span class="mx-1">hours</span>
              <span class="mx-1">space</span>
            </div>
          </div>
          <svg
            :style="
              state.side === 'day'
                ? 'transform: translateY(12px);'
                : 'transform: translateY(6px);'
            "
            class="amp-logo h-24 -ml-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 164.9 198.4"
          >
            <path
              stroke="#080808"
              stroke-width="7"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="none"
              class="st0"
              d="M77.6 53.8l83.8 84.6s-12.7 21.5-36.4-2.2M77.6 53.8c-23.8 11.3-33.9 39.8-22.5 63.5s39.8 33.9 63.5 22.5c16.6-7.9 27.2-24.7 27.2-43.1m-27.2-42.9c11.6-11.3 11.8-29.9.5-41.5C107.8.7 89.2.5 77.6 11.8s-11.8 29.9-.5 41.5l.5.5"
            ></path>
            <path
              stroke-width="7"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="none"
              class="stem"
              d="M28 194.9L3.5 171l12.3 11.9 49.3-50.4"
            ></path>
          </svg>
        </div>
        <div
          v-block-text
          class="mini-content-box mt-24 py-6 md:px-24 bg-white text-black"
        >
          <div class="max-w-2xl margin-auto">
            <h2>Great Content</h2>
            <div>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// import { Component, Vue, Watch } from 'vue-property-decorator'
import { defineComponent, watchEffect, reactive } from '@nuxtjs/composition-api'
import anime from 'animejs'

export default defineComponent({
  setup() {
    const state = reactive({
      width: 0.94,
      animatedWidth: 0.94,
      side: 'day',
    })

    let animation: anime.AnimeInstance

    watchEffect(() => {
      if (animation) animation.pause()
      animation = anime({
        targets: state,
        animatedWidth: state.width,
        easing: 'easeOutQuint',
        duration: 300,
      })
    })

    return {
      state,
    }
  },
})
</script>

<style lang="postcss" scoped>
.mini-content-box {
  padding-left: 8%;
  padding-right: 8%;
}
.amp-mini-nav {
  padding-left: 6%;
  padding-right: 6%;
}
@screen md {
  .mini-content-box {
    @apply px-24;
  }
  .amp-mini-nav {
    @apply px-24;
  }
}
.header {
  @apply shadow-inner w-full flex-col relative;
}
.amp-mini-nav {
  top: 80px;
  transition: transform 0.5s ease;
}

.amp-logo {
  @apply my-4;
  transition: transform 0.3s ease;
  transform: translateY(12px);
}

.night {
  grid-area: main;
  /* background: rgb(8, 8, 8);
    background: linear-gradient(
        321deg,
        rgba(8, 8, 8, 1) 0%,
        rgba(37, 37, 37, 1) 100%
    ); */
  background: url('~assets/img/bg-night.jpg');
  background-size: cover;
}
.day {
  @apply overflow-hidden;
  grid-area: main;
  transform-origin: top left;
  /* transition: transform 0.5s linear; */
}
.day-container {
  @apply w-full h-full;
  transform-origin: top left;
  background-size: cover;
  background: rgb(223, 223, 223);
  background: linear-gradient(
    325deg,
    rgba(223, 223, 223, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  background: url('~assets/img/bg-day.jpg');
  background-size: cover;
  /* transition: transform 0.5s linear; */
}
.days-container {
  display: grid;
  grid-template: 1fr / 1fr;
  grid-template-areas: 'main';
  /* max-height: 50vh; */
  &:hover {
    & .amp-mini-nav {
      transform: translateY(10px);
    }
  }
}
</style>

