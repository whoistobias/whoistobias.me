<template>
  <div style="height: 1200px">
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
      <div class="relative flex z-10 h-16 justify-end items-center px-8">
        <NuxtLink class="no-underline" to="/resume">Resume</NuxtLink>
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
              <svg
                ref="svg"
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 200.18 43.39"
              >
                <template v-if="route.name === 'index'">
                  <line
                    ref="path1"
                    x1="174.73"
                    x2="13.13"
                    y1="9.81"
                    y2="9.81"
                    style="
                      fill: none;
                      stroke: #c6a869;
                      stroke-linecap: round;
                      stroke-miterlimit: 10;
                    "
                  ></line>
                  <path
                    ref="path2"
                    d="M20.25,9.81A4.66,4.66,0,1,1,24.9,5.14h0"
                    style="
                      fill: none;
                      stroke: #c6a869;
                      stroke-linecap: round;
                      stroke-miterlimit: 10;
                    "
                  ></path>
                  <path
                    ref="path3"
                    d="M13.3,9.81a2,2,0,1,0,2,2"
                    style="
                      fill: none;
                      stroke: #c6a869;
                      stroke-linecap: round;
                      stroke-miterlimit: 10;
                    "
                  ></path>
                  <path
                    ref="path4"
                    d="M13.13,9.81a17.28,17.28,0,0,1-3.34-.64,1.75,1.75,0,0,0-.14.64,1.7,1.7,0,0,0,.14.63,17.26,17.26,0,0,1,3.34-.63"
                    style="
                      fill: #c6a869;
                      stroke: #c6a869;
                      stroke-linecap: round;
                      stroke-linejoin: round;
                    "
                  ></path>
                  <path
                    ref="path5"
                    d="M5.54,9.81a2.24,2.24,0,0,1,.63-1.49A10.86,10.86,0,0,1,.5,9.81a11,11,0,0,1,5.67,1.48,2.24,2.24,0,0,1-.63-1.48"
                    style="
                      fill: #c6a869;
                      stroke: #c6a869;
                      stroke-linecap: round;
                      stroke-linejoin: round;
                    "
                  ></path>
                  <line
                    ref="path6"
                    x1="25.5"
                    x2="187.1"
                    y1="33.58"
                    y2="33.58"
                    style="
                      fill: none;
                      stroke: #c6a869;
                      stroke-linecap: round;
                      stroke-miterlimit: 10;
                    "
                  ></line>
                  <path
                    ref="path7"
                    d="M180,33.58a4.66,4.66,0,1,1-4.66,4.66h0"
                    style="
                      fill: none;
                      stroke: #c6a869;
                      stroke-linecap: round;
                      stroke-miterlimit: 10;
                    "
                  ></path>
                  <path
                    ref="path8"
                    d="M186.94,33.58a2,2,0,1,0-2-2"
                    style="
                      fill: none;
                      stroke: #c6a869;
                      stroke-linecap: round;
                      stroke-miterlimit: 10;
                    "
                  ></path>
                  <path
                    ref="path9"
                    d="M187.1,33.58a17.24,17.24,0,0,1,3.35.64,1.67,1.67,0,0,0,0-1.28,17.24,17.24,0,0,1-3.35.64"
                    style="
                      fill: #c6a869;
                      stroke: #c6a869;
                      stroke-linecap: round;
                      stroke-linejoin: round;
                    "
                  ></path>
                  <path
                    ref="path10"
                    d="M194.69,33.58a2.24,2.24,0,0,1-.63,1.49,10.86,10.86,0,0,1,5.67-1.49,11,11,0,0,1-5.67-1.48,2.24,2.24,0,0,1,.63,1.48"
                    style="
                      fill: #c6a869;
                      stroke: #c6a869;
                      stroke-linecap: round;
                      stroke-linejoin: round;
                    "
                  ></path>
                </template>
                <path
                  ref="text"
                  d="M20.56,16.14c-.1-.38-.37-.44-.77-.44h-.16v-.79h.14c1,0,1.4.16,1.66,1.15L24,26.17c.18.67.33,1.48.33,1.48s.2-.79.4-1.48L28.11,15h1l2.94,11.18c.18.69.34,1.48.34,1.48s.16-.81.34-1.48l2.62-10.11c.26-1,.67-1.15,1.66-1.15h.14v.79H37c-.39,0-.67.06-.77.44L32.94,28.73h-1L29.11,18.31c-.23-.89-.49-2.19-.49-2.19s-.3,1.28-.55,2.17L25,28.73H23.88Zm21.13,0a.39.39,0,0,0-.33-.44h-1v-.79h1c.81,0,1.14.34,1.14,1.15v5.35H51.3V16.06c0-.81.34-1.15,1.15-1.15h1v.79H52.6a.39.39,0,0,0-.43.34V28.73H51.3V22.2H42.53v6.53h-.84Zm22.4-1.46a7,7,0,0,1,7,7h0a7,7,0,1,1-7-7Zm0,13.46a6.21,6.21,0,0,0,6.1-6.32v-.1a6.1,6.1,0,1,0-12.2,0h0a6.22,6.22,0,0,0,6,6.42Zm10.76-.2h1.26V15.7H74.85v-.79h3.38v.79H77V27.94h1.27v.79H74.85Zm7.68-1.5a5.11,5.11,0,0,0,3.69,1.7,2.88,2.88,0,0,0,3.07-2.67.76.76,0,0,0,0-.15c0-3.87-7-3-7-7.27,0-1.77,1.54-3.37,4-3.37,1.2,0,3.57.49,3.57,2.21v.87H89.1v-.67c0-.91-1.26-1.58-2.7-1.58-2.05,0-3.18,1.22-3.18,2.52,0,3.6,7,2.67,7,7.25A3.73,3.73,0,0,1,86.46,29h-.24A5.7,5.7,0,0,1,82,27.1Zm15.52-8.86H96.9a.39.39,0,0,0-.43.35v.85H93.41V16c0-1,.35-1.36,1.36-1.36h10.09c1,0,1.36.35,1.36,1.36v2.8h-3.06V18a.39.39,0,0,0-.35-.43h-1.23V28.73H98.05Zm18-3.2a7.14,7.14,0,0,1,7.39,6.89v.32a7.39,7.39,0,0,1-14.77,0,7.14,7.14,0,0,1,7.07-7.21Zm0,11.33a3.88,3.88,0,0,0,3.71-4v-.08a3.72,3.72,0,0,0-7.42-.55,5,5,0,0,0,0,.55,3.89,3.89,0,0,0,3.63,4.12Zm11.64-8.13h-1.29v-3h6.18c2.83,0,4.8,1.26,4.8,3.69a3.38,3.38,0,0,1-1.64,3,3.15,3.15,0,0,1,2.21,3.18c0,3.08-2.56,4.2-5.37,4.2h-3.45c-1,0-1.44-.43-1.44-1.44Zm4.93,2.51a1.2,1.2,0,0,0,1.22-1.16c0-.05,0-.1,0-.15a1.14,1.14,0,0,0-1.07-1.21h-1.54v2.51Zm-1,5.68h1.26a1.36,1.36,0,0,0,1.41-1.29,1.15,1.15,0,0,0,0-.19,1.32,1.32,0,0,0-1.17-1.44h-1.93v2.49a.4.4,0,0,0,.36.44h.08Zm9.61,0h1.48V17.58h-1.48v-3h6.3v3H146v8.19h1.48v3h-6.3Zm9.08,0h.38c.31,0,.41-.1.53-.43L155,14.62h3.67l3.85,10.72c.12.33.22.43.53.43h.38v3h-2.27a1.43,1.43,0,0,1-1.66-1.14l-.61-1.82H154.8l-.61,1.82a1.43,1.43,0,0,1-1.66,1.14h-2.27Zm7.9-2.86-.71-2.35c-.28-.89-.58-2.33-.58-2.33s-.3,1.44-.58,2.33l-.71,2.35Zm10,1.26a5,5,0,0,0,3.23,1.66c.72,0,1.43-.25,1.43-1,0-1.56-6.4-1.74-6.4-6.16,0-2.55,2.23-4.25,5-4.25,1.88,0,4.51.91,4.51,3.06V19h-3.16v-.61c0-.52-.73-.83-1.39-.83s-1.44.3-1.44,1c0,1.72,6.4,1.48,6.4,6.12,0,2.35-1.84,4.36-5,4.36a6.91,6.91,0,0,1-5.15-2.33Z"
                  style="fill: #c6a869"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ScreenTween from 'screen-tween'
import {
  defineComponent,
  onMounted,
  ref,
  watchEffect,
  useRoute,
} from '@nuxtjs/composition-api'
import anime from 'animejs'

export default defineComponent({
  setup(_, context) {
    const route = useRoute()

    if (route.value.name === 'index') {
      const scrollRatio = ref(0)

      onMounted(() => {
        middle =
          window.innerHeight / 2 -
          (context.refs.logo as Element).clientHeight / 2

        upAnimation = anime
          .timeline({
            easing: 'easeInOutCubic',
            autoplay: false,
          })
          .add(
            {
              targets: context.refs.logo,
              duration: 1200,
              translateY: [middle, 0],
              scale: [1.6, 1],
              opacity: [1, 1],
            },
            0
          )
          .add(
            {
              targets: context.refs.svg,
              skewY: [-6.5, 0],
              duration: 800,
            },
            300
          )
          .add(
            {
              targets: [context.refs.path1, context.refs.path6],
              strokeDashoffset: [doubleDashOffset, anime.setDashoffset],
              duration: 800,
              easing: 'easeOutSine',
            },
            300
          )
          .add(
            {
              targets: [context.refs.path2, context.refs.path7],
              strokeDashoffset: [0, anime.setDashoffset],
              duration: 400,
            },
            0
          )
          .add(
            {
              targets: [context.refs.path3, context.refs.path8],
              strokeDashoffset: [0, anime.setDashoffset],
              duration: 400,
            },
            100
          )
          .add(
            {
              targets: [context.refs.path4, context.refs.path9],
              strokeDashoffset: [doubleDashOffset, anime.setDashoffset],
              fill: 'rgba(0, 0, 0, 0)',
              duration: 500,
            },
            200
          )
          .add(
            {
              targets: [context.refs.path5, context.refs.path10],
              strokeDashoffset: [doubleDashOffset, anime.setDashoffset],
              fill: 'rgba(0, 0, 0, 0)',
              duration: 400,
            },
            250
          )
          .add(
            {
              targets: [context.refs.bg],
              opacity: [0, 1],
              duration: 400,
            },
            800
          )
        // .add(
        //   {
        //     targets: [context.refs.bgCurve],
        //     // fill: ['rgba(0,0,0,0)', '#0D1616'],
        //     duration: 400,
        //   },
        //   800
        // )

        anime.set(
          [
            context.refs.path1,
            context.refs.path6,
            context.refs.path2,
            context.refs.path7,
            context.refs.path3,
            context.refs.path8,
            context.refs.path4,
            context.refs.path9,
            context.refs.path5,
            context.refs.path10,
          ],
          {
            strokeDashoffset: anime.setDashoffset,
            fill: 'rgba(0, 0, 0, 0)',
          }
        )
        anime.set(context.refs.svg, {
          skewY: 0,
        })
        anime.set(context.refs.logo, {
          translateY: middle,
          scale: 1.6,
          opacity: 0,
        })

        const intro = anime
          .timeline({
            autoplay: false,
            easing: 'easeOutCirc',
          })
          .add(
            {
              targets: context.refs.logo,
              easing: 'easeOutCirc',
              opacity: [0, 1],
              duration: 1000,
            },
            0
          )
          .add(
            {
              targets: context.refs.svg,
              duration: 1000,
              translateY: [-20, 0],
            },
            0
          )
          .add(
            {
              targets: context.refs.svg,
              skewY: [0, -6.5],
              duration: 1400,
            },
            1000
          )
          .add(
            {
              targets: [context.refs.path1, context.refs.path6],
              strokeDashoffset: [anime.setDashoffset, 0],
              duration: 300,
              easing: 'easeOutSine',
            },
            1000
          )
          .add(
            {
              targets: [context.refs.path2, context.refs.path7],
              strokeDashoffset: [anime.setDashoffset, 0],
              duration: 5000,
            },
            1240
          )
          .add(
            {
              targets: [context.refs.path3, context.refs.path8],
              strokeDashoffset: [anime.setDashoffset, 0],
              duration: 4000,
            },
            1280
          )
          .add(
            {
              targets: [context.refs.path4, context.refs.path9],
              strokeDashoffset: [anime.setDashoffset, 0],
              fill: ['rgba(0, 0, 0, 0)', '#c6a869'],
              duration: 1400,
            },
            1280
          )
          .add(
            {
              targets: [context.refs.path5, context.refs.path10],
              strokeDashoffset: [anime.setDashoffset, 0],
              fill: ['rgba(0, 0, 0, 0)', '#c6a869'],
              duration: 1400,
            },
            1350
          )

        const tween = new ScreenTween({
          distance: 1000,
          // callback: (v) => console.log(v),
          target: scrollRatio,
          property: 'value',
          throttle: 80,
          speed: 0.8,
        })
        tween.stop()

        let start: number | null = null

        function playIntro(timestamp: number) {
          if (!start) start = timestamp
          let progress = timestamp - start
          const position = progress / intro.duration

          if (document.documentElement.scrollTop !== 0) {
            if (position > 0.8) {
              start -= intro.duration
            } else if (position > 0.3) {
              start -= 80
            } else {
              start -= 30
            }
          }

          progress = Math.min(progress, intro.duration)
          intro.seek(progress)

          if (progress >= intro.duration) {
            tween.start()
            return
          }
          requestAnimationFrame(playIntro)
        }

        setTimeout(() => requestAnimationFrame(playIntro), 300)

        watchEffect(() => {
          upAnimation.seek(scrollRatio.value * upAnimation.duration)
        })
      })

      let upAnimation: anime.AnimeInstance
      let middle: number

      // const reverseDashOffset = (el: SVGElement) => -anime.setDashoffset(el)
      const doubleDashOffset = (el: SVGElement) => anime.setDashoffset(el) * 2

      onMounted(() => {})
    }
    return { route }
  },
})
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
